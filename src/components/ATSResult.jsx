import { CircularProgressbar } from "react-circular-progressbar";

function ATSResult({ result }) {
if (!result) return null;

return ( <div className="max-w-5xl mx-auto mt-8 bg-slate-900 rounded-2xl p-6">


  <h2 className="text-3xl font-bold mb-6">
    ATS Analysis Report
  </h2>

  <div className="w-40 h-40 mx-auto">
    <CircularProgressbar
      value={result.score}
      text={`${result.score}%`}
    />
  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div>
      <h3 className="font-semibold text-green-400">
        Matched Skills
      </h3>

      <ul className="mt-3">
        {result.matchedSkills.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-red-400">
        Missing Skills
      </h3>

      <ul className="mt-3">
        {result.missingSkills.map((item) => (
          <li key={item}>✗ {item}</li>
        ))}
      </ul>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div>
      <h3 className="font-semibold text-cyan-400">
        Resume Keywords
      </h3>

      <ul className="mt-3">
        {result.resumeKeywords.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-yellow-400">
        JD Keywords
      </h3>

      <ul className="mt-3">
        {result.jdKeywords.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

  </div>

  <div className="mt-8">

    <h3 className="font-semibold text-orange-400">
      Missing Sections
    </h3>

    {
      result.missingSections.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {result.missingSections.map((section) => (
            <li key={section}>
              ✗ {section}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-green-400">
          ✓ All required sections are present.
        </p>
      )
    }

  </div>

  <div className="mt-8">

    <h3 className="font-semibold text-purple-400">
      Suggestions
    </h3>

    {
      result.suggestions.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {result.suggestions.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 text-green-400">
          🎉 Excellent Match! Your resume aligns well with this job description.

          <p className="mt-2 text-slate-300">
            Best of luck with your application!
          </p>
        </div>
      )
    }

  </div>

</div>


);
}

export default ATSResult;
