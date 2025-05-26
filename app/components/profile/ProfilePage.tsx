"use client";

import { useState } from "react";

import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";
import ProfileStats from "./ProfileStats";
import ExploreLinks from "./ExploreLinks";

type User = {
  name: string;
  email: string;
  avatarUrl: string;
};

export default function ProfilePage(user: User) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  // Add avatar handling if you want

  const handleSave = () => {
    // TODO: Save updated profile data
    setEditMode(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#0a0a0a] rounded-xl border border-[#00f2ff] shadow-lg text-white font-chakra mt-4">
      <h1 className="text-3xl font-bold mb-6 text-[#00f2ff]">Your Profile</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <ProfileAvatar name={name} avatarUrl={user.avatarUrl} />

        <ProfileForm
          editMode={editMode}
          name={name}
          email={email}
          onNameChange={setName}
          onEmailChange={setEmail}
          onEditToggle={setEditMode}
          onSave={handleSave}
        />
      </div>

      <ProfileStats
        stats={[
          { label: "Total Quizzes", value: 24 },
          { label: "Accuracy", value: "87%" },
          { label: "Longest Streak", value: 5 },
          { label: "Rank", value: "Silver" },
        ]}
      />

      {/* Links to Other Pages */}
      <ExploreLinks
        links={[
          { label: "View Achievements & Badges", href: "/achievements" },
          { label: "Your Notes & Journal", href: "/notes" },
          { label: "Friends & Activity", href: "/friends" },
          { label: "Account Settings", href: "/settings" },
        ]}
      />
    </div>
  );
}
