import { useState } from "react";

function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        mt-8
        bg-slate-900
        rounded-2xl
        p-6
      "
    >
      <h2 className="text-xl md:text-2xl font-semibold">
        Job Description
      </h2>

      <p className="text-slate-400 mt-2">
        Paste the job description you want to compare against.
      </p>

      <textarea
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        placeholder="Paste job description here..."
        className="
          w-full
          h-64
          mt-4
          p-4
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          outline-none
          resize-none
        "
      />

      <div className="mt-2 text-sm text-slate-400">
        Characters: {jobDescription.length}
      </div>
    </div>
  );
}

export default JobDescription;