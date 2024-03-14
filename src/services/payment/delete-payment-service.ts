import { deletePaymentRepository } from "@/repositories/payment";
import type { ServiceReturn } from "@/utils/types";

export async function deletePaymentService(id: string): Promise<ServiceReturn> {
  const payment = await deletePaymentRepository(id);

  if (!payment.success) {
    return { success: false, message: "FAILED_TO_DELETE_PAYMENT" };
  }

  return {
    success: true,
    message: "PAYMENT_DELETED",
  };
}
