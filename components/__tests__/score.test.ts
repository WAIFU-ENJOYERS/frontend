import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { setup } from "@nuxt/test-utils";
import incrementScore from "../play_page.vue"
import { store } from "../store"

describe('store', () => {
    it('score test', () => {
        expect(store.score).toBe(0)
        store.increment()
        expect(store.score).toBe(1)
        store.increment()
        expect(store.score).toBe(2)
        store.increment()
        store.increment()
        store.increment()
        store.increment()
        store.increment()
        expect(store.score).toBe(7)
    })
})