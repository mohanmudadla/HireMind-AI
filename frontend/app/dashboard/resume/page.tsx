"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function ResumePage() {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  return (
    <div className="text-white">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold mb-3">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-400 text-lg">
          Upload your resume and get instant ATS analysis.
        </p>
      </div>

      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-3xl p-16
          flex flex-col items-center justify-center
          cursor-pointer transition
          ${
            isDragActive
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-white/10 bg-white/5"
          }
        `}
      >

        <input {...getInputProps()} />

        <UploadCloud
          size={70}
          className="text-cyan-400 mb-6"
        />

        <h2 className="text-2xl font-semibold mb-3">
          Drag & Drop Resume
        </h2>

        <p className="text-gray-400 mb-6">
          Upload PDF resume for AI analysis
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
          Select Resume
        </button>
      </div>

      {/* Analysis Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">

        {/* ATS Score */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="text-green-400" />

            <h3 className="text-xl font-semibold">
              ATS Score
            </h3>
          </div>

          <p className="text-5xl font-bold">
            92%
          </p>

          <p className="text-gray-400 mt-3">
            Excellent resume optimization.
          </p>
        </div>

        {/* Keywords */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-cyan-400" />

            <h3 className="text-xl font-semibold">
              Keywords
            </h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>✔ React.js</li>
            <li>✔ Machine Learning</li>
            <li>✔ Python</li>
            <li>✔ Data Structures</li>
          </ul>
        </div>

        {/* Suggestions */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <UploadCloud className="text-pink-400" />

            <h3 className="text-xl font-semibold">
              Suggestions
            </h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>• Add measurable achievements</li>
            <li>• Improve project descriptions</li>
            <li>• Include leadership experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}