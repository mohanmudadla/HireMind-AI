"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, FileText, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent_40%)]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">
          HireMind AI
        </h1>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-24">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
            <BrainCircuit size={16} />
            AI-Powered Placement Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
            Crack Your Dream Job With{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              HireMind AI
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            AI Resume Analysis, Mock Interviews, Coding Practice,
            and Personalized Placement Preparation — all in one platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition flex items-center gap-2">
              Start Free
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/5 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <FileText className="text-cyan-400 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              AI Resume Analyzer
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Upload your resume and receive ATS scores, skill gap analysis,
              keyword suggestions, and recruiter-level improvements.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <BrainCircuit className="text-blue-400 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              AI Mock Interviews
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Practice HR and technical interviews with intelligent AI
              follow-up questioning and personalized feedback.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <Code2 className="text-purple-400 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              Coding Preparation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Solve coding problems, get AI-generated hints,
              complexity analysis, and performance tracking.
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}