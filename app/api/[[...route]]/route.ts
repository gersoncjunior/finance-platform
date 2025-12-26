import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "/test/:testid",
    zValidator(
      "param",
      z.object({
        testid: z.string(),
      })
    ),
    (c) => {
      const { testid } = c.req.valid("param");
      return c.json({ message: `Hello World ${testid}` });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
