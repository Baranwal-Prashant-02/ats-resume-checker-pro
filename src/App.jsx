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

import { useState } from "react";

import Header from "./components/Header";
import ResumeUpload from "./components/ResumeUpload";
import JobDescription from "./components/JobDescription";
import ATSResult from "./components/ATSResult";

import { analyzeResume } from "./utils/atsEngine";

function App() {
const [resumeText, setResumeText] = useState("");

const [jobDescription, setJobDescription] =
useState("");

const [analysisResult, setAnalysisResult] =
useState(null);

const handleAnalyze = () => {
if (!resumeText) {
alert("Please upload a resume.");
return;
}


if (!jobDescription.trim()) {
  alert("Please paste a job description.");
  return;
}

const result = analyzeResume(
  resumeText,
  jobDescription
);

setAnalysisResult(result);


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
        className="
          bg-cyan-500
          hover:bg-cyan-400
          text-slate-950
          font-semibold
          px-8
          py-3
          rounded-xl
          transition
        "
      >
        Analyze Resume
      </button>

    </div>

    <ATSResult
      result={analysisResult}
    />

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