import { db } from "@/drizzle";
import { SelectUser, user } from "@/schemas";
import { CreateReturn } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchUserByIdRepository(
  id: string
): Promise<CreateReturn<SelectUser>> {
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
