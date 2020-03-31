import defaultState from "./state";

const menuActionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "nextStep":
      return Object.assign({}, state, { activeStep: action });

    default:
      return state;
  }
};

export default menuActionReducer;
