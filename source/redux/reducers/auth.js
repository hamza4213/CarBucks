import * as constants from '../ActionTypes';

const initState = {
  isAuth: false,
  user: null,
  token: null,
  currentUser: null,
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.LOGIN:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
    case constants.UPDATE_PROFILE:
      return {
        ...state,

        user: {
          ...state.user,

          ...payload,
        },
      };
    case constants.FETCH_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case constants.UPDATE_PASSWORD:
      return {
        ...state,
        token: payload,
      };
    case constants.LOGOUT:
      return initState;

    default:
      return state;
  }
};
