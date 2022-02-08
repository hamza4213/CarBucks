import * as constants from '../ActionTypes';
import { JobManagementApi } from '../apis';
import { store } from '../store';

const jobManagementApi = new JobManagementApi();

export const fetchOrders = () => async dispatch => {
  console.log('store.getState().auth.user._id: ', store.getState().auth.user._id);
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await jobManagementApi.fetchProducts(store.getState().auth.user._id);
    console.log({ orderRES: res });
    dispatch({ type: constants.FETCH_ORDERS, payload: res?.data?.result || [] });

    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    console.log('error white fetching orders', error);
    dispatch({ type: constants.LOADING_OFF });
  }
};
