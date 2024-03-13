import type { Handler } from "hono";

const hello: Handler = (c) => {
  return c.text("Hello handler!");
};

export { hello };
