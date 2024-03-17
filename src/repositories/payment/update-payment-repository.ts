import { db } from "@/drizzle";
import { payment, type SelectPayment, type UpdatePayment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function updatePaymentRepository(
  id: string,
  dto: UpdatePayment,
): Promise<RepositoryRetrun<SelectPayment>> {
  try {
    const data = await db
      .update(payment)
      .set({
        ...dto,
        updatedAt: new Date(),
      })
      .where(eq(payment.id, id))
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
