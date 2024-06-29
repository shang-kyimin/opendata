import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { randomUsernameHandlers } from "./randoms";
import { handle } from "hono/vercel";
import { messageHandlers } from "./messages";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  return c.json({ error: "Internal error" }, 500);
});

const routes  = app
  .route("/messages", messageHandlers)

  .route("/random/usernames", randomUsernameHandlers);

export const GET = handle(app);
export const POST = handle(app);

export type ApiType = typeof routes;


