import { db } from "@/drizzle";
import {
  type InsertPayment,
  type SelectPayment,
  balance,
  payment,
} from "@/schemas";
import type { RepositoryRetrun } from "@/utils/types";
import { eq } from "drizzle-orm";

export async function createPaymentRepository(
  dto: InsertPayment,
): Promise<RepositoryRetrun<SelectPayment>> {
  try {
    await db.transaction(async (tx) => {
      await tx
        .update(balance)
        .set({
          currentMoney: dto.value,
          updatedAt: new Date(),
        })
        .where(eq(balance.id, dto.balanceId));

      await db.insert(payment).values(dto);
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
