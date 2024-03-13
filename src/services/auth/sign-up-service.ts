import { SignUpRequest } from "@/models/auth-model";
import { generateJwtToken } from "@/utils/jwt";
import { JwtPayload, ServiceReturn } from "@/utils/types";
import { createUserService } from "../user";

export async function signUpService(
  data: SignUpRequest
): Promise<ServiceReturn> {
  const createUserReturn = await createUserService(data);

  if (
    !createUserReturn.success ||
    !createUserReturn ||
    !createUserReturn.data
  ) {
    return createUserReturn;
  }

  const user = createUserReturn.data;

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
