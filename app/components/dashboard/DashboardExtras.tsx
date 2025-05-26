"use client";

import {
  BarChart2,
  Target,
  BookOpen,
  Puzzle,
  ClipboardList,
} from "lucide-react";

type Goal = {
  id: number;
  title: string;
  progress: number; // 0-100 %
};

type Topic = {
  id: number;
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced";
};

type Note = {
  id: number;
  title: string;
  snippet: string;
};

type PuzzleInfo = {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  hint: string;
};

type Props = {
  goals: Goal[];
  progressPercent: number;
  topics: Topic[];
  notes: Note[];
  dailyPuzzle: PuzzleInfo;
};

export function DashboardExtras({
  goals,
  progressPercent,
  topics,
  notes,
  dailyPuzzle,
}: Props) {
  return (
    <section className="mt-10 space-y-8 font-chakra text-white max-w-lg mx-auto">
      <div className="space-y-8">
        {/* Your Goals */}
        <div className="p-4 rounded-xl border border-[#00f2ff] bg-[#0a0a0a] shadow-[0_0_20px_#00f2ff44]">
          <h3 className="text-lg font-bold text-[#00f2ff] flex items-center gap-2 mb-3">
            <Target className="w-5 h-5" />
            Your Goals
          </h3>
          <ul className="space-y-3 text-sm">
            {goals.map(({ id, title, progress }) => (
              <li key={id}>
                <div className="flex justify-between font-semibold">
                  {title}
                </div>
                <div className="w-full bg-[#222] rounded-full h-3 mt-1">
                  <div
                    className="bg-gradient-to-r from-[#00f2ff] to-[#ff00ff] h-3 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 px-3 py-1 bg-[#00f2ff] text-black font-semibold rounded hover:bg-[#00dbe6] transition">
            Manage Goals →
          </button>
        </div>

        {/* Progress Snapshot */}
        <div className="p-4 rounded-xl border border-[#ff00ff] bg-[#0a0a0a] shadow-[0_0_20px_#ff00ff44]">
          <h3 className="text-lg font-bold text-[#ff00ff] flex items-center gap-2 mb-3">
            <BarChart2 className="w-5 h-5" />
            Progress Snapshot
          </h3>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-24 h-24">
              {/* Circular progress background */}
              <svg className="w-24 h-24" viewBox="0 0 36 36">
                <path
                  className="text-gray-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#00f2ff]"
                  strokeWidth="3"
                  stroke="currentColor"
                  strokeDasharray={`${progressPercent}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[#00f2ff] font-bold text-xl">
                {progressPercent}%
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center max-w-xs">
              Current overall progress — keep going to unlock new achievements
              and levels!
            </p>
            <button className="mt-4 px-3 py-1 bg-[#ff00ff] text-black font-semibold rounded hover:bg-[#e600e6] transition">
              Full Progress →
            </button>
          </div>
        </div>

        {/* Topic Proficiency */}
        <div className="p-4 rounded-xl border border-[#00f2ff] bg-[#0a0a0a] shadow-[0_0_20px_#00f2ff44]">
          <h3 className="text-lg font-bold text-[#00f2ff] flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5" />
            Topic Proficiency
          </h3>
          <div className="flex flex-wrap gap-3">
            {topics.map(({ id, name, proficiency }) => {
              let color = "bg-gray-700";
              if (proficiency === "Beginner") color = "bg-yellow-500";
              else if (proficiency === "Intermediate") color = "bg-cyan-500";
              else if (proficiency === "Advanced") color = "bg-purple-600";

              return (
                <span
                  key={id}
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${color} cursor-default`}
                  title={`Proficiency: ${proficiency}`}
                >
                  {name}
                </span>
              );
            })}
          </div>
          <button className="mt-4 px-3 py-1 bg-[#00f2ff] text-black font-semibold rounded hover:bg-[#00dbe6] transition">
            See All Topics →
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Daily Puzzle Preview */}
        <div className="p-4 rounded-xl border border-[#ff00ff] bg-[#0a0a0a] shadow-[0_0_20px_#ff00ff44]">
          <h3 className="text-lg font-bold text-[#ff00ff] flex items-center gap-2 mb-3">
            <Puzzle className="w-5 h-5" />
            Daily Puzzle
          </h3>
          <h4 className="text-white font-semibold mb-1">{dailyPuzzle.title}</h4>
          <p className="text-xs text-gray-400 mb-2">
            Difficulty: {dailyPuzzle.difficulty}
          </p>
          <p className="text-sm italic text-[#ccc] mb-3">{dailyPuzzle.hint}</p>
          <button className="w-full px-3 py-1 bg-[#ff00ff] text-black font-semibold rounded hover:bg-[#e600e6] transition">
            Play Now
          </button>
        </div>

        {/* Saved Notes & Bookmarks */}
        <div className="p-4 rounded-xl border border-[#00f2ff] bg-[#0a0a0a] shadow-[0_0_20px_#00f2ff44] max-h-[220px] overflow-y-auto">
          <h3 className="text-lg font-bold text-[#00f2ff] flex items-center gap-2 mb-3">
            <ClipboardList className="w-5 h-5" />
            Saved Notes
          </h3>
          {notes.length > 0 ? (
            <ul className="text-sm space-y-2 max-h-32 overflow-y-auto">
              {notes.map(({ id, title, snippet }) => (
                <li key={id} className="border-b border-gray-700 pb-1">
                  <p className="font-semibold text-white truncate">{title}</p>
                  <p className="text-gray-400 italic truncate">{snippet}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic text-sm">No saved notes yet.</p>
          )}
          <button className="mt-3 px-3 py-1 bg-[#00f2ff] text-black font-semibold rounded hover:bg-[#00dbe6] transition">
            View All Notes →
          </button>
        </div>
      </div>
    </section>
  );
}
