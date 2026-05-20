"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  BrainCircuit,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Resume Analyzer",
    icon: FileText,
    href: "/dashboard/resume",
  },
  {
    title: "AI Interview",
    icon: BrainCircuit,
    href: "/dashboard/interview",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-black border-r border-white/10 p-6 hidden md:block">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          HireMind AI
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          AI Placement Platform
        </p>
      </div>

      <nav className="space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-300 hover:bg-white/5 hover:text-white transition"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}