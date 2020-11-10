import { changeState, feed, hydrate, giveLight, fedPlant } from "../index.js";

describe("Should change values of properties using state", () => {
  test("feed should increase soil value", () => {
    let plant = { soil: 0, light: 0, water: 0 };
    expect(feed(1)(plant)).toEqual({ light: 0, soil: 1, water: 0 });
  });

  test("water plant should increase water property of plant", () => {
    let plant = { soil: 0, light: 0, water: 0 };
    expect(hydrate(3)(plant)).toEqual({ light: 0, soil: 0, water: 3 });
  });

  test("givelight should increase light property of plant", () => {
    let plant = { soil: 0, light: 0, water: 0 };
    expect(giveLight(1)(plant)).toEqual({ light: 1, soil: 0, water: 0 });
  });

  test("to see if the stateControl function is returning an incrementing state", () => {
    let plant = { soil: 0, light: 0, water: 0 };
    fedPlant
  })
});
