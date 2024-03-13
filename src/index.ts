import { serve } from "@hono/node-server";
import { Handler, Hono } from "hono";

const app = new Hono();

const hello: Handler = (c) => {
  return c.text("Hello hono!");
};

app.get("/", hello);

console.log("running...");

serve(app);
