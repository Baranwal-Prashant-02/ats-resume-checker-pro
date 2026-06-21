import { useState } from "react";
import { Upload, FileText, LoaderCircle } from "lucide-react";
import { extractTextFromPDF } from "../utils/pdfParser";

function ResumeUpload({
  resumeText,
  setResumeText
}) 
{
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
//   const [resumeText, setResumeText] = useState("");
  const [pageCount, setPageCount] = useState(0);

  const handleFileChange = async (e) => {
  const selectedFile = e.target.files[0];

  if (!selectedFile) return;

  if (selectedFile.type !== "application/pdf") {
    setError("Only PDF files are allowed.");
    setFile(null);
    return;
  }

  if (selectedFile.size > 5 * 1024 * 1024) {
    setError("File size must be less than 5 MB.");
    setFile(null);
    return;
  }

  try {
    setLoading(true);
    setError("");

    const result =
      await extractTextFromPDF(selectedFile);

    setResumeText(result.text);
    setPageCount(result.pages);

    setFile(selectedFile);
  } catch (err) {
    console.error(err);

    setError(
      "Failed to read PDF. Please try another file."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        mt-10
        border-2
        border-dashed
        border-slate-700
        rounded-2xl
        p-6
        md:p-10
        text-center
        bg-slate-900
      "
    >
      <Upload
        size={40}
        className="mx-auto text-cyan-400"
      />

      <h2 className="text-xl md:text-3xl font-semibold mt-4">
        Upload Resume PDF
      </h2>

      <p className="text-slate-400 mt-3">
        Upload a PDF resume (max 5 MB).
        Your file is processed locally and never stored.
      </p>

      <p className="mt-2 text-sm text-green-400">
        ✓ Processed locally • ✓ No data stored
      </p>

      <input
        type="file"
        accept=".pdf"
        id="resumeUpload"
        className="hidden"
        onChange={handleFileChange}
      />

      <label
        htmlFor="resumeUpload"
        className="
          inline-block
          mt-6
          bg-cyan-500
          hover:bg-cyan-400
          text-slate-950
          px-6
          py-3
          rounded-xl
          font-semibold
          cursor-pointer
          transition
        "
      >
        Choose PDF
      </label>

      {loading && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <LoaderCircle
            size={32}
            className="animate-spin text-cyan-400"
          />

          <p className="text-slate-400">
            Processing Resume...
          </p>
        </div>
      )}

      {file && !loading && (
       <> 
        <div
          className="
            mt-6
            bg-slate-800
            rounded-xl
            p-4
            flex
            items-center
            justify-center
            gap-2
          "
        > <FileText size={20} />


         <span className="break-all">
           {file.name}
         </span>
       </div>

       <p className="mt-3 text-green-400">
         ✓ Resume uploaded successfully
       </p>

       <div className="mt-4 text-sm text-slate-300">
         <p>
           Pages: {pageCount}
         </p>

         <p>
           Words: {
             resumeText
               .split(/\s+/)
               .filter(Boolean)
               .length
           }
         </p>
        </div>


       </>
       )}


      {error && (
        <p className="mt-4 text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default ResumeUpload;