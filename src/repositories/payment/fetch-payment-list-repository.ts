import { db } from "@/drizzle";
import { type SelectPayment, payment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function fetchPaymentListRepository(): Promise<
  RepositoryRetrun<SelectPayment>
> {
  try {
    const data = await db.select().from(payment);

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
