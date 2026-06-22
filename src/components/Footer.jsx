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

  <p className="text-slate-500 text-sm mt-2">
    All processing happens locally in your browser.
    No resume data is stored.
  </p>

  <p className="text-slate-600 text-sm mt-4">
    © 2026 Prashant Kumar Baranwal
  </p>
</footer>


);
}

export default Footer;
