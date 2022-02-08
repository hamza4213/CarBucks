import { PromotionApi } from '../apis';
import showToast from '../../common/components/toast/simpleToast';
// import {LOADING_OFF, LOADING_ON} from '../ActionTypes';
import * as constants from '../ActionTypes';
import { getPromotionsMethod } from '../apis/promotionApi';

const promotionApi = new PromotionApi();
export const getPromotions = () => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await getPromotionsMethod()

    dispatch({ type: constants.GET_PROMOTIONS, payload: res?.result });
  } catch (error) {
    // console.log('getPromotions', JSON.stringify(error));
  }
  dispatch({ type: constants.LOADING_OFF });
};
