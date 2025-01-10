import { useState } from "react";

const FileUpload = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div className="mt-10 text-center">
      {/* Upload Container */}
      <div
        className="border-2 border-dashed border-gray-500 rounded-lg w-80 mx-auto p-6 cursor-pointer hover:bg-gray-800"
        onClick={handleClick}
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

      {/* Hidden File Input */}
      <input
        id="file-input"
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Paste Text Button */}
      <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
        Paste text
      </button>
    </div>
  );
};

export default FileUpload;
