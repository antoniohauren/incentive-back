import { db } from "@/drizzle";
import { balance, type SelectBalance } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function fetchBalanceListRepository(): Promise<
  RepositoryRetrun<SelectBalance>
> {
  try {
    const data = await db.select().from(balance);

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
