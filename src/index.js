const storeState = (initialState) => {
  let currentState = {initialState};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();
const stateControl2 = storeState();


const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, // {soil: 0, water: 0, light: 0, }
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const hydrateMore = changeState("water")(5);

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

    $('#water').click(function() {
      const fedState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });
  });