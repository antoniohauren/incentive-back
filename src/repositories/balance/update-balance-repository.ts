import { db } from "@/drizzle";
import { type SelectBalance, type UpdateBalance, balance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function updateBalanceRepository(
  id: string,
  dto: UpdateBalance,
): Promise<RepositoryRetrun<SelectBalance>> {
  try {
    const data = await db
      .update(balance)
      .set({
        ...dto,
        updatedAt: new Date(),
      })
      .where(eq(balance.id, id))
      .returning();

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
