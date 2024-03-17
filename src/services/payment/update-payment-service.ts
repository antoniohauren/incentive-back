import type { PaymentUpdateRequest } from "@/models/payment-model";
import { updatePaymentRepository } from "@/repositories/payment/update-payment-repository";
import type { SelectPayment, UpdatePayment } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";

export async function updatePaymentService(
  id: string,
  data: PaymentUpdateRequest,
): Promise<ServiceReturn<SelectPayment>> {
  const dto: UpdatePayment = {
    description: data.description,
    name: data.name,
  };

  const payment = await updatePaymentRepository(id, dto);

  if (!payment.success || !payment.data || !payment.data.length) {
    return { success: false, message: "FAILED_TO_UPDATE_PAYMENT" };
  }

  return {
    success: payment.success,
    message: "PAYMENT_UPDATED",
    data: payment.data[0],
  };
}
