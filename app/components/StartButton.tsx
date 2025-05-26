"use client";

import { redirect } from "next/navigation";

export const StartButton = () => {
  return (
    <button
      className="text-4xl w-fit m-auto p-3 mt-8 px-6 py-3 bg-sky-500 text-black font-semibold rounded-lg shadow-[0_0_15px_#00f2ff] hover:bg-white transition"
      onClick={() => {
        redirect("/dashboard");
      }}
    >
      Jack In
    </button>
  );
};
