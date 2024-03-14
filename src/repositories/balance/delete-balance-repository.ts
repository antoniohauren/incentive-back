import { db } from "@/drizzle";
import { balance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function deleteBalanceRepository(
  id: string,
): Promise<RepositoryRetrun> {
  try {
    await db.delete(balance).where(eq(balance.id, id));

    return {
      success: true,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
    };
  }
}
