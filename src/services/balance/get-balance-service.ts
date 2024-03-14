import type { BalanceResponse } from "@/models/balance-model";
import { fetchBalanceByIdRepository } from "@/repositories/balance/fetch-balance-by-id-repository";
import type { ServiceReturn } from "@/utils/types";

export async function getBalanceService(
  id: string,
): Promise<ServiceReturn<BalanceResponse>> {
  const found = await fetchBalanceByIdRepository(id);

  if (!found.success || !found.data) {
    return { success: false, message: "BALANCE_NOT_FOUND" };
  }

  const data = found.data[0];

  return {
    success: true,
    data,
  };
}
