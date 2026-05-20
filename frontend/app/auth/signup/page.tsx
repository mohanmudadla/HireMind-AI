"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

        <h1 className="text-4xl font-bold mb-3">
          Create Account
        </h1>

        <p className="text-gray-400 mb-8">
          Join HireMind AI and accelerate your placement preparation.
        </p>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition"
          />
        </div>

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
            placeholder="Create password"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition"
          />
        </div>

        <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
          Create Account
        </button>

        <p className="text-gray-400 text-sm mt-8 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}