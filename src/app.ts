import "dotenv/config";

import { authRouter, helloRouter, paymentRouter, userRouter } from "@/routes";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { balanceRouter } from "./routes/balance-router";

const app = new Hono();

app.use("*", cors());

// PUBLIC ROUTES
app.route("/", helloRouter);
app.route("/auth", authRouter);

// SETUP JWT MIDDLEWARE
const secret = process.env.JWT_SECRET || "";
app.use("/*", jwt({ secret }));

// PRIVATE ROUTES
app.route("/user", userRouter);
app.route("/balance", balanceRouter);
app.route("/payment", paymentRouter);

export default app;
