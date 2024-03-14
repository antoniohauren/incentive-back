import { db } from "@/drizzle";
import { payment, type InsertPayment, type SelectPayment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";

export async function createPaymentRepository(
  dto: InsertPayment,
): Promise<RepositoryRetrun<SelectPayment>> {
  try {
    const data = await db.insert(payment).values(dto).returning();

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
