import { authRouter, helloRouter, userRouter } from "@/routes";
import { Hono } from "hono";

const app = new Hono();

app.route("/", helloRouter);
app.route("/user", userRouter);

app.route("/auth", authRouter);

export default app;
