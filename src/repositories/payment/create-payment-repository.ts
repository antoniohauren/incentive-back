import { db } from "@/drizzle";
import {
  balance,
  payment,
  type InsertPayment,
  type SelectPayment,
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
