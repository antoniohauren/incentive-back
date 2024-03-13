import { db } from "@/drizzle";
import { type SelectUser, user } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchUserByIdRepository(
  id: string,
): Promise<RepositoryRetrun<SelectUser>> {
  try {
    const data = await db.select().from(user).where(eq(user.id, id));

    return {
      success: true,
      data,
    };
  } catch (err) {
    console.log(err);

    return {
      success: false,
    };
  }
}
