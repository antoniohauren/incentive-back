import { db } from "@/drizzle";
import { payment, type SelectPayment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function fetchPaymentListRepository(): Promise<
  RepositoryRetrun<SelectPayment>
> {
  try {
    const data = await db.select().from(payment);

    return {
      success: true,
      data,
    };
  } catch (err) {
    console.log(err);

    return {
      success: false,
    };
  }
}
