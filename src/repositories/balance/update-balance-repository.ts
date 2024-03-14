import { db } from "@/drizzle";
import { balance, type SelectBalance, type UpdateBalance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function updateBalanceRepository(
  id: string,
  dto: UpdateBalance,
): Promise<RepositoryRetrun<SelectBalance>> {
  try {
    const data = await db
      .update(balance)
      .set(dto)
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
