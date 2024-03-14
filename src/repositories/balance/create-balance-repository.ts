import { db } from "@/drizzle";
import { balance, type InsertBalance, type SelectBalance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function createBalanceRepository(
  dto: InsertBalance,
): Promise<RepositoryRetrun<SelectBalance>> {
  try {
    const data = await db.insert(balance).values(dto).returning();

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
