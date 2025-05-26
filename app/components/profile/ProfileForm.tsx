"use client";

type ProfileFormProps = {
  editMode: boolean;
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onEditToggle: (edit: boolean) => void;
  onSave: () => void;
};

export default function ProfileForm({
  editMode,
  name,
  email,
  onNameChange,
  onEmailChange,
  onEditToggle,
  onSave,
}: ProfileFormProps) {
  return (
    <div className="flex-1 space-y-4">
      {editMode ? (
        <>
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className="w-full rounded bg-[#111] border border-[#00f2ff] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full rounded bg-[#111] border border-[#00f2ff] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onEditToggle(false)}
              className="px-4 py-2 border border-[#ff00ff] rounded hover:bg-[#ff00ff] hover:text-black transition"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 bg-[#00f2ff] rounded hover:bg-[#00dbe6] transition"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            <span className="font-semibold text-[#00f2ff]">Name: </span>
            {name}
          </p>
          <p>
            <span className="font-semibold text-[#00f2ff]">Email: </span>
            {email}
          </p>
          <button
            onClick={() => onEditToggle(true)}
            className="mt-4 px-4 py-2 border border-[#00f2ff] rounded hover:bg-[#00f2ff] hover:text-black transition"
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
}
