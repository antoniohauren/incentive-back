import { db } from "@/drizzle";
import { balance, payment } from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function deletePaymentRepository(
  id: string,
): Promise<RepositoryRetrun> {
  try {
    await db.transaction(async (tx) => {
      const [p] = await tx.select().from(payment).where(eq(payment.id, id));
      const [b] = await tx
        .select()
        .from(balance)
        .where(eq(balance.id, p.balanceId));

      await tx.delete(payment).where(eq(payment.id, id));

      await tx.update(balance).set({
        currentMoney: b.currentMoney + p.value,
        updatedAt: new Date(),
      });
    });

    return {
      success: true,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
    };
  }
}
