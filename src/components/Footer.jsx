function Footer() {
return ( <footer
   className="
     mt-16
     border-t
     border-slate-800
     py-8
     text-center
   "
 > <h3 className="text-xl font-bold">
ATS Resume Checker Pro </h3>


  <p className="text-slate-400 mt-2">
    Built with React.js • Tailwind CSS • PDF.js
  </p>

  <p className="text-green-400 mt-3">
    🔒 Privacy First
  </p>
  <a
  href="https://digitalheroesco.com"
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    mt-4
    bg-cyan-500
    text-slate-950
    px-4
    py-2
    rounded-lg
    font-semibold
  "
>
  Built for Digital Heroes
</a>
  <p className="text-slate-500 text-sm mt-2">
    All processing happens locally in your browser.
    No resume data is stored.
  </p>

  <p className="text-slate-600 text-sm mt-4">
    Built by Prashant Kumar Baranwal
    baranwalprashant2@gmail.com
  </p>
</footer>


);
}

export default Footer;
