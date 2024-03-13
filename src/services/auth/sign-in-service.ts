import { SignInRequest } from "@/models/auth-model";
import { fetchUserByUsernameRepository } from "@/repositories/user";
import { generateJwtToken } from "@/utils/jwt";
import { JwtPayload, ServiceReturn } from "@/utils/types";

export async function signInService(
  data: SignInRequest
): Promise<ServiceReturn> {
  const found = await fetchUserByUsernameRepository(data.username);

  console.log(found);

  if (!found.success || !found.data || !found.data?.length) {
    return {
      success: false,
      message: "INVALID_CREDENTIALS",
    };
  }

  const user = found.data[0];

  const payload: JwtPayload = {
    email: user.email,
    id: user.id,
    name: user.name,
    username: user.username,
  };

  const token = await generateJwtToken(payload);

  return {
    success: true,
    data: {
      token,
    },
  };
}
