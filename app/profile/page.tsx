import { auth } from "@/auth";
import ProfilePage from "../components/profile/ProfilePage";

// This assumes you'll fetch the user here
export default async function Profile() {
  const session = await auth();

  if (session?.user) {
    return (
      <ProfilePage
        name={session.user.name!}
        email={session.user.email!}
        avatarUrl={session.user.image!}
      />
    );
  }
}
