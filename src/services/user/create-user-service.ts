import type { UserRequest } from "@/models";
import {
  createUserRepository,
  fetchUserByEmailRepository,
  fetchUserByUsernameRepository,
} from "@/repositories/user";
import type { InsertUser, SelectUser } from "@/schemas";
import { generateHash, generateSalt } from "@/utils/hash";
import type { RepositoryRetrun, ServiceReturn } from "@/utils/types";

export async function createUserService(
  data: UserRequest,
): Promise<ServiceReturn<SelectUser>> {
  let found: RepositoryRetrun<SelectUser>;

  found = await fetchUserByEmailRepository(data.email);

  if (found.success) {
    return { success: false, message: "EMAIL_IN_USE" };
  }

  found = await fetchUserByUsernameRepository(data.username);

  if (found.success) {
    return { success: false, message: "USERNAME_IN_USE" };
  }

  const salt = generateSalt();
  const password_hash = generateHash(data.password, salt);

  const dto: InsertUser = {
    username: data.username,
    email: data.email,
    name: data.name,
    password_hash,
    salt,
  };

  const user = await createUserRepository(dto);

  if (!user.success || !user.data || !user.data.length) {
    return { success: false, message: "FAILED_TO_CREATE_USER" };
  }

  return { success: user.success, message: "USER_CREATED", data: user.data[0] };
}
