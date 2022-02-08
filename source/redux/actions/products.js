import { ProductApi } from '../apis';
import showToast from '../../common/components/toast/simpleToast';
import * as constants from '../ActionTypes';
import { baseURL } from '../../utils/endPoint';
import axios from 'axios';
import { getSubCategoryBySlugMethod } from '../apis/newMethods';

const productApi = new ProductApi();

export const getCarToBuy = data => async dispatch => {
  try {
    // console.log('data in action', data);
    dispatch({ type: constants.LOADING_ON });
    const res = await productApi.getCarToBuyApi(data);
    console.log('getCarToBuy Response', res);
    const { status, result } = res?.data;

    if (status === 'success') {
      dispatch({ type: constants.FETCH_CARS, payload: result || [] });
    } else {
      showToast(`Cars ${res?.message}`);
    }
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log('getCarToBuy Error :', error);
  }
};

export const getProductsByFilter = (params, cb) => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await productApi.getProductsByFilter(params);

    const { status } = res.data;
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};

export const getAccessories = payload => async dispatch => {
  try {
    // console.log('slug', slug);
    dispatch({ type: constants.LOADING_ON });
    const res = await getSubCategoryBySlugMethod(payload);
    const { status, result } = res;
    if (status === 'success') {
      dispatch({ type: constants.FETCH_PRODUCTS, payload: result || [] });
    } else {
      showToast(`Accessories ${res.message}`);
    }

    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log('getSubCategoryServicesByName', error);
  }
};

export const resetAccessories = () => {
  return {
    type: constants.RESET_ACCESSORIES,
  };
};
export const resetBuyCars = () => {
  return {
    type: constants.RESET_BUYCARS,
  };
};

export const productServiceRentChakout = data => async (dispatch, getState) => {
  try {
    console.log('data in dispatch', data);
    dispatch({ type: constants.LOADING_ON });

    const { token } = getState().auth;

    let headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    let reqOptions = {
      url: `${baseURL}orders/placeOrder`,
      method: 'POST',
      headers: headersList,
      data,
    };

    axios
      .request(reqOptions)
      .then(function (response) {
        console.log('response.status', response.data.status);
        showToast(response?.data?.status);

        // dispatch({type: constants.FETCH_ORDERS, payload: response.data});
        dispatch({ type: constants.LOADING_OFF });
        // return response.data;
      })
      .catch(e => {
        console.log({ e });
        dispatch({ type: constants.LOADING_OFF });
      });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log(error);
  }
};
