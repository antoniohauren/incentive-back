import { fetchBalanceByIdRepository } from "@/repositories/balance";
import type { SelectBalanceWithPayments } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";

export async function getBalanceService(
  id: string,
): Promise<ServiceReturn<SelectBalanceWithPayments>> {
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
