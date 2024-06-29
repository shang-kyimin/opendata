import { Hono } from "hono";
import { getRandomUsernamesService } from "../services/randoms.service";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const randomUsernameQuerySchema = z.object({
  quantity: z.string().regex(/[1-9]+0*/).optional(),
});

export const randomUsernameHandlers = new Hono()

  .get("/", zValidator("query", randomUsernameQuerySchema), async (c) => {
    const query = c.req.valid("query");

    if (query === undefined || query.quantity === undefined) {
      const results = await getRandomUsernamesService({ quantity: 1 });

      return c.json(results, 200);
    }

    const length = Number.parseInt(query.quantity);
    if (length <= 0 || length > 240) {
      return c.json({ od_server: "Quantity must be from 1 up to 240 (both are INCLUDED)" }, 400);
    }
    
    const results = await getRandomUsernamesService({ quantity: length });

    return c.json(results, 200);
  });


