"use server";

import { Medal, UserCircle, Bolt } from "lucide-react";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "NeoGhost",
    points: 980,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=NeoGhost",
  },
  {
    id: 2,
    name: "CircuitHunter",
    points: 910,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=CircuitHunter",
  },
  {
    id: 3,
    name: "ByteWitch",
    points: 870,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=ByteWitch",
  },
  {
    id: 4,
    name: "ZeroNova",
    points: 850,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=ZeroNova",
  },
  {
    id: 5,
    name: "GlitchLord",
    points: 820,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=GlitchLord",
  },
  {
    id: 6,
    name: "SynthReaper",
    points: 790,
    avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=SynthReaper",
  },
];

function getTier(points: number) {
  if (points >= 950) return { label: "Platinum", color: "platinum" };
  if (points >= 900) return { label: "Gold", color: "gold" };
  if (points >= 800) return { label: "Silver", color: "silver" };
  return { label: "Bronze", color: "bronze" };
}

export default async function Leaderboard() {
  const colorMap = {
    platinum: "#e5e4e2",
    gold: "#ffd700",
    silver: "#c0c0c0",
    bronze: "#cd7f32",
  };
  return (
    <main className="text-white px-4 sm:px-8 py-12 font-chakra">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#ff00ff] mb-6 flex items-center gap-2">
          <Medal className="w-6 h-6" />
          Global Leaderboard
        </h1>

        <div className="bg-[#0f0f0f] border border-[#ff00ff] rounded-xl shadow-[0_0_20px_#ff00ff33] overflow-hidden">
          <table className="w-full table-fixed text-left">
            <thead className="bg-[#1a1a1a] text-[#00f2ff] text-sm uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 w-12">#</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3 w-32 text-center">Tier</th>
                <th className="px-4 py-3 w-24 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const tier = getTier(user.points);
                const tierColor = colorMap[tier.color as keyof typeof colorMap];
                return (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? "bg-[#111]" : "bg-[#1a1a1a]"
                    } hover:bg-[#222] transition-colors duration-300 hover:shadow-[0_0_20px_var(--tw-shadow-color)]`}
                    style={
                      {
                        "--tw-shadow-color": tierColor,
                      } as React.CSSProperties
                    }
                  >
                    <td className="px-4 py-3 text-[#ff00ff] font-bold">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-3 text-white">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00f2ff] shadow-[0_0_8px_#00f2ff66]">
                        <Image
                          src={user.avatarUrl}
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="flex items-center gap-1 text-[#00f2ff] font-medium">
                        <UserCircle className="w-4 h-4" /> {user.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full font-semibold text-sm animate-neonPulse`}
                        style={{
                          background: "rgba(255 255 255 / 0.1)",
                          color: tierColor,
                          boxShadow: `0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)`,
                          textShadow: `0 0 5px var(--tw-shadow-color)`,
                        }}
                      >
                        {tier.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-[#ff00ff] font-semibold">
                      <span className="flex justify-end items-center gap-1">
                        <Bolt className="w-4 h-4" /> {user.points}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
