import type { PaymentListResponse } from "@/models/payment-model";
import { fetchPaymentListRepository } from "@/repositories/payment/fetch-payment-list-repository";
import type { ServiceReturn } from "@/utils/types";

export async function getPaymentListService(): Promise<
  ServiceReturn<PaymentListResponse>
> {
  const list = await fetchPaymentListRepository();

  if (!list.success || !list.data) {
    return { success: false, message: "SOMETHING_WRONG" };
  }

  const data = list.data;

  return {
    success: true,
    data,
  };
}
