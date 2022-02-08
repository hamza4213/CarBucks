// import {FETCH_SERVICES} from '../ActionTypes';
import * as constants from '../ActionTypes';

const initState = {
  services: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case constants.FETCH_SERVICES:
      return {...state, services: payload.result};

    case constants.RESET_SERVICES:
      return {
        ...state,
        services: [],
      };

    default:
      return state;
  }
};
