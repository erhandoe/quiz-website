"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div className="font-orbitron flex row-auto center items-center p-3 pr-8 pl-8 space-x-10 bg-gray-800 rounded-xl m-auto mt-2 w-fit border-blue-600 border-2 shadow-blue-400 shadow-md sticky top-0">
      <div className="flex row-auto center items-center space-x-2">
        <Image src="globe.svg" alt="logo" width={32} height={32} />
        <Link
          href="/"
          className={
            isActive("/")
              ? "font-bold text-xl text-white drop-shadow-[0_0_4px_#00f2ff]"
              : "font-bold text-xl text-white"
          }
        >
          Quiz app
        </Link>
      </div>
      <Link
        href="/dashboard"
        className={
          isActive("/dashboard")
            ? "font-bold text-xl text-white drop-shadow-[0_0_4px_#00f2ff]"
            : "font-bold text-xl text-white"
        }
      >
        Dashboard
      </Link>
      <Link
        href="/leaderboard"
        className={
          isActive("/leaderboard")
            ? "font-bold text-xl text-white drop-shadow-[0_0_4px_#00f2ff]"
            : "font-bold text-xl text-white"
        }
      >
        Leaderboard
      </Link>
      <Link
        href="/profile"
        className={
          isActive("/profile")
            ? "font-bold text-xl text-white drop-shadow-[0_0_4px_#00f2ff]"
            : "font-bold text-xl text-white"
        }
      >
        Profile
      </Link>
      <Link
        href="/login"
        className={
          isActive("/login")
            ? "font-bold text-xl text-white drop-shadow-[0_0_4px_#00f2ff]"
            : "font-bold text-xl text-white"
        }
      >
        Login
      </Link>
    </div>
  );
};
