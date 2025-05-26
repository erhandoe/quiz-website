"use client";

import {
  Trophy,
  Megaphone,
  CalendarDays,
  Lightbulb,
  Users,
} from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="mt-6 m-8 space-y-6 p-4 rounded-xl border border-[#ff00ff] bg-[#0a0a0a] shadow-[0_0_20px_#ff00ff44] font-chakra text-white max-w-xs">
      {/* Leaderboard Preview */}
      <section>
        <h3 className="text-lg font-bold text-[#ff00ff] mb-2 flex items-center gap-1">
          <Trophy className="w-5 h-5" />
          Leaderboard
        </h3>
        <ul className="text-sm space-y-1">
          <li>
            🥇 Alice —{" "}
            <span className="text-[#00f2ff] font-semibold">920 pts</span>
          </li>
          <li>
            🥈 Bob —{" "}
            <span className="text-[#00f2ff] font-semibold">870 pts</span>
          </li>
          <li>
            🥉 You —{" "}
            <span className="text-[#00f2ff] font-semibold">845 pts</span>
          </li>
        </ul>
      </section>

      {/* Announcements */}
      <section className="bg-[#111] p-3 rounded-lg border border-[#ff00ff] shadow-inner">
        <h4 className="text-[#ff00ff] font-semibold mb-1 flex items-center gap-1">
          <Megaphone className="w-4 h-4" />
          Announcements
        </h4>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>“Stealth Protocol” challenge added</li>
          <li>Dark mode UI enhancements</li>
          <li>Rankings update now live</li>
        </ul>
      </section>

      {/* Upcoming Challenges */}
      <section>
        <h4 className="text-[#ff00ff] font-semibold mb-1 flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          Upcoming Challenges
        </h4>
        <ul className="text-sm space-y-1">
          <li>Tue: Encrypted Echoes</li>
          <li>Thu: Payload Prism</li>
          <li>Sat: Cascade Core</li>
        </ul>
      </section>

      {/* Tip of the Day */}
      <section>
        <h4 className="text-[#ff00ff] font-semibold mb-1 flex items-center gap-1">
          <Lightbulb className="w-4 h-4" />
          Tip of the Day
        </h4>
        <p className="text-sm italic text-[#ccc]">
          “Always read between the lines — especially the HTTP headers.”
        </p>
      </section>

      {/* Friends Activity */}
      <section className="bg-[#111] p-3 rounded-lg border border-[#00f2ff] shadow-inner">
        <h4 className="text-[#00f2ff] font-semibold mb-2 flex items-center gap-1">
          <Users className="w-4 h-4" />
          Friends Activity
        </h4>
        <ul className="text-sm space-y-1">
          <li>
            <span className="text-[#ff00ff] font-semibold">Eli</span> solved{" "}
            <span className="text-[#00f2ff]">“Ghost Binary”</span>
          </li>
          <li>
            <span className="text-[#ff00ff] font-semibold">Noah</span> reached{" "}
            <span className="text-yellow-400">Level 5</span>
          </li>
          <li>
            <span className="text-[#ff00ff] font-semibold">Maya</span> beat{" "}
            <span className="text-[#00f2ff]">“Keyline Crack”</span> in 2m 30s
          </li>
        </ul>
      </section>
    </aside>
  );
}
