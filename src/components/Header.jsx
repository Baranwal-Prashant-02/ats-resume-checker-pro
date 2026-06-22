function Header() {
  return (
    <section className="text-center pt-16 pb-10 px-6">

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-500/30
          bg-slate-800
          px-2
          py-1.5
          text-cyan-400
          text-sm
        "
      >
        🔒 Privacy First
      </div>

      <h1
        className="
          mt-6
          text-4xl
          md:text-6xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-purple-500
          bg-clip-text
          text-transparent
        "
      >
        ATS Resume Checker Pro
      </h1>

      <p
        className="
          max-w-3xl
          mx-auto
          mt-6
          text-slate-300
          text-lg
        "
      >
        Analyze resumes against job descriptions, identify skill gaps, 
        calculate ATS compatibility scores, and generate downloadable ATS reports..
      </p>

      {/* <div className="mt-8">
        <button
          className="
            bg-cyan-500
            hover:bg-cyan-400
            text-slate-950
            font-semibold
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Upload Resume
        </button>
      </div> */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-3
        "
      >
        <span className="rounded-full bg-slate-800 px-4 py-2">
          PDF Upload
        </span>

        <span className="rounded-full bg-slate-800 px-4 py-2">
          ATS Score
        </span>

        <span className="rounded-full bg-slate-800 px-4 py-2">
          Skill Gap Analysis
        </span>

        <span className="rounded-full bg-slate-800 px-4 py-2">
          Instant Suggestions
        </span>
      </div>

    </section>
  );
}

export default Header;