const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();


export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, // {soil:light: 0, }
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");
export const blueFood = changeState("soil")(5);
export const greenFood = changeState("soil")(10);

const fedPlant = stateControl(blueFood);
// { soil: 5 }

