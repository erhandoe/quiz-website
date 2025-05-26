"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Crown, Bolt, UserCircle } from "lucide-react";

type User = {
  id: number;
  name: string;
  points: number;
  avatarUrl: string;
};

type LeaderboardPreviewProps = {
  users: User[];
};

export default function LeaderboardPreview({ users }: LeaderboardPreviewProps) {
  const router = useRouter();

  return (
    <div className="bg-black bg-opacity-40 rounded-xl p-6 border-2 border-[#ff00ff] shadow-[0_0_15px_#ff00ff] mx-auto w-5/12 min-w-fit">
      <div className="flex items-center gap-2 mb-4 text-[#ff00ff]">
        <Crown className="w-6 h-6" />
        <h2 className="text-2xl font-bold tracking-widest">Top Runners</h2>
      </div>

      <ul className="space-y-4">
        {users.slice(0, 3).map((user, idx) => (
          <li key={user.id} className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full border-2 border-[#00f2ff] overflow-hidden shadow-[0_0_8px_#00f2ff]">
              <Image
                src={user.avatarUrl}
                alt={user.name}
                fill
                className="object-cover"
              />
              <span className="absolute bottom-0 right-0 text-xs bg-black bg-opacity-80 text-[#00f2ff] px-1 rounded">
                #{idx + 1}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-[#00f2ff] font-semibold flex items-center gap-1">
                <UserCircle className="w-4 h-4" /> {user.name}
              </p>
              <div className="w-full h-2 bg-[#1a1a1a] rounded overflow-hidden mt-1">
                <div
                  className="h-full bg-[#00f2ff] animate-pulse"
                  style={{ width: `${Math.min(user.points / 10, 100)}%` }}
                />
              </div>
            </div>
            <span className="text-[#ff00ff] font-bold flex items-center gap-1">
              <Bolt className="w-4 h-4" /> {user.points}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/leaderboard")}
          className="px-4 py-2 border border-[#00f2ff] text-[#00f2ff] rounded hover:bg-[#00f2ff] hover:text-black transition shadow-[0_0_10px_#00f2ff]"
        >
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
}
