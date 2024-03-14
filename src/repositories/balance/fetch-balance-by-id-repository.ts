import { db } from "@/drizzle";
import { balance, type SelectBalanceWithPayments } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchBalanceByIdRepository(
  id: string,
): Promise<RepositoryRetrun<SelectBalanceWithPayments>> {
  try {
    const data = await db.query.balance.findMany({
      where: eq(balance.id, id),
      with: {
        payments: true,
      },
    });

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
