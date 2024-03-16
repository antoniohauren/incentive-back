import type { PaymentRequest } from "@/models/payment-model";
import { createPaymentRepository } from "@/repositories/payment";
import type { InsertPayment, SelectPayment } from "@/schemas";
import type { ServiceReturn } from "@/utils/types";
import { getBalanceService } from "../balance";

export async function createPaymentService(
  data: PaymentRequest,
): Promise<ServiceReturn<SelectPayment>> {
  const dto: InsertPayment = {
    name: data.name,
    balanceId: data.balanceId,
    description: data.description,
    value: data.value,
  };

  const balance = await getBalanceService(dto.balanceId);

  if (!balance.success || !balance.data) {
    return {
      success: false,
      message: "BALANCE_NOT_FOUND",
    };
  }

  const currentMoney = balance.data.currentMoney;

  if (currentMoney < dto.value) {
    return {
      success: false,
      message: "INSUFICIENT_BALANCE",
    };
  }

  const payment = await createPaymentRepository(dto, currentMoney - dto.value);

  if (!payment.success) {
    return { success: false };
  }

  return {
    success: true,
  };
}
