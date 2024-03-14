import type { UserResponse } from "@/models";
import { fetchUserByIdRepository } from "@/repositories/user";
import type { ServiceReturn } from "@/utils/types";

export async function getUserService(
  id: string,
): Promise<ServiceReturn<UserResponse>> {
  const found = await fetchUserByIdRepository(id);

  if (!found.success || !found.data) {
    return { success: false, message: "USER_NOT_FOUND" };
  }

  const user = found.data[0];

  const data: UserResponse = {
    id: user.id,
    email: user.email,
    name: user.name,
    username: user.username,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return {
    success: true,
    data,
  };
}
