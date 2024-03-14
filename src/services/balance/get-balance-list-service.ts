import type { BalanceListResponse } from "@/models/balance-model";
import { fetchBalanceListRepository } from "@/repositories/balance/fetch-balance-list-repository";
import type { ServiceReturn } from "@/utils/types";

export async function getBalanceListService(): Promise<
  ServiceReturn<BalanceListResponse>
> {
  const list = await fetchBalanceListRepository();

  if (!list.success || !list.data) {
    return { success: false, message: "SOMETHING_WRONG" };
  }

  const data = list.data;

  return {
    success: true,
    data,
  };
}
