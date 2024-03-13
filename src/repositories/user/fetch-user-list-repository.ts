import { db } from "@/drizzle";
import { type SelectUser, user } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function fetchUserListRepository(): Promise<
  RepositoryRetrun<SelectUser>
> {
  try {
    const data = await db.select().from(user);

    const success = data.length > 0;

    return {
      success,
      data,
    };
  } catch (err) {
    console.log(err);

    return {
      success: false,
    };
  }
}
