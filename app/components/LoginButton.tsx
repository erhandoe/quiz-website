"use client";

import { logVar } from "../lib/actions/auth";

export function LoginButton({ s }) {
  return (
    <button className={"font-bold text-xl text-white"} onClick={() => logVar()}>
      {s}
    </button>
  );
}
