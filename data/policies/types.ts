export type PolicySubsection = {
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
};

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  subsections?: readonly PolicySubsection[];
};

export type LegalPageData = {
  title: string;
  description: string;
  lastUpdated: string;
  path: string;
  sections: readonly PolicySection[];
};
