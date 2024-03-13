import { db } from "@/drizzle";
import { type InsertUser, type SelectUser, user } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function createUserRepository(
  dto: InsertUser,
): Promise<RepositoryRetrun<SelectUser>> {
  try {
    const data = await db.insert(user).values(dto).returning();

    return {
      success: true,
      data,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
    };
  }
}
