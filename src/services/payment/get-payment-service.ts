import { fetchPaymentByIdRepository } from "@/repositories/payment/fetch-payment-by-id-repository";
import type { SelectPayment } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";

export async function getPaymentService(
  id: string,
): Promise<ServiceReturn<SelectPayment>> {
  const found = await fetchPaymentByIdRepository(id);

  if (!found.success || !found.data) {
    return { success: false, message: "PAYMENT_NOT_FOUND" };
  }

  const data = found.data[0];

  return {
    success: true,
    data,
  };
}
