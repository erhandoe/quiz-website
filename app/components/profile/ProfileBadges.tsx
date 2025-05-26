"use client";
import Image from "next/image";

type Badge = {
  name: string;
  iconUrl: string;
  earned: boolean;
};

type ProfileBadgesProps = {
  badges: Badge[];
};

export default function ProfileBadges({ badges }: ProfileBadgesProps) {
  return (
    <section className="mt-10 bg-[#111] p-6 rounded-lg border border-[#00f2ff] shadow-inner">
      <h2 className="text-xl font-semibold text-[#00f2ff] mb-4">Badges</h2>
      <div className="flex flex-wrap gap-4">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center p-2 rounded transition ${
              badge.earned ? "opacity-100" : "opacity-30 grayscale"
            }`}
          >
            <Image
              src={badge.iconUrl}
              alt={badge.name}
              width={48}
              height={48}
              className="w-12 h-12 mb-1"
            />
            <span className="text-xs text-center text-white">{badge.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
