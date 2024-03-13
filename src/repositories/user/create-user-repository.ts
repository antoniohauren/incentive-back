import { db } from "@/drizzle";
import { InsertUser, SelectUser, user } from "@/schemas";
import { CreateReturn } from "@/utils/types";

export async function createUserRepository(
  dto: InsertUser
): Promise<CreateReturn<SelectUser>> {
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
