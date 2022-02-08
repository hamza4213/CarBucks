import * as constants from '../ActionTypes';

const initialState = {
  rooms: [],
  messages: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.GET_MY_ROOMS:
      return {
        ...state,
        rooms: payload,
      };

    case constants.GET_ROOM_MESSAGE:
      return {
        ...state,
        messages: payload,
      };

    case constants.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };

    case constants.EMPTY_ROOM:
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
};
