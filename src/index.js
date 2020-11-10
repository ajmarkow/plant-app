export const storeState = (initialState) => {
  let currentState = {initialState};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateControl = storeState();
export const stateControl2 = storeState();


export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, // {soil: 0, water: 0, light: 0, }
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");
export const blueFood = changeState("soil")(5);
export const greenFood = changeState("soil")(10);
export const hydrateMore = changeState("water")(5);

// export const fedPlant = stateControl(blueFood);
// export const fedPlantAgain = stateControl(greenFood);

// export const fedPlant2 = stateControl2(blueFood);
// export const fedPlantAgain2 = stateControl2(greenFood);

// { soil: 5 }

$(document).ready(function() {
  
    $('#feed').click(function() {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });
  
    $('#show-state').click(function() {
      const currentState = stateControl();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
    });
  });