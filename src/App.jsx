// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />

//       <main className="container">

//         <div className="upload-placeholder">
//           Resume Upload Section Coming Next
//         </div>

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState, useRef } from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import ResumeUpload from "./components/ResumeUpload";
import JobDescription from "./components/JobDescription";
import ATSResult from "./components/ATSResult";

import { analyzeResume } from "./utils/atsEngine";

function App() {
const [resumeText, setResumeText] =
useState("");

const [jobDescription, setJobDescription] =
useState("");

const [analysisResult, setAnalysisResult] =
useState(null);

const [analyzing, setAnalyzing] =
useState(false);

const resultRef = useRef(null);

const handleAnalyze = () => {
if (!resumeText) {
alert("Please upload a resume.");
return;
}


if (!jobDescription.trim()) {
  alert("Please paste a job description.");
  return;
}

setAnalyzing(true);

setTimeout(() => {
  const result = analyzeResume(
    resumeText,
    jobDescription
  );

  setAnalysisResult(result);

  setAnalyzing(false);

  setTimeout(() => {
    resultRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}, 1200);


};

return ( <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <Header />

    <ResumeUpload
      resumeText={resumeText}
      setResumeText={setResumeText}
    />

    <JobDescription
      jobDescription={jobDescription}
      setJobDescription={setJobDescription}
    />

    <div className="text-center mt-8">

      <button
        onClick={handleAnalyze}
        disabled={analyzing}
        className="
          bg-cyan-500
          hover:bg-cyan-400
          disabled:opacity-50
          disabled:cursor-not-allowed
          text-slate-950
          font-semibold
          px-8
          py-3
          rounded-xl
          transition
        "
      >
        {analyzing
          ? "Analyzing Resume..."
          : "Analyze Resume"}
      </button>

    </div>

    {!analysisResult && (
      <div
        className="
          max-w-4xl
          mx-auto
          mt-10
          bg-slate-900
          rounded-2xl
          p-8
          text-center
        "
      >
        <h2 className="text-2xl font-bold">
          Ready for ATS Analysis
        </h2>

        <p className="text-slate-400 mt-3">
          Upload your resume and paste a
          job description to generate
          an ATS compatibility report.
        </p>
      </div>
    )}

    <div ref={resultRef}>
      <ATSResult
        result={analysisResult}
      />
    </div>
    <Footer />
  </div>

</div>


);
}

export default App;




// import { useState } from "react";
// import Header from "./components/Header";
// import ResumeUpload from "./components/ResumeUpload";
// import JobDescription from "./components/JobDescription";

// function App() {
//   const [jobDescription, setJobDescription] = useState("");
//   const [resumeText, setResumeText] = useState("");
//   return (
//     <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      
//       <Header />
//       <ResumeUpload setResumeText={setResumeText} />
//       <JobDescription
//           jobDescription={jobDescription}
//           setJobDescription={setJobDescription}
//       />
//     </div>
//   );
// }

// export default App;