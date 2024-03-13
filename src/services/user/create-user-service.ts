import {
  createUserRepository,
  fetchUserByEmailRepository,
  fetchUserByUsernameRepository,
} from "@/repositories";
import { InsertUser } from "@/schemas";
import { ServiceReturn } from "@/utils/types";

export async function createUserService(
  data: InsertUser
): Promise<ServiceReturn> {
  let found;

  found = await fetchUserByEmailRepository(data.email);

  if (found.success) {
    return { success: false, message: "EMAIL_IN_USE" };
  }

  found = await fetchUserByUsernameRepository(data.username);

  if (found.success) {
    return { success: false, message: "USERNAME_IN_USE" };
  }

  const user = await createUserRepository(data);

  return { success: user.success, message: "USER_CREATED" };
}
