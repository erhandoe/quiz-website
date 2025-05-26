"use client";

import { BarChart, Flame, Star, Trophy, ShieldCheck } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="mt-6 m-8 space-y-6 p-5 rounded-xl border border-[#00f2ff] bg-[#0a0a0a] shadow-[0_0_20px_#00f2ff44] font-chakra text-white max-w-xs">
      {/* User Stats */}
      <section>
        <h3 className="text-lg font-bold text-[#00f2ff] mb-3 flex items-center gap-2">
          <BarChart className="w-5 h-5" />
          Your Stats
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            Total Quizzes:{" "}
            <span className="text-[#ff00ff] font-semibold">24</span>
          </li>
          <li>
            Accuracy: <span className="text-[#ff00ff] font-semibold">87%</span>
          </li>
          <li>
            Longest Streak:{" "}
            <span className="text-[#ff00ff] font-semibold">5</span>
          </li>
          <li>
            Rank: <span className="text-[#00f2ff] font-semibold">Silver</span>
          </li>
        </ul>
      </section>

      {/* Daily Challenge */}
      <section className="bg-[#111] p-4 rounded-lg border border-[#ff00ff] shadow-inner">
        <h4 className="text-[#ff00ff] font-semibold mb-2 flex items-center gap-2">
          <Flame className="w-4 h-4" />
          Daily Challenge
        </h4>
        <p className="text-sm font-semibold text-white mb-1">
          “Decode the Vault”
        </p>
        <p className="text-xs text-gray-400 mb-3">Difficulty: Hard · ~7 min</p>
        <button className="w-full px-3 py-1 text-sm rounded bg-[#00f2ff] text-black font-semibold hover:bg-[#00dbe6] transition">
          Try Now
        </button>
      </section>

      {/* Level Progress */}
      <section>
        <h4 className="text-[#00f2ff] font-semibold mb-2 flex items-center gap-2">
          <Star className="w-4 h-4" />
          Level Progress
        </h4>
        <div className="w-full bg-[#222] rounded-full h-3">
          <div
            className="bg-gradient-to-r from-[#00f2ff] to-[#ff00ff] h-3 rounded-full transition-all"
            style={{ width: "60%" }}
          ></div>
        </div>
        <p className="text-xs text-right mt-1 text-[#999]">
          Level 3 · 180/300 XP
        </p>
      </section>

      {/* Achievements Preview */}
      <section>
        <h4 className="text-[#00f2ff] font-semibold mb-2 flex items-center gap-2">
          <Trophy className="w-4 h-4" />
          Achievements
        </h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            <ShieldCheck className="inline w-4 h-4 text-[#00f2ff] mr-1" />
            Completed 10 quizzes
          </li>
          <li>
            <ShieldCheck className="inline w-4 h-4 text-[#00f2ff] mr-1" />
            5-day streak
          </li>
        </ul>
      </section>
    </aside>
  );
}
