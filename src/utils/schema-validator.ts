import { zValidator } from "@hono/zod-validator";
import { ZodType, ZodTypeDef } from "zod";

export function validator<T extends ZodType<any, ZodTypeDef, any>>(schema: T) {
  return zValidator("json", schema, (result, ctx) => {
    if (!result.success) {
      console.log(result.error);
      return ctx.json(result.error.flatten().fieldErrors);
    }
  });
}
