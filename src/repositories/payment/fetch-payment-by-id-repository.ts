import { db } from "@/drizzle";
import { payment, type SelectPayment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function fetchPaymentByIdRepository(
  id: string,
): Promise<RepositoryRetrun<SelectPayment>> {
  try {
    const data = await db.select().from(payment).where(eq(payment.id, id));

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
