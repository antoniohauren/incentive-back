import "dotenv/config";
import { sign } from "hono/jwt";
import { JwtPayload } from "./types";

export async function generateJwtToken(payload: JwtPayload) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("Invalid jwt secret");
  }

  const token = await sign(payload, secret);

  return token;
}
