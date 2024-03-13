import { Handler } from "hono";

const createUserHandler: Handler = (c) => {
  return c.text("create-user");
};

export { createUserHandler };
