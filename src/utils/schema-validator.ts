import { zValidator } from "@hono/zod-validator";
import type { ZodType, ZodTypeDef } from "zod";

export function validator<T extends ZodType<unknown, ZodTypeDef, unknown>>(
  schema: T,
) {
  return zValidator("json", schema, (result, ctx) => {
    if (!result.success) {
      console.log(result.error);
      return ctx.json(result.error.flatten().fieldErrors);
    }
  });
}
