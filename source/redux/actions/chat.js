import {ChatApi} from '../apis';
import * as constants from '../ActionTypes';
const chatApi = new ChatApi();

export const getMyRooms = () => async dispatch => {
  try {
    dispatch({type: constants.LOADING_ON});

    const res = await chatApi.fetchMyRooms();
    const {
      status,
      data: {result},
    } = res;

    if (status === 200) {
      dispatch({
        payload: result || [],
        type: constants.GET_MY_ROOMS,
      });
    }

    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    console.log({error});
    dispatch({type: constants.LOADING_OFF});
  }
};

export const getRoomMessages = roomID => async (dispatch, getState) => {
  try {
    dispatch({type: constants.LOADING_ON});

    const res = await chatApi.fetchRoomMessages(roomID);
    const {
      data: {
        result: {chat},
      },
      status,
    } = res;
    let messages = [];
    let uid = getState()?.auth?.user?._id;

    console.log({res});

    chat.map(c => {
      let msg = {
        user: {
          avatar: c?.from?.image,
          name: c?.from?.firstName + ' ' + c?.from?.lastName,
          ...c?.from,
        },
        _id: c?._id,
        text: c?.message,
        createdAt: c?.createdAt,
        sent: c?.status === 'unread' ? true : false,
      };

      messages.push(msg);
    });

    if (status === 200) {
      dispatch({
        payload: messages || [],
        type: constants.GET_ROOM_MESSAGE,
      });
    }

    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    console.log({roomMessages: error});
    dispatch({type: constants.LOADING_OFF});
  }
};

export const getRoomId = userID => async dispatch => {
  try {
    dispatch({type: constants.LOADING_ON});

    const res = await chatApi.fetchRoomId(userID);
    const {status, result} = res;

    if (status === 'success') {
      dispatch({
        payload: result || [],
        type: constants.GET_ROOM_MESSAGE,
      });
    }

    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    console.log({roomMessages: error});
    dispatch({type: constants.LOADING_OFF});
  }
};

export const sendMessage = message => dispatch => {
  console.log('send message action', message);
  dispatch({
    payload: message,
    type: constants.SEND_MESSAGE,
  });
};

export const emptyRoom = () => dispatch => {
  dispatch({
    payload: [],
    type: constants.EMPTY_ROOM,
  });
};
