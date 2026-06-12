import fs from "fs";

const sql = fs.readFileSync("D:/jsgamespoint data/mwp_db/db_dom274153.sql", "utf8");

// Extract businessDesc - find s:2820:" and read until closing ";
function extractSerializedString(key) {
  const marker = `${key}";s:`;
  const idx = sql.indexOf(marker);
  if (idx === -1) return null;
  const start = sql.indexOf(':"', idx) + 2;
  // Read length
  const lenMatch = sql.substring(idx, start).match(/s:(\d+):/);
  if (!lenMatch) return null;
  const len = parseInt(lenMatch[1]);
  return sql.substring(start, start + len).replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\'/g, "'");
}

const businessDesc = extractSerializedString('businessDesc');
const businessDescription = extractSerializedString('business_description');

fs.writeFileSync("D:/jsgamespoint/scripts/extracted-business.txt", businessDesc || businessDescription || "");

// Extract all heading texts from home page post 850
const homeMarker = "INSERT INTO `wp_44689bce51_posts` VALUES ('850'";
const homeIdx = sql.indexOf(homeMarker);
const homeEnd = sql.indexOf(");", homeIdx);
const homeRow = sql.substring(homeIdx, homeEnd);

const headings = [];
const headingRe = /uagb-heading-text[^>]*>([^<\\]+)/g;
let m;
while ((m = headingRe.exec(homeRow)) !== null) headings.push(m[1].trim());

const infoBoxRe = /uagb-info-box-title[^>]*>([^<]+)</g;
const infoDescRe = /uagb-info-box-text[^>]*>([^<]+)</g;
const titles = [];
const descs = [];
while ((m = infoBoxRe.exec(homeRow)) !== null) titles.push(m[1].trim());
while ((m = infoDescRe.exec(homeRow)) !== null) descs.push(m[1].trim());

// Services page 278
const svcMarker = "INSERT INTO `wp_44689bce51_posts` VALUES ('278'";
const svcIdx = sql.indexOf(svcMarker);
const svcEnd = sql.indexOf(");", svcIdx);
const svcRow = sql.substring(svcIdx, svcEnd);
const svcTitles = [];
const svcDescs = [];
while ((m = infoBoxRe.exec(svcRow)) !== null) svcTitles.push(m[1].trim());
const svcDescRe2 = /uagb-info-box-text[^>]*>([^<]+)</g;
while ((m = svcDescRe2.exec(svcRow)) !== null) svcDescs.push(m[1].trim());

// About page 286
const aboutMarker = "INSERT INTO `wp_44689bce51_posts` VALUES ('286'";
const aboutIdx = sql.indexOf(aboutMarker);
const aboutEnd = sql.indexOf(");", aboutIdx);
const aboutRow = sql.substring(aboutIdx, aboutEnd);
const aboutTexts = [];
const aboutRe = /uagb-heading-text[^>]*>([^<\\]+)|uagb-info-box-text[^>]*>([^<]+)</g;
while ((m = aboutRe.exec(aboutRow)) !== null) aboutTexts.push((m[1] || m[2]).trim());

// Products - search publish product
const products = [];
const prodRe = /VALUES \('(\d+)'[^;]{0,200}'publish'[^;]{0,500},'([^']+)',\d+,'product'/g;
while ((m = prodRe.exec(sql)) !== null) {
  // title is wrong position - try different approach
}

// Simpler product search
const prodLines = sql.match(/INSERT INTO `wp_44689bce51_posts` VALUES \('10\d+',[^;]+'product','',0\)/g) || [];
for (const line of prodLines) {
  const titleM = line.match(/,'([^']{3,80})','','(?:publish|draft)'/);
  const statusM = line.includes("'publish'");
  if (titleM && statusM) products.push(titleM[1]);
}

const output = {
  businessDesc,
  homeHeadings: headings,
  homeServiceTitles: titles,
  homeServiceDescs: descs,
  servicesPageTitles: svcTitles,
  servicesPageDescs: svcDescs,
  aboutTexts,
  products: [...new Set(products)],
};

fs.writeFileSync("D:/jsgamespoint/scripts/extracted-content.json", JSON.stringify(output, null, 2));

console.log("=== BUSINESS DESC ===\n", businessDesc?.substring(0, 3500));
console.log("\n=== HOME HEADINGS ===", headings);
console.log("\n=== HOME SERVICES ===");
titles.forEach((t, i) => console.log(`${i + 1}. ${t}: ${descs[i] || ""}`));
console.log("\n=== SERVICES PAGE ===");
svcTitles.forEach((t, i) => console.log(`${i + 1}. ${t}: ${svcDescs[i] || ""}`));
console.log("\n=== ABOUT ===", aboutTexts.slice(0, 10));
console.log("\n=== PRODUCTS ===", products.slice(0, 15));
