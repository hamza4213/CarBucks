import {RatingsApi} from '../apis';
import {LOADING_OFF, LOADING_ON} from '../ActionTypes';

const ratingsApi = new RatingsApi();
export const getRatings = () => async dispatch => {
  try {
    dispatch({type: LOADING_ON});
    const res = await ratingsApi.fetchRatings();
    if (res?.data?.status === 'success') {
      dispatch({paylaod: res?.data});
    }
    dispatch({type: LOADING_OFF});
  } catch (error) {
    dispatch({type: LOADING_OFF});
    console.log('error while fetching ratings', error);
  }
};
