import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono().basePath("/api");

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    return c.json({
      message: "Hello Next.js!",
      userId: auth.userId,
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
