import * as constants from '../ActionTypes';
import {NotificationApi} from '../apis';
import showToast from '../../common/components/toast/simpleToast';

const notificationApi = new NotificationApi();

export const fetchNotifications = () => async dispatch => {
  try {
    dispatch({type: constants.LOADING_ON});
    const res = await notificationApi.fetchNotifications();
    if (res.data.status === 'success') {
      // dispatch({type: constants.FETCH_SERVICES, payload: res.data.result});
      console.log('fetchNotification response', res);
    }

    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    dispatch({type: constants.LOADING_OFF});
    console.log('error while fetching notifications', error);
  }
};
