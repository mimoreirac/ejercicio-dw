import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import app from "../index.js";

describe("GET OK", () => {
  it("Endpoint debe responder mensaje ok", async () => {
    const res = await request(app).get("/productos");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
