import { createUserRepository } from "@/repositories";
import { InsertUser } from "@/schemas";

export async function createUserService(data: InsertUser) {
  const user = await createUserRepository(data);

  return user.success;
}
