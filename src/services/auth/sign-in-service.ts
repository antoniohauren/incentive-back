import type { SignInRequest } from "@/models/auth-model";
import { fetchUserByUsernameRepository } from "@/repositories/user";
import { generateHash } from "@/utils/hash";
import { generateJwtToken } from "@/utils/jwt";
import type { JwtPayload, ServiceReturn } from "@/utils/types";

export async function signInService(
  data: SignInRequest,
): Promise<ServiceReturn> {
  const found = await fetchUserByUsernameRepository(data.username);

  if (!found.success || !found.data || !found.data?.length) {
    return {
      success: false,
      message: "INVALID_CREDENTIALS",
    };
  }

  const user = found.data[0];

  const userPwHash = user.passwordHash;
  const salt = user.salt;

  const pwHash = generateHash(data.password, salt);

  if (userPwHash !== pwHash) {
    return {
      success: false,
      message: "INVALID_CREDENTIALS",
    };
  }

  const payload: JwtPayload = {
    email: user.email,
    id: user.id,
    name: user.name,
    username: user.username,
  };

  const token = await generateJwtToken(payload);

  return {
    success: true,
    data: { token },
  };
}
