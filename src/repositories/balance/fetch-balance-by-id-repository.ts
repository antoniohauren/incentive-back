import { db } from "@/drizzle";
import { balance, type SelectBalance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchBalanceByIdRepository(
  id: string,
): Promise<RepositoryRetrun<SelectBalance>> {
  try {
    const data = await db
      .select()
      .from(balance)
      // .leftJoin(payment, eq(balance.id, payment.balanceId))
      .where(eq(balance.id, id));

    if (!data || data.length < 1) {
      return {
        success: false,
      };
    }

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
