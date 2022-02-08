// import {FETCH_PRODUCTS} from '../ActionTypes';
import * as constants from '../ActionTypes';

const initState = {
  products: [],
  cars: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.FETCH_PRODUCTS:
      return {...state, products: payload};

    case constants.FETCH_CARS:
      return {
        ...state,
        cars: payload,
      };

    case constants.RESET_ACCESSORIES:
      return {
        ...state,
        products: [],
      };

    case constants.RESET_BUYCARS:
      return {
        ...state,
        cars: [],
      };

    default:
      return state;
  }
};
