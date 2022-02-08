import {FETCH_RATINGS} from '../ActionTypes';

const initialState = {
  rating: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_RATINGS:
      return {...state, rating: payload};
    default:
      return state;
  }
};
