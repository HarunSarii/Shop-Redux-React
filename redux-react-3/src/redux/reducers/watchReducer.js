import { SELL_WATCH } from "../types/types";

const initialState = {
  numberOfWatches: 250,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_WATCH:
      return {
        ...state,
        numberOfWatches: state.numberOfWatches - action.payload,
      };

    default:
      return state;
  }
};

export default watchReducer;
