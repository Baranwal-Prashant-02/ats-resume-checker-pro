📚 ATS Resume Checker Pro

A modern ATS (Applicant Tracking System) Resume Analyzer built with React.js that helps job seekers evaluate how well their resume matches a target Job Description (JD).

The application performs local PDF parsing, skill extraction, keyword relevance analysis, section detection, ATS score calculation, and generates a downloadable ATS report with actionable recommendations.

---

🚀 Overview

Recruiters often use Applicant Tracking Systems (ATS) to filter resumes before they reach a hiring manager.

Many candidates get rejected not because they lack skills, but because:

* Important skills are missing from the resume
* Resume structure is incomplete
* Keywords do not align with the Job Description
* ATS systems cannot properly identify relevant information

ATS Resume Checker Pro helps candidates identify these gaps and improve their resumes before applying.

---

🎯 Problem Statement

A candidate may have the required skills but still receive a low ATS score because:

* Required keywords are missing
* Important sections are absent
* Resume content does not align with the job description
* Skills are not highlighted effectively

Manually comparing resumes with job descriptions is time-consuming and error-prone.

This project automates that process and provides instant ATS feedback.

---

# Solution Approach

The application compares a resume against a target Job Description and evaluates it using three major metrics.

| Metric            | Weight |
| ----------------- | ------ |
| Skills Match      | 60%    |
| Resume Structure  | 20%    |
| Keyword Relevance | 20%    |

### Final ATS Score Formula

```text
ATS Score =
(Skill Match × 60%)
+
(Resume Structure × 20%)
+
(Keyword Relevance × 20%)
```

This weighted approach prioritizes technical skill matching while still considering resume organization and keyword relevance.

---

# Key Features

## PDF Resume Upload

* Upload PDF resumes
* Client-side validation
* Multi-page PDF support
* Text extraction using PDF.js
* No file upload to any server

---

## ATS Score Analysis

Generates:

* Overall ATS Score
* Skill Match Score
* Resume Structure Score
* Keyword Relevance Score

---

## Skill Matching

The system compares:

* Resume Skills
* Job Description Skills

and identifies:

### Matched Skills

```text
✓ React
✓ JavaScript
✓ Node.js
✓ MongoDB
```

### Missing Skills

```text
✗ Docker
✗ AWS
✗ Redux
```

---

## Resume Section Detection

Checks whether the resume contains important ATS sections:

* Summary / Objective
* Education
* Skills
* Experience
* Projects
* Certifications

Missing sections reduce ATS compatibility and generate recommendations.

---

## Keyword Relevance Analysis

The ATS engine:

* Removes stop words
* Cleans text
* Extracts relevant keywords
* Compares resume keywords with JD keywords

This helps evaluate content alignment beyond technical skills.

---

## Job Match Rating

Based on the final ATS score.

| Score Range | Rating            |
| ----------- | ----------------- |
| 90+         | Excellent Match   |
| 75–89       | Strong Match      |
| 60–74       | Moderate Match    |
| Below 60    | Needs Improvement |

---

## Resume Improvement Checklist

Provides a visual checklist showing:

```text
✓ Skills Section Present
✓ Projects Section Present
✓ Experience Section Present
□ Certification Section Missing
```

This helps candidates quickly identify improvement opportunities.

---

## ATS Suggestions

Automatically generates recommendations such as:

```text
Add or highlight "Docker" if you have worked with it.
Add or highlight "AWS" if you have worked with it.
Add a Certifications section to improve ATS compatibility.
```

---

## Download ATS Report

Generate a downloadable PDF report containing:

* ATS Score
* Job Match Rating
* Matched Skills
* Missing Skills
* Missing Sections
* Resume Improvement Checklist
* ATS Suggestions
* Generation Date

---

# Data Privacy & Security

This application follows a client-side processing approach.

- Resume PDFs are processed entirely in the browser.
- No resume data is uploaded to any server.
- No database is used.
- No user information is stored or tracked.
- ATS analysis is performed locally using JavaScript.

This ensures complete privacy and makes the application suitable for analyzing sensitive resumes.

### No Data Storage

The application:

* Does not upload resumes
* Does not store files
* Does not use a database
* Does not track user data

Resume analysis is performed entirely on the client side using JavaScript.

---

# System Architecture

```text
                    ┌────────────────────┐
                    │     Resume PDF     │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │    pdfjs-dist      │
                    │   PDF Extraction   │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │   Resume Text      │
                    └─────────┬──────────┘
                              │
                              │
                              ▼

                    ┌────────────────────┐
                    │ Job Description    │
                    │     (Text Input)   │
                    └─────────┬──────────┘
                              │
                              ▼

              ┌──────────────────────────────┐
              │       ATS Engine             │
              │       (atsEngine.js)         │
              └──────────────┬───────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼

┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ Skill Matching │  │ Section Check  │  │ Keyword Match  │
└────────────────┘  └────────────────┘  └────────────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼

              ┌──────────────────────────────┐
              │ ATS Score Calculation        │
              │ Skills → 60%                │
              │ Sections → 20%              │
              │ Keywords → 20%              │
              └──────────────┬───────────────┘
                             │
                             ▼

                    ATS Analysis Dashboard

                             │
                             ▼

                    PDF Report Generation
```

---

# Project Structure

```text
ATS-RESUME-CHECKER-PRO
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ResumeUpload.jsx
│   │   ├── JobDescription.jsx
│   │   ├── ATSResult.jsx
│   │   └── Footer.jsx
│   │
│   ├── utils/
│   │   ├── atsEngine.js
│   │   ├── pdfParser.js
│   │   └── generatePDF.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Component Responsibilities

## Header.jsx

* Hero section
* Project introduction
* User guidance

---

## ResumeUpload.jsx

Handles:

* Resume PDF upload
* File validation
* Resume text extraction
* Resume statistics

---

## JobDescription.jsx

Handles:

* Job Description input
* JD validation
* User interaction

---

## ATSResult.jsx

Displays:

* ATS Score
* Job Match Rating
* Skill Match Score
* Resume Structure Score
* Keyword Relevance Score
* Matched Skills
* Missing Skills
* Missing Sections
* Suggestions
* Resume Improvement Checklist

---

## Footer.jsx

Displays:

* Project information
* Privacy notice
* Author information

---

# Utility Modules

## pdfParser.js

Uses:

```text
pdfjs-dist
```

Responsibilities:

* Read uploaded PDF files
* Extract text from all pages
* Count pages
* Return parsed content

No data is stored during this process.

---

## atsEngine.js

Core ATS processing module.

### Text Normalization

Standardizes terms such as:

```text
Full Stack
Full-Stack
FullStack
```

into a common format.

---

### Skill Extraction

Detects technologies such as:

* React
* JavaScript
* Node.js
* Express.js
* MongoDB
* Git
* Docker
* AWS
* TypeScript
* Redux
* Next.js

using predefined aliases.

---

### Section Detection

Checks for:

* Summary
* Education
* Skills
* Experience
* Projects
* Certifications

---

### Keyword Relevance

Filters:

* Stop words
* Common filler words
* Non-relevant tokens

to improve keyword matching quality.

---

### Score Calculation

Produces:

* Skill Score
* Section Score
* Keyword Score
* Final ATS Score

using weighted evaluation.

---

### Recommendation Generation

Creates:

* Missing Skills
* Missing Sections
* ATS Suggestions
* Resume Improvement Checklist
* Job Match Rating

---

## generatePDF.js

Uses:

```text
jsPDF
```

Responsibilities:

* Generate ATS reports
* Add generation date
* Add job match rating
* Export analysis results as PDF

---

# Tech Stack

| Technology                 | Purpose                               |
| -------------------------- | ------------------------------------- |
| React.js                   | Frontend UI Development               |
| Vite                       | Build Tool & Development Server       |
| Tailwind CSS               | Responsive Styling                    |
| JavaScript                 | ATS Logic & Application Functionality |
| pdfjs-dist                 | PDF Parsing & Text Extraction         |
| jsPDF                      | PDF Report Generation                 |
| Lucide React               | Modern Icons                          |
| React Circular Progressbar | ATS Score Visualization               |
| Git & GitHub               | Version Control                       |
| Vercel                     | Deployment & Hosting                  |

---

# How It Works

### Step 1

Upload a PDF Resume.

### Step 2

Paste a Job Description.

### Step 3

Click:

```text
Analyze Resume
```

### Step 4

The ATS Engine:

* Extracts resume text
* Extracts JD skills
* Compares skills
* Detects sections
* Calculates scores
* Generates recommendations

### Step 5

Review:

* ATS Score
* Job Match Rating
* Matched Skills
* Missing Skills
* Missing Sections
* Suggestions
* Resume Improvement Checklist

### Step 6

Download the ATS Report PDF.

---

# Scalability

The project is designed to be easily extended with:

* AI Resume Recommendations
* Resume Rewriting Assistance
* Multiple JD Comparison
* Industry-Specific Skill Libraries
* Cloud-Based Resume Storage
* Recruiter Dashboards
* Authentication System

---

# Future Improvements

* AI-Powered Resume Suggestions
* Semantic Skill Matching
* Multiple Resume Comparison
* Resume Version Tracking
* Recruiter Analytics Dashboard
* Industry-Specific ATS Templates

---

# Author

**Prashant Kumar Baranwal**

B.Tech Computer Science & Engineering (2026)

GitHub: https://github.com/baranwalprashant2

---

⭐ If you found this project useful, consider giving it a star.
