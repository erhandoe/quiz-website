"use server";

import { auth } from "@/auth";
import DashboardLayoutWrapper from "../components/dashboard/DashboardLayoutWrapper";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <DashboardLayoutWrapper
        user={{ name: session.user.name!, image: session.user.image! }}
        completed={[
          {
            id: 1,
            title: "Cybersecurity Basics",
            difficulty: "Easy",
            score: 95,
            completedAt: "2025-05-24",
          },
          {
            id: 2,
            title: "OSINT Ops",
            difficulty: "Medium",
            score: 88,
            completedAt: "2025-05-22",
          },
        ]}
        available={[
          { id: 3, title: "Binary Exploits", difficulty: "Hard" },
          { id: 4, title: "Intro to Web", difficulty: "Easy" },
          { id: 5, title: "Crypto Challenges", difficulty: "Medium" },
        ]}
      />
    );
  }

  return null;
}
