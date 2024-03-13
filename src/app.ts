import { hello } from "@/handlers/hello-handler";
import { Hono } from "hono";

const app = new Hono();

app.get("/", hello);

export default app;
