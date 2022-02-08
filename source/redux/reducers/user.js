import {LOGIN, LOGOUT} from '../ActionTypes';

const initState = {
  //   isAuth: false,
  //   user: null,
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        user: payload,
      };

    default:
      return state;
  }
};
