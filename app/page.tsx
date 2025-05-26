"use server";

import { auth } from "@/auth";
import { StartButton } from "./components/StartButton";
import FeatureSection from "./components/FeatureSection";
import LeaderboardPreview from "./components/LeaderboardPreview";

export default async function Home() {
  const session = await auth();
  const dummyUsers = [
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
      avatarUrl:
        "https://api.dicebear.com/9.x/identicon/png?seed=CircuitHunter",
    },
    {
      id: 3,
      name: "ByteWitch",
      points: 870,
      avatarUrl: "https://api.dicebear.com/9.x/identicon/png?seed=ByteWitch",
    },
  ];

  if (session?.user) {
    return (
      <div className="flex justify-center m-10 flex-col font-chakra">
        <div className="flex justify-center p-3 flex-col text-center font-orbitron z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_#00f2ff]">
            Are You Quiz Master?
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Answer fast, score high, climb the leaderboard.
          </p>
        </div>
        <StartButton />
        <FeatureSection />
        <LeaderboardPreview users={dummyUsers} />
      </div>
    );
  }

  return (
    <div className="flex justify-center m-10 flex-col font-chakra">
      <div className="flex justify-center p-3 flex-col text-center font-orbitron z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_#00f2ff]">
          Are You Quiz Master?
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Answer fast, score high, climb the leaderboard.
        </p>
      </div>
      <StartButton />
      <FeatureSection />
      <LeaderboardPreview users={dummyUsers} />
    </div>
  );
}
