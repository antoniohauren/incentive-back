import { hello } from "@/handlers";
import { Hono } from "hono";

const helloRouter = new Hono();

helloRouter.get("/", hello);

export { helloRouter };
