import type { UserListResponse } from "@/models";
import { fetchUserListRepository } from "@/repositories/user";
import type { ServiceReturn } from "@/utils/types";

export async function getUserListService(): Promise<
  ServiceReturn<UserListResponse>
> {
  const data = await fetchUserListRepository();

  if (!data.success || !data.data) {
    return { success: false, message: "SOMETHING_WRONG" };
  }

  const users = data.data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  });

  return {
    success: true,
    data: users,
  };
}
