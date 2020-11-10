const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();
const fedPlant = stateControl(blueFood);

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
