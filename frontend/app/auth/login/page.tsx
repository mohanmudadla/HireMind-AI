"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,transparent_40%)]" />

      <div className="relative z-10 grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden max-w-6xl w-full backdrop-blur-xl">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center p-14 border-r border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit size={34} className="text-cyan-400" />

            <h1 className="text-3xl font-bold">
              HireMind AI
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Prepare Smarter.
            <br />
            Get Hired Faster.
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            AI-powered interviews, ATS resume analysis,
            coding preparation, and personalized career guidance.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10 lg:p-14">

          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold mb-2">
              Welcome Back
            </h2>

            <p className="text-gray-400 mb-10">
              Login to continue your placement preparation journey.
            </p>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Login Button */}
            <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Login
            </button>

            {/* Footer */}
            <p className="text-gray-400 text-sm mt-8 text-center">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-cyan-400 hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}