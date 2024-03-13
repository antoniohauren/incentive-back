import { db } from "@/drizzle";
import { SelectUser, user } from "@/schemas";
import { CreateReturn } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchUserByEmailRepository(
  email: string
): Promise<CreateReturn<SelectUser>> {
  try {
    const data = await db.select().from(user).where(eq(user.email, email));

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
