import { LuUser } from "react-icons/lu";

import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage)
    return (
      <img src={profileImage} className="h-6 w-6 rounded-full object-cover" />
    );
  return <LuUser className="bg-primary h-6 w-6 rounded-full text-white" />;
}

export default UserIcon;
