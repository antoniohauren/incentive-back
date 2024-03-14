import {
  deleteBalanceRepository,
  fetchBalanceByIdRepository,
} from "@/repositories/balance";
import type { ServiceReturn } from "@/utils/types";

export async function deleteBalanceService(id: string): Promise<ServiceReturn> {
  const balance = await fetchBalanceByIdRepository(id);

  if (!balance.success || !balance.data || !balance.data.length) {
    return { success: false, message: "FAILED_TO_DELETE_BALANCE" };
  }

  if (balance.data[0].payments.length !== 0) {
    return { success: false, message: "CANT_DELETE_BALANCE_WITH_PAYMENTS" };
  }

  const { success } = await deleteBalanceRepository(id);

  if (!success) {
    return { success: false, message: "FAILED_TO_DELETE_BALANCE" };
  }

  return {
    success: true,
    message: "BALANCE_DELETED",
  };
}
