"use client";

import { getTier } from "@/app/functions/getTier";
import { UserCircle } from "lucide-react";
import Image from "next/image";

type User = {
  name?: string | null;
  points: number;
  avatarUrl?: string | null;
};

export const DashboardWelcome: React.FC<User> = ({
  name,
  points,
  avatarUrl,
}) => {
  const tier = getTier(points);
  const displayName = name ?? "User";
  return (
    <section className="mt-4 p-6 bg-[#0a0a0a] border border-[#00f2ff] rounded-xl shadow-[0_0_20px_#00f2ff66] max-w-4xl mx-auto text-white font-chakra">
      <h2 className="text-3xl font-extrabold mb-2 flex items-center gap-2 text-[#00f2ff]">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${displayName}'s avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-[#00bfff] shadow-[0_0_10px_#00bfff]"
          />
        ) : (
          <UserCircle className="w-12 h-12" />
        )}
        Welcome back, {displayName}
      </h2>

      <p className="text-[#00bfff] text-lg mb-4">
        You have <span className="font-semibold">{points}</span> points
      </p>

      <div
        className={`inline-block px-4 py-2 rounded-full font-semibold text-sm animate-neonPulse border shadow-xl shadow-platinum`}
        style={{
          background: "rgba(0 191 255 / 0.1)",
          color: `var(--tw-color-${tier.color})`,
          borderColor: `var(--tw-color-${tier.color})`,
          boxShadow: `0 0 10px var(--tw-color-${tier.color}), 0 0 20px var(--tw-color-${tier.color})`,
          textShadow: `0 0 5px var(--tw-color-${tier.color})`,
        }}
      >
        Tier: {tier.label}
      </div>
    </section>
  );
};
