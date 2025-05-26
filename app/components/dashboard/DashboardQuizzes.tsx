"use client";

import { useState } from "react";
import { CheckCircle, PlayCircle } from "lucide-react";

type Quiz = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  score?: number;
  completedAt?: string;
};

type Props = {
  completed: Quiz[];
  available: Quiz[];
};

const difficultyColors: Record<string, string> = {
  Easy: "text-green-400 border-green-400",
  Medium: "text-yellow-400 border-yellow-400",
  Hard: "text-red-400 border-red-400",
};

export const DashboardQuizzes: React.FC<Props> = ({ completed, available }) => {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<
    "All" | "Easy" | "Medium" | "Hard"
  >("All");

  const filteredAvailable = available.filter((quiz) => {
    const matchesTitle = quiz.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDifficulty =
      difficulty === "All" || quiz.difficulty === difficulty;
    return matchesTitle && matchesDifficulty;
  });

  return (
    <section className="mt-6 max-w-6xl mx-auto font-chakra text-white space-y-12 mb-6 px-4">
      {/* Completed Quizzes */}
      <div className="bg-[#0a0a0a] border border-[#00f2ff] rounded-xl shadow-[0_0_20px_#00f2ff66] p-6">
        <h3 className="text-2xl font-bold text-[#00f2ff] mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6" /> Completed Quizzes
        </h3>
        {completed.length === 0 ? (
          <p className="text-gray-400">
            You haven{`'`}t completed any quizzes yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {completed.map((quiz) => (
              <li
                key={quiz.id}
                className="border border-[#00f2ff33] p-4 rounded-lg bg-[#111] hover:bg-[#1a1a1a] transition"
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <span className="text-lg font-semibold">{quiz.title}</span>
                  <span className="text-sm text-[#999]">
                    {quiz.completedAt}
                  </span>
                </div>
                <div className="text-sm text-[#00f2ff] mt-1">
                  Score: {quiz.score}% • Difficulty:{" "}
                  <span
                    className={`border px-2 py-0.5 rounded-full text-xs ml-1 ${
                      difficultyColors[quiz.difficulty]
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Available Quizzes */}
      <div className="bg-[#0a0a0a] border border-[#ff00ff] rounded-xl shadow-[0_0_20px_#ff00ff66] p-6">
        <h3 className="text-2xl font-bold text-[#ff00ff] mb-4 flex items-center gap-2">
          <PlayCircle className="w-6 h-6" /> Available Quizzes
        </h3>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-white w-full sm:w-auto"
          />
          <div className="flex flex-wrap gap-2">
            {["All", "Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level as typeof difficulty)}
                className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                  level === difficulty
                    ? "bg-[#ff00ff] text-black border-[#ff00ff]"
                    : "text-white border-gray-600 hover:border-[#ff00ff]"
                } transition`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz List */}
        {filteredAvailable.length === 0 ? (
          <p className="text-gray-400">No quizzes found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredAvailable.map((quiz) => (
              <li
                key={quiz.id}
                className="border border-[#ff00ff33] p-4 rounded-lg bg-[#111] hover:bg-[#1a1a1a] transition"
              >
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <span className="text-lg font-semibold">{quiz.title}</span>
                    <div className="text-sm mt-1">
                      <span
                        className={`border px-2 py-0.5 rounded-full text-xs ${
                          difficultyColors[quiz.difficulty]
                        }`}
                      >
                        {quiz.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-1 bg-[#ff00ff] text-black font-semibold rounded hover:bg-[#e600e6] transition">
                    Start
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="text-center mt-8">
          <a
            href="/quizzes"
            className="inline-block px-5 py-2 bg-transparent border border-[#ff00ff] text-[#ff00ff] rounded-full font-semibold hover:bg-[#ff00ff] hover:text-black transition"
          >
            View All Quizzes →
          </a>
        </div>
      </div>
    </section>
  );
};
