import { changeState, blueFood, greenFood, feed, hydrate, giveLight, fedPlant, fedPlantAgain, storeState, stateControl, stateControl2, hydrateMore} from "../src/index.js";

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

  test("stateControl is returning the object params", () => {

    const newfedPlant = stateControl(greenFood);
    expect(newfedPlant.soil).toEqual(10);
  })

  test("stateControl is returning the object params", () => {
    const plant2Fed = stateControl2(greenFood);
    const newerfedPlant = stateControl(greenFood);
    expect(newerfedPlant.soil).toEqual(20);
    expect(plant2Fed.soil).toEqual(10);
  })

  test("stateControl is returning the object params", () => {

    const plant2FedandWatered = stateControl2(hydrateMore);
    expect(plant2FedandWatered.soil).toEqual(10);
    expect(plant2FedandWatered.water).toEqual(5);
  })
});