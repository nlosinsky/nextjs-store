import { clerkClient, currentUser } from "@clerk/nextjs/server";

import db from "@/utils/db";

export const GET = async () => {
  const client = await clerkClient();
  const { data: users } = await client.users.getUserList();
  const current = await currentUser();

  if (!current || current.id !== process.env.ADMIN_USER_ID) {
    return Response.json({ error: "User must be an Admin" }, { status: 401 });
  }

  for (const user of users) {
    await db.user.upsert({
      where: { clerkId: user.id },
      update: {},
      create: {
        clerkId: user.id,
        email:
          (user.emailAddresses?.length &&
            user.emailAddresses[0]?.emailAddress) ||
          "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        fullName: user.fullName || `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl || "",
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt)
      }
    });
  }

  return Response.json({ data: "Users synced successfully" });
};
