import {
  FETCH_FILTEREDCAR,
  FETCH_MAKES,
  FETCH_MODALS,
  FETCH_VERSIONS,
  LOADING_OFF,
  LOADING_ON,
  RESET_CARS,
} from '../ActionTypes';
import MetaDataApi from '../apis/metaData';
import showToast from '../../common/components/toast/simpleToast';

const metaDataApi = new MetaDataApi();

export const fetchMakes = () => async dispatch => {
  try {
    dispatch({type: LOADING_ON});
    const res = await metaDataApi.fetchMakes();
    if (res?.data?.status === 'success') {
      dispatch({
        type: FETCH_MAKES,
        payload: res?.data?.data?.result || [],
      });
    } else {
      showToast(res?.data?.message || 'Something went wrong on server.');
    }

    dispatch({type: LOADING_OFF});
  } catch (error) {
    dispatch({type: LOADING_OFF});
    showToast(error.response?.data?.message || error.message);
  }
};

export const getModalsByFilter = params => async dispatch => {
  try {
    dispatch({type: LOADING_ON});

    console.log(params);
    const res = await metaDataApi.getModals(params);

    if (res?.data?.status === 'success') {
      dispatch({
        type: FETCH_MODALS,
        payload: res?.data?.data?.result || [],
      });
      console.log({result: res?.data?.data?.result});
    } else {
      showToast(res?.data?.message || 'Something went wrong on server.');
    }

    dispatch({type: LOADING_OFF});
  } catch (error) {
    dispatch({type: LOADING_OFF});
    showToast(error.response?.data?.message || error.message);
  }
};

export const getversionsByModalId = params => async dispatch => {
  try {
    dispatch({type: LOADING_ON});

    console.log(params);
    const res = await metaDataApi.getversionsByModalId(params);

    if (res?.data?.status === 'success') {
      dispatch({
        type: FETCH_VERSIONS,
        payload: res?.data?.data?.result || [],
      });
    } else {
      showToast(res?.data?.message || 'Something went wrong on server.');
    }

    dispatch({type: LOADING_OFF});
  } catch (error) {
    dispatch({type: LOADING_OFF});
    // console.log(
    //   'error in version',
    //   error.response?.data?.message || error.message,
    // );
    showToast(error.response?.data?.message || error.message);
  }
};

export const getCarsbyFilters = params => async dispatch => {
  try {
    dispatch({type: LOADING_ON});
    const res = await metaDataApi.fetchCarsbyFilters(params);
    console.log('get cars by filters response', res);
    if (res?.data?.status === 'success') {
      dispatch({
        type: FETCH_FILTEREDCAR,
        payload: res?.data?.result || [],
      });
    } else {
      console.log('something is wrong while fetching cars by filter');
    }
    dispatch({type: LOADING_OFF});
  } catch (error) {
    dispatch({type: LOADING_OFF});
    console.log('error white getCarsbyFilters', error);
  }
};

export const resetCars = () => {
  return {
    type: RESET_CARS,
  };
};
