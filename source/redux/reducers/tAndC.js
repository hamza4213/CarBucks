// import {FETCH_RATINGS} from '../ActionTypes';

import * as constants from '../ActionTypes';

const initialState = {
  tAndC: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.FETCH_TC:
      return {...state, tAndC: [payload]};
    default:
      return state;
  }
};
