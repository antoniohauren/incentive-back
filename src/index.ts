import { serve } from "@hono/node-server";
import app from "./app";

console.log("running...");

serve(app);
