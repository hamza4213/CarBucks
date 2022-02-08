import * as constants from '../ActionTypes';
import {TAndCApi} from '../apis';

const tAndCApi = new TAndCApi();
export const getTermsAndConditions = () => async dispatch => {
  try {
    dispatch({type: constants.LOADING_ON});
    const res = await tAndCApi.fetchTAndC();
    console.log('terms and condition:', res.data.result);
    dispatch({type: constants.FETCH_TC, payload: res?.data?.result});
    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    dispatch({type: constants.LOADING_OFF});
    console.log('error white fetching t and c .', error);
  }
};
