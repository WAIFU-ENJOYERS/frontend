import { it, describe, expect } from "vitest";
import { store } from "../store";

describe("store", () => {
  it("score test", () => {
    expect(store.score).toBe(0);
    store.increment();
    expect(store.score).toBe(1);
    store.increment();
    expect(store.score).toBe(2);
    store.increment();
    store.increment();
    store.increment();
    store.increment();
    store.increment();
    expect(store.score).toBe(7);
  });
});
