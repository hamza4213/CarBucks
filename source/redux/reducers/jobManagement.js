import * as constants from '../ActionTypes';
const initState = {
  orders: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.FETCH_ORDERS:
      // console.log('job management payload ', payload);
      return {
        ...state,
        orders: [...payload],
      };

    default:
      return state;
  }
};
