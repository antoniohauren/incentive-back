import { Handler } from "hono";

export const hello: Handler = (c) => {
  return c.text("Hello handler!");
};
