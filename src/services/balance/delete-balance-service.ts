import { deleteBalanceRepository } from "@/repositories/balance";
import type { ServiceReturn } from "@/utils/types";

export async function deleteBalanceService(id: string): Promise<ServiceReturn> {
  const balance = await deleteBalanceRepository(id);

  if (!balance.success) {
    return { success: false, message: "FAILED_TO_DELETE_BALANCE" };
  }

  return {
    success: true,
    message: "BALANCE_DELETED",
  };
}
