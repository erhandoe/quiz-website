"use client";

import { logVar } from "../lib/actions/auth";

export type LoginS = {
  s: string;
};

export function LoginButton({ s }: LoginS) {
  return (
    <button className={"font-bold text-xl text-white"} onClick={() => logVar()}>
      {s}
    </button>
  );
}
