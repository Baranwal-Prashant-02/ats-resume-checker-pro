const STOP_WORDS = [
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "for",
  "with",
  "from",
  "into",
  "of",
  "on",
  "at",
  "to",
  "in",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "this",
  "that",
  "these",
  "those",
  "candidate",
  "candidates",
  "job",
  "role",
  "position",
  "looking",
  "seeking",
  "required",
  "preferred",
  "experience",
  "responsible",
  "responsibilities",
  "ability",
  "strong",
  "good",
  "excellent",
  "knowledge",
  "work",
  "working",
  "team",
  "years",
  "year",
  "about",
  "who",
  "have",
  "should",
  "using",
  "linkedin",
  "gmail",
  "phone",
  "mobile",
  "contact",
  "address",
  "india",
  "resume",
  "gmail",
  "remote",
  "hybrid",
  "location",
  "responsibilities",
  "qualifications",
];

const SKILL_LIBRARY = {
  react: ["react", "react.js", "reactjs"],

  oop: [
    "oop",
    "oops",
    "object oriented programming",
    "object-oriented programming",
  ],

  fullstack: ["full stack", "full-stack", "fullstack"],

  javascript: ["javascript", "js", "es6"],

  html: ["html", "html5"],

  css: ["css", "css3"],

  tailwind: ["tailwind", "tailwindcss"],

  nodejs: ["node", "node.js", "nodejs"],

  express: ["express", "express.js"],

  mongodb: ["mongodb"],

  mysql: ["mysql"],

  sql: ["sql"],

  python: ["python"],

  java: ["java"],

  git: ["git"],

  github: ["github"],

  postman: ["postman"],

  docker: ["docker"],

  aws: ["aws"],

  typescript: ["typescript", "ts"],

  redux: ["redux"],

  nextjs: ["next.js", "nextjs"],

  jwt: ["jwt", "jwt authentication"],

  restapi: ["rest api", "rest apis", "rest", "api", "apis"],

  dbms: ["dbms"],

  dsa: ["data structures", "algorithms", "dsa"],

  testing: ["testing", "unit testing"],

  agile: ["agile"],

  cicd: ["ci/cd"],

  authentication: ["authentication"],
};

const REQUIRED_SECTIONS = [
  {
    name: "Summary / Objective",
    keywords: [
      "summary",
      "professional summary",
      "objective",
      "career objective",
    ],
  },
  {
    name: "Education",
    keywords: ["education", "academic"],
  },
  {
    name: "Skills",
    keywords: ["skills", "technical skills"],
  },
  {
    name: "Experience",
    keywords: [
      "experience",
      "work experience",
      "employment",
      "internship",
      "intern",
    ],
  },
  {
    name: "Projects",
    keywords: ["project", "projects"],
  },
  {
    name: "Certifications",
    keywords: ["certification", "certifications", "certificate"],
  },
];

function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/full-stack/g, "fullstack")
    .replace(/front-end/g, "frontend")
    .replace(/back-end/g, "backend")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSkills(text) {
  const lowerText = text.toLowerCase();

  const foundSkills = [];

  Object.entries(SKILL_LIBRARY).forEach(([mainSkill, aliases]) => {
    const found = aliases.some((alias) => {
      const pattern = new RegExp(
        `\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
        "i",
      );

      return pattern.test(lowerText);
    });

    if (found) {
      foundSkills.push(mainSkill);
    }
  });

  return foundSkills;
}

function extractRelevantKeywords(text) {
  const words = cleanText(text)
    .split(" ")
    .filter((word) => word.length > 3 && !STOP_WORDS.includes(word));

  return [...new Set(words)].slice(0, 30);
}

function checkSections(resumeText) {
  const lowerText = resumeText.toLowerCase();

  const missingSections = [];

  REQUIRED_SECTIONS.forEach((section) => {
    const found = section.keywords.some((keyword) =>
      lowerText.includes(keyword),
    );

    if (!found) {
      missingSections.push(section.name);
    }
  });

  return missingSections;
}

export function analyzeResume(resumeText, jobDescription) {
  const resumeSkills = extractSkills(resumeText);

  const jdSkills = extractSkills(jobDescription);

  const matchedSkills = jdSkills.filter((skill) =>
    resumeSkills.includes(skill),
  );

  const missingSkills = jdSkills.filter(
    (skill) => !resumeSkills.includes(skill),
  );

  const skillScore =
    jdSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / jdSkills.length) * 100);

  const resumeKeywords = extractRelevantKeywords(resumeText);

  const jdKeywords = extractRelevantKeywords(jobDescription);

  const matchedKeywords = jdKeywords.filter((keyword) =>
    resumeKeywords.includes(keyword),
  );

  const keywordScore =
    jdKeywords.length === 0
      ? 0
      : Math.round((matchedKeywords.length / jdKeywords.length) * 100);

  const missingSections = checkSections(resumeText);

  const sectionScore = Math.round(
    ((REQUIRED_SECTIONS.length - missingSections.length) /
      REQUIRED_SECTIONS.length) *
      100,
  );

  const finalScore = Math.round(
    skillScore * 0.6 + sectionScore * 0.2 + keywordScore * 0.2,
  );

  const suggestions = [];

  missingSkills.slice(0, 10).forEach((skill) => {
    suggestions.push(`Add or highlight "${skill}" if you have worked with it.`);
  });

  missingSections.forEach((section) => {
    suggestions.push(
      `Add a "${section}" section to improve ATS compatibility.`,
    );
  });

  const checklist = [];

  // Skills found
  matchedSkills.forEach((skill) => {
    checklist.push({
      text: `${skill} skill matched`,
      completed: true,
    });
  });

  // Skills missing
  missingSkills.forEach((skill) => {
    checklist.push({
      text: `${skill} skill missing`,
      completed: false,
    });
  });

  // Resume sections
  REQUIRED_SECTIONS.forEach((section) => {
    checklist.push({
      text: `${section.name} section`,
      completed: !missingSections.includes(section.name),
    });
  });

  return {
    score: finalScore,

    skillScore,
    keywordScore,
    sectionScore,

    resumeSkills,
    jdSkills,

    matchedSkills,
    missingSkills,

    // resumeKeywords,
    // jdKeywords,

    matchedKeywords,

    missingSections,

    suggestions,

    checklist,
  };
}
