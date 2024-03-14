import { db } from "@/drizzle";
import { balance, type SelectBalance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function updateBalanceMoneyRepository(
  id: string,
  newValue: number,
): Promise<RepositoryRetrun<SelectBalance>> {
  try {
    const data = await db
      .update(balance)
      .set({
        currentMoney: newValue,
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
