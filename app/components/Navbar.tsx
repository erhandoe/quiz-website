"use server";

import { logString } from "../lib/actions/auth";
import { LoginButton } from "./LoginButton";
import { NavList } from "./NavList";

export const Navbar = async () => {
  const str = await logString();
  return (
    <div className="z-30 font-orbitron flex row-auto center items-center p-3 pr-8 pl-8 space-x-10 bg-gray-800 rounded-xl m-auto w-fit border-blue-600 border-2 shadow-blue-400 shadow-md sticky top-0">
      <NavList />
      <LoginButton s={str} />
    </div>
  );
};
