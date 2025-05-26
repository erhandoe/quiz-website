"use client";

import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { DashboardWelcome } from "./DashboardWelcome";
import { DashboardQuizzes } from "./DashboardQuizzes";
import { Menu } from "lucide-react";
import { DashboardExtras } from "./DashboardExtras";

type Quiz = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  score?: number;
  completedAt?: string;
};

type Topic = {
  id: number;
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced";
};

type PuzzleInfo = {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  hint: string;
};

type Props = {
  user: { name: string; image: string };
  completed: Quiz[];
  available: Quiz[];
};

export default function DashboardLayoutWrapper({
  user,
  completed,
  available,
}: Props) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const goals = [
    { id: 1, title: "Reach Level 4", progress: 60 },
    { id: 2, title: "Complete 3 Hard quizzes", progress: 30 },
  ];
  const progressPercent = 65;

  const topics: Topic[] = [
    { id: 1, name: "Crypto", proficiency: "Intermediate" },
    { id: 2, name: "Web", proficiency: "Beginner" },
    { id: 3, name: "Forensics", proficiency: "Advanced" },
  ];

  const notes = [
    {
      id: 1,
      title: "Crypto Tricks",
      snippet: "Remember to check padding oracle...",
    },
    { id: 2, title: "Web Bug", snippet: "XSS on user input field..." },
  ];
  const dailyPuzzle: PuzzleInfo = {
    title: "Cipher Maze",
    difficulty: "Medium",
    hint: "Look for repeating patterns",
  };

  return (
    <div className="relative">
      {/* Mobile toggles */}
      <div className="flex justify-between items-center mb-4 lg:hidden px-4">
        <button
          onClick={() => setShowLeft(!showLeft)}
          className="text-[#00f2ff] font-bold"
        >
          <Menu className="inline mr-1 w-5 h-5" />
          Menu
        </button>
        <button
          onClick={() => setShowRight(!showRight)}
          className="text-[#ff00ff] font-bold"
        >
          Activity
        </button>
      </div>

      {/* Slide-in mobile sidebars */}
      {showLeft && (
        <div className="fixed inset-0 bg-black/70 z-40 lg:hidden">
          <div className="w-80 bg-[#0a0a0a] h-full p-4 overflow-y-auto">
            <button
              onClick={() => setShowLeft(false)}
              className="text-right text-[#00f2ff] w-full mb-4"
            >
              Close
            </button>
            <LeftSidebar />
          </div>
        </div>
      )}
      {showRight && (
        <div className="fixed inset-0 bg-black/70 z-40 lg:hidden">
          <div className="w-80 bg-[#0a0a0a] h-full p-4 overflow-y-auto ml-auto">
            <button
              onClick={() => setShowRight(false)}
              className="text-right text-[#ff00ff] w-full mb-4"
            >
              Close
            </button>
            <RightSidebar />
          </div>
        </div>
      )}

      {/* Desktop layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[25rem_1fr_25rem]">
        <aside className="hidden lg:block sticky top-6 self-start w-[25rem]">
          <LeftSidebar />
        </aside>

        <main className="lg:col-span-1 px-4">
          <DashboardWelcome
            name={user.name}
            points={980}
            avatarUrl={user.image}
          />
          <DashboardQuizzes completed={completed} available={available} />
          <DashboardExtras
            goals={goals}
            progressPercent={progressPercent}
            topics={topics}
            notes={notes}
            dailyPuzzle={dailyPuzzle}
          />
        </main>

        <aside className="hidden lg:block sticky top-6 self-start w-[25rem]">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
