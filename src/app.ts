import { helloRouter, userRouter } from "@/routes";
import { Hono } from "hono";

const app = new Hono();

app.route("/", helloRouter);
app.route("/user", userRouter);

export default app;
