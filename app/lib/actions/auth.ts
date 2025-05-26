"use server";

import { auth, signIn, signOut } from "@/auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};

export const logVar = async () => {
  const session = await auth();
  if (session?.user) {
    await signOut({ redirectTo: "/" });
  } else {
    await signIn("github", { redirectTo: "/" });
  }
};

export const logString = async (): Promise<string> => {
  const session = await auth();
  if (session?.user) {
    return "Logout";
  }
  return "Login";
};
