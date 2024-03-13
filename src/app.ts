import { helloRouter } from "@/routes";
import { Hono } from "hono";

const app = new Hono();

app.route("/", helloRouter);

export default app;
