"use client";

import {
  FileText,
  BrainCircuit,
  Code2,
  BarChart3,
} from "lucide-react";

const cards = [
  {
    title: "Resume Score",
    value: "82%",
    icon: FileText,
  },
  {
    title: "Interview Readiness",
    value: "76%",
    icon: BrainCircuit,
  },
  {
    title: "Coding Strength",
    value: "91%",
    icon: Code2,
  },
  {
    title: "Overall Progress",
    value: "88%",
    icon: BarChart3,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <div className="border-b border-white/10 px-8 py-6">
        <h1 className="text-3xl font-bold">
          HireMind AI Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back. Track your placement preparation progress.
        </p>
      </div>

      {/* Stats Cards */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <Icon className="text-cyan-400" size={32} />

                <span className="text-3xl font-bold">
                  {card.value}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-medium text-gray-300">
                {card.title}
              </h3>
            </div>
          );
        })}
      </section>

      {/* AI Interview Section */}
      <section className="px-8 pb-10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
          
          <h2 className="text-3xl font-bold">
            AI Interview Assistant
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Start practicing HR and technical interviews with
            intelligent AI-generated questions and personalized feedback.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition">
            Start Interview
          </button>
        </div>
      </section>
    </main>
  );
}