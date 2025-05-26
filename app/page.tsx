"use server";

import { auth } from "@/auth";
import { StartButton } from "./components/StartButton";

export default async function Home() {
  const session = await auth();

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

        <div id="features"></div>
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

      <div id="features"></div>
    </div>
  );
}
