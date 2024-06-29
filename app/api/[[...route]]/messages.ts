import { db } from "@/db";
import { InsertMessage, InsertMessageSchema, messagesTable } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { getMessagesService, postMessagesService } from "../services/messages.service";
import { z } from "zod";

const messageQuerySchema = z.object({
  quantity: z.string().regex(/[1-9]+0*/).optional(),
});

export const messageHandlers = new Hono()

  .get("/", zValidator("query", messageQuerySchema), async (c) => {
    const query = c.req.valid("query");

    if (query === undefined || query.quantity === undefined) {
      const results = await getMessagesService({ quantity: 1 });

      return c.json(results, 200);
    }

    const length = Number.parseInt(query.quantity);
    if (length <= 0 || length > 240) {
      return c.json({ od_server: "Quantity must be from 1 up to 240 (both are INCLUDED)" }, 400);
    }

    const results = await getMessagesService({ quantity: length });

    return c.json(results, 200);
  })

  .post("/", zValidator("json", InsertMessageSchema), async (c) => {
    const json = c.req.valid("json");

    const data: InsertMessage = {
      anonymous: json.anonymous,
      message: json.message,
    }

    const results = await postMessagesService(data);

    return c.json(results, 200);
  });


