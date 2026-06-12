import fs from "fs";

const sql = fs.readFileSync("D:/jsgamespoint data/mwp_db/db_dom274153.sql", "utf8");

// Extract businessDesc from zipwp_import_site_details
const importIdx = sql.indexOf("zipwp_import_site_details");
const importChunk = sql.substring(importIdx, importIdx + 8000);
const bizDescMatch = importChunk.match(/businessDesc";s:\d+:"([\s\S]*?)";s:/);
let businessDesc = "";
if (bizDescMatch) {
  businessDesc = bizDescMatch[1]
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'");
  fs.writeFileSync("D:/jsgamespoint/scripts/extracted-business.txt", businessDesc);
}

// Extract readable text from WP block HTML
function extractReadableText(html) {
  const results = [];
  const patterns = [
    /uagb-heading-text[^>]*>([^<]+)</gi,
    /wp:heading[^>]*-->\s*<h[1-6][^>]*>([^<]+)</gi,
    /<h[1-6][^>]*class="[^"]*wp-block-heading[^"]*"[^>]*>([^<]+)</gi,
    /<p[^>]*>([^<]{15,})</gi,
    /"heading":"([^"]{5,})"/gi,
    /"description":"([^"]{10,})"/gi,
    /"text":"([^"]{10,})"/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html)) !== null) {
      const t = m[1].replace(/\\u002d/g, "-").replace(/&nbsp;/g, " ").trim();
      if (t.length > 5 && !t.startsWith("wp:") && !t.includes("block_id")) results.push(t);
    }
  }
  return [...new Set(results)];
}

// Find page rows by title pattern at end of row
const pageTitles = ["Home", "About", "Services", "Contact", "Products", "Shop", "Blog"];
const foundPages = {};

for (const title of pageTitles) {
  const regex = new RegExp(
    `INSERT INTO \`wp_44689bce51_posts\` VALUES \\('(\\d+)'[^;]*?'${title}','[^']*','publish'[^;]*?'([^']*)',\\d+,'page'`,
    "g"
  );
  let m;
  while ((m = regex.exec(sql)) !== null) {
    const id = m[1];
    const slug = m[2];
    // Get content - find the row start and extract content field
    const rowStart = m.index;
    const rowEnd = sql.indexOf(");", rowStart);
    const row = sql.substring(rowStart, rowEnd + 2);
    // Content is 4th quoted field after VALUES (
    const contentMatch = row.match(/VALUES \('\d+','[^']*','[^']*','[^']*','((?:[^'\\]|\\.|'')*)'/);
    const content = contentMatch ? contentMatch[1].replace(/''/g, "'") : "";
    const texts = extractReadableText(content);
    if (!foundPages[title] || texts.length > (foundPages[title].texts?.length || 0)) {
      foundPages[title] = { id, title, slug, texts, contentLength: content.length };
    }
  }
}

// Products
const productRegex = /INSERT INTO `wp_44689bce51_posts` VALUES \('(\d+)'[^;]*?'([^']+)','[^']*','publish'[^;]*?'([^']*)',\d+,'product'/g;
const products = [];
let pm;
while ((pm = productRegex.exec(sql)) !== null) {
  products.push({ id: pm[1], title: pm[2], slug: pm[3] });
}

// Also search for key phrases in entire SQL for stats/testimonials
const keyPhrases = [
  "Global Digital Solutions",
  "Emma Johnson",
  "Michael Smith",
  "five years",
  "923374960190",
  "Global Customers",
  "PC Game Recharges",
  "Social Media",
  "Logo Design",
  "Video Editing",
];

const phraseContext = {};
for (const phrase of keyPhrases) {
  const idx = sql.indexOf(phrase);
  if (idx > -1) {
    phraseContext[phrase] = sql.substring(Math.max(0, idx - 50), idx + phrase.length + 200).replace(/\n/g, " ");
  }
}

const output = {
  businessDesc,
  pages: foundPages,
  products,
  phraseContext,
};

fs.writeFileSync("D:/jsgamespoint/scripts/extracted-content.json", JSON.stringify(output, null, 2));

console.log("Business desc length:", businessDesc.length);
console.log("\nPages found:", Object.keys(foundPages).join(", "));
for (const [title, p] of Object.entries(foundPages)) {
  console.log(`\n=== ${title} (/${p.slug}) - ${p.texts.length} texts ===`);
  p.texts.slice(0, 15).forEach((t) => console.log(" -", t.substring(0, 100)));
}
console.log("\nProducts:", products.length);
products.slice(0, 20).forEach((p) => console.log(` - ${p.title}`));
