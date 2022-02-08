import { ServicesApi } from '../apis';
import showToast from '../../common/components/toast/simpleToast';
import * as constants from '../ActionTypes';
const servicesApi = new ServicesApi();
import axios from 'axios';
import { baseURL } from '../../utils/endPoint';
import { useNavigation } from '@react-navigation/native';
import { getSubCategoryBySlugMethod } from '../apis/newMethods';
const navigation = useNavigation;

export const getSubCategoryServicesByName = payload => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    console.log('slug in action', payload.slug);
    const res = await getSubCategoryBySlugMethod(payload);

    const { status } = res;
    if (status === 'success') {
      dispatch({ type: constants.FETCH_SERVICES, payload: res || [] });
    }

  } catch (error) {
    console.log('error: ', error);
  }
  dispatch({ type: constants.LOADING_OFF });
};

export const getServicesByFilter = params => async dispatch => {
  try {
    console.log(params);
    dispatch({ type: constants.LOADING_ON });
    const res = await servicesApi.getServicesByFilter(params);

    const { status } = res.data;
    if (status === 'success') {
      dispatch({ type: constants.FETCH_SERVICES, payload: res.data.result });
    }

    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    console.log('getServiceByFilter', error);
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};

export const resetServices = () => {
  return {
    type: constants.RESET_SERVICES,
  };
};

export const serviceCheckout = data => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.LOADING_ON });
    console.log('hello to service check out ', data);
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
        console.log({ response: response.data.status });
        showToast(response?.data?.status);

        dispatch({ type: constants.FETCH_ORDERS, payload: response.data });
        dispatch({ type: constants.LOADING_OFF });
      })
      .catch(e => {
        console.log('error white placing service order', e);
        dispatch({ type: constants.LOADING_OFF });
      });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log(error);
  }
};

export const rentCarCheckout = data => async (dispatch, getState) => {
  try {
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
        console.log({ response: response.data.status });
        showToast(response?.data?.status);

        dispatch({ type: constants.FETCH_ORDERS, payload: response.data });
        dispatch({ type: constants.LOADING_OFF });
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

export const cancelOrder = data => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const { token } = getState().auth;

    let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    let reqOptions = {
      url: 'https://api.autofixz.com/v1/orders/cancelRequests',
      method: 'POST',
      headers: headersList,
      data,
    };

    axios
      .request(reqOptions)
      .then(function (response) {
        console.log('response:', response);
        // console.log({response: response.data.status});
        showToast(response?.data?.status);
      })
      .catch(e => {
        console.log(e?.status);
        console.log(e?.message);
        console.log(e?.data);
        showToast(e?.message);
        dispatch({ type: constants.LOADING_OFF });
      });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log('error while sending cancel order request:', error);
  }

  // try {
  //   console.log('data', data);
  //   dispatch({type: constants.LOADING_ON});
  //   const res = await servicesApi.cancelOrderApi(data);

  //   console.log('cancel order', res);
  //   showToast(res.message);
  // } catch (error) {
  //   dispatch({type: constants.LOADING_OFF});
  //   console.log(error?.status);
  //   console.log('error message', error);
  //   // showToast(error.response?.data?.message);
  //   // console.log('Error while canceling order : ', error);
  // }
};

export const completeService = id => async dispatch => {
  try {
    console.log({ id });
    dispatch({ type: constants.LOADING_ON });
    const res = await servicesApi.completeServiceApi(id);
    console.log('complete service', res);
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    console.log('error while complete service', error);
  }
};
