import {GET_PROMOTIONS} from '../ActionTypes';

const initState = {
  promotions: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_PROMOTIONS:
      return {...state, promotions: payload};

    default:
      return state;
  }
};
