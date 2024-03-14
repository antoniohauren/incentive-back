import type { BalanceRequest } from "@/models/balance-model";
import { createBalanceRepository } from "@/repositories/balance";
import type { InsertBalance, SelectBalance } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";

export async function createBalanceService(
  data: BalanceRequest,
  userId: string,
): Promise<ServiceReturn<SelectBalance>> {
  const dto: InsertBalance = {
    name: data.name,
    description: data.description,
    startMoney: data.startMoney,
    currentMoney: data.startMoney,
    userId,
  };

  const balance = await createBalanceRepository(dto);

  if (!balance.success || !balance.data || !balance.data.length) {
    return { success: false, message: "FAILED_TO_CREATE_BALANCE" };
  }

  return {
    success: balance.success,
    message: "BALANCE_CREATED",
    data: balance.data[0],
  };
}
