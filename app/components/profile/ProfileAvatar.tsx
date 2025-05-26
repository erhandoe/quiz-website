"use client";

import Image from "next/image";

type ProfileAvatarProps = {
  name: string;
  avatarUrl: string;
};

export default function ProfileAvatar({ name, avatarUrl }: ProfileAvatarProps) {
  return (
    <div className="flex-shrink-0">
      <Image
        src={avatarUrl}
        alt={`${name} avatar`}
        width={256}
        height={256}
        className="rounded-full w-32 h-32 border-4 border-[#00f2ff]"
      />
      {/* Optional: add avatar upload button here */}
    </div>
  );
}
