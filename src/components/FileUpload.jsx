import { useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Set the workerSrc to a CDN-hosted version of the PDF.js worker
GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const FileUpload = () => {
  const [fileName, setFileName] = useState(null);
  const [pdfText, setPdfText] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const pdfData = new Uint8Array(e.target.result);
          const pdf = await getDocument({ data: pdfData }).promise;

          let text = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item) => item.str).join(" ");
          }

          setPdfText(text);
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        console.error("Error extracting PDF text:", error);
        setPdfText("Failed to extract text from the uploaded PDF.");
      }
    }
  };

  return (
    <div className="mt-10 text-center">
      <div
        className="border-2 border-dashed border-gray-500 rounded-lg w-80 mx-auto p-6 cursor-pointer hover:bg-gray-800"
        onClick={() => document.getElementById("file-input").click()}
      >
        {fileName ? (
          <div className="text-gray-400 text-sm font-semibold">
            <div className="text-lg mb-4">Uploaded: {fileName}</div>
          </div>
        ) : (
          <div className="text-gray-400 text-sm font-semibold">
            <div className="text-4xl mb-4">📄</div>
            click here to upload a PDF
          </div>
        )}
      </div>

      <input
        id="file-input"
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="mt-6 text-gray-400 overflow-auto max-h-60">
        <h3 className="text-lg font-semibold">Extracted Text:</h3>
        <p className="text-sm mt-2">{pdfText}</p>
      </div>
    </div>
  );
};

export default FileUpload;
