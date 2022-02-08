import {LOADING_OFF, LOADING_ON} from '../ActionTypes';

const initState = {
  loading: false,
};

export default (state = initState, action) => {
  const {type} = action;

  switch (type) {
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
