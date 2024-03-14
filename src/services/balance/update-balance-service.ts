import type { BalanceUpdateRequest } from "@/models/balance-model";
import { updateBalanceRepository } from "@/repositories/balance";
import type { SelectBalance, UpdateBalance } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";

export async function updateBalanceService(
  id: string,
  data: BalanceUpdateRequest,
): Promise<ServiceReturn<SelectBalance>> {
  const dto: UpdateBalance = {
    description: data.description,
    name: data.name,
  };

  const balance = await updateBalanceRepository(id, dto);

  if (!balance.success || !balance.data || !balance.data.length) {
    return { success: false, message: "FAILED_TO_UPDATE_BALANCE" };
  }

  return {
    success: balance.success,
    message: "BALANCE_UPDATED",
    data: balance.data[0],
  };
}
