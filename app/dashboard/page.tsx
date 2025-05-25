export default function Dashboard() {
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
      <button className="text-4xl w-fit m-auto p-3 mt-8 px-6 py-3 bg-sky-500 text-black font-semibold rounded-lg shadow-[0_0_15px_#00f2ff] hover:bg-white transition">
        Jack In
      </button>

      <div id="features"></div>
    </div>
  );
}
