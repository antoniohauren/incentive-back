import { Handler } from "hono";

const getUserHandler: Handler = (c) => {
  const id = c.req.param("id");

  return c.text(`get-user ${id}`);
};

export { getUserHandler };
