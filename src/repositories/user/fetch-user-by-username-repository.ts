import { db } from "@/drizzle";
import { type SelectUser, user } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchUserByUsernameRepository(
  username: string,
): Promise<RepositoryRetrun<SelectUser>> {
  try {
    const data = await db
      .select()
      .from(user)
      .where(eq(user.username, username));

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
