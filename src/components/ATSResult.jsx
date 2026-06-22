import { CircularProgressbar } from "react-circular-progressbar";
import { generatePDF } from "../utils/generatePDF";

function ATSResult({ result }) {
  if (!result) return null;

  const getStrength = (score) => {
    if (score >= 90) {
      return {
        label: "Excellent Match",
        color: "text-green-400",
      };
    }

    if (score >= 75) {
      return {
        label: "Strong Match",
        color: "text-cyan-400",
      };
    }

    if (score >= 60) {
      return {
        label: "Moderate Match",
        color: "text-yellow-400",
      };
    }

    return {
      label: "Needs Improvement",
      color: "text-red-400",
    };
  };

  const strength = getStrength(result.score);

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-slate-900 rounded-2xl p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        ATS Analysis Report
      </h2>

      <div className="text-center mb-6">
        <button
          onClick={() => generatePDF(result)}
          className="
        bg-green-500
        hover:bg-green-400
        text-slate-950
        font-semibold
        px-5
        py-2
        rounded-xl
        transition
      "
        >
          Download ATS Report
        </button>
      </div>

      <div className="w-40 h-40 mx-auto">
        <CircularProgressbar value={result.score} text={`${result.score}%`} />
      </div>

      <div className="mt-4 text-center">
        <p className={`text-xl font-semibold ${strength.color}`}>
          {strength.label}
        </p>
      </div>

      <div
        className="
      mt-8
      grid
      grid-cols-1
      sm:grid-cols-3
      gap-4
    "
      >
        <div className="bg-slate-800 p-4 rounded-xl text-center">
          <p className="text-slate-400 text-sm">Skill Match</p>

          <p className="text-2xl font-bold text-cyan-400">
            {result.skillScore}%
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          <p className="text-slate-400 text-sm">Resume Structure</p>

          <p className="text-2xl font-bold text-green-400">
            {result.sectionScore}%
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl text-center">
          <p className="text-slate-400 text-sm">Keyword Relevance</p>

          <p className="text-2xl font-bold text-yellow-400">
            {result.keywordScore}%
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-800 rounded-xl p-5">
        <h3 className="text-cyan-400 font-semibold text-lg">
          ATS Scoring Formula
        </h3>

        <div className="mt-3 text-slate-300 space-y-2">
          <p>Skills Match → 60%</p>

          <p>Resume Structure → 20%</p>

          <p>Keyword Relevance → 20%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div>
          <div className="mb-3">
            <h3 className="font-semibold text-green-400 text-xl">
              Matched Skills
            </h3>

            <p className="text-slate-400 text-sm">
              {result.matchedSkills.length} /{" "}
              {result.matchedSkills.length + result.missingSkills.length} Skills
              Found
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {result.matchedSkills.map((item) => (
              <span
                key={item}
                className="
              px-3
              py-1
              rounded-full
              bg-green-500/20
              text-green-400
              text-sm
            "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-red-400 text-xl mb-3">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">

            {result.missingSkills.length > 0 ? (

              result.missingSkills.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-red-500/20
                    text-red-400
                    text-sm
                  "
                >
                  {item}
                </span>
              ))

            ) : (

              <p className="text-green-400">
                ✓ No missing skills found.
              </p>

            )}

          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-orange-400 text-xl">
          Missing Sections
        </h3>

        {result.missingSections.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {result.missingSections.map((section) => (
              <li key={section}>✗ {section}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-green-400">
            ✓ All required sections are present.
          </p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-purple-400 text-xl">Suggestions</h3>

        {result.suggestions.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {result.suggestions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        ) : (
          <div className="mt-3 text-green-400">
            🎉 Excellent Match! Your resume aligns well with this job
            description.
            <p className="mt-2 text-slate-300">
              Keep tailoring your resume for each application to maximize ATS
              performance.
            </p>
            <p className="mt-2 text-slate-300">
              Best of luck with your application!
            </p>
          </div>
        )}
      </div>
      {/* Resume Improvement Checklist */}

      <div className="mt-8">

        <h3 className="font-semibold text-cyan-400 text-xl">
          Resume Improvement Checklist
        </h3>

        <div className="grid md:grid-cols-2 gap-3 mt-4">

          {result.checklist?.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-lg p-3"
            >

              {item.completed ? (
                <span className="text-green-400">
                  ✓ {item.text}
                </span>
              ) : (
                <span className="text-red-400">
                  □ {item.text}
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ATSResult;
