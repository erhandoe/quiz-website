"use server";

import { auth } from "@/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();

  if (session?.user)
    return (
      <div className="flex justify-center m-10 flex-col font-chakra">
        <p>Username: {session.user.name}</p>
        <p>Email: {session.user.name}</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? "Avatar"}
            className="rounded-lg"
          />
        )}
      </div>
    );
}
