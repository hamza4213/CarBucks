import {AuthApi} from '../apis';
import showToast from '../../common/components/toast/simpleToast';
import * as constants from '../ActionTypes';
const authApi = new AuthApi();

export const register = (data, cb) => async dispatch => {
  console.log('Data at Register APi is ', data);

  try {
    const res = await authApi.register(data);
    console.log('response', res.data);
    const status = res.data.status;
    console.log('Status is ', status);
    if (status === 'success') {
      console.log('Say hi');
      console.log('Email is ', res.data.result.email);
      const response = await authApi.sendEmailVerify(res.data.result.email);
      console.log('Response from send verify token', response.data);
      cb?.(response.data.status === 'success' ? true : false);
    }

    cb?.(null);
  } catch (error) {
    cb?.(null);
    console.log('Error', error);
    showToast(error.response?.data?.message || error.message);
  }
};

export const sendVerficationCode = (email, cb) => async dispatch => {
  try {
    const res = await authApi.sendEmailVerify(email);

    cb?.(res.data?.status === 'success' ? true : false);

    cb?.(false);
  } catch (error) {
    cb?.(false);
    showToast(error.response?.data?.message || error.message);
  }
};

export const login = (data, stopLoader) => async dispatch => {
  try {
    const res = await authApi.login(data);

    if (res?.data?.status === 'success') {
      dispatch({
        type: constants.LOGIN,
        payload: {user: res?.data?.data?.user, token: res?.data?.token},
      });
    } else {
      showToast(res?.data?.message || 'Something went wrong on server.');
    }
  } catch (error) {
    showToast(error.response?.data?.message || error.message);
  }
  stopLoader();
};

export const forgetPassword = (email, cb) => async dispatch => {
  try {
    const res = await authApi.forgetPassword({data: email});

    cb?.(res.data.status === 'success' ? true : false);
  } catch (error) {
    cb?.(false);
    showToast(error.response?.data?.message || error.message);
  }
};

export const updatePassword = (data, cb) => async dispatch => {
  try {
    const res = await authApi.updatePassword(data);
    cb?.(res.data.status === 'success' ? true : false);
    dispatch({type: constants.UPDATE_PASSWORD, payload: res?.data?.token});
  } catch (error) {
    cb?.(false);
    showToast(error.response?.data?.message || error.message);
  }
};

export const editProfile = (data, stopLoader) => async dispatch => {
  try {
    const res = await authApi.editProfile(data);

    if (res.data.status === 'success') {
      dispatch({type: constants.UPDATE_PROFILE, payload: res?.data?.result});
      stopLoader(true);
    }
  } catch (error) {
    showToast(error.response?.data?.message || error.message);
  }
};

export const verifyEmail = (email, token, cb) => async dispatch => {
  try {
    const res = await authApi.verifyEmail(email, token);

    cb?.(res?.data);
  } catch (error) {
    cb?.(null);
    showToast(error.response?.data?.message || error.message);
  }
};
export const logout = () => async dispatch => {
  try {
    dispatch({type: constants.LOGOUT});
  } catch (error) {
    showToast(error.response?.data?.message || error.message);
  }
};

export const resetPassword = (data, token, cb) => async dispatch => {
  try {
    const res = await authApi.resetPassword(data, token);
    cb?.(res?.data);
  } catch (error) {
    cb?.(null);
    showToast(error.response?.data?.message || error.message);
  }
};

export const getCurrentUser = cb => async dispatch => {
  try {
    const res = await authApi.currentUser();
    dispatch({type: constants.FETCH_USER, payload: res?.data?.result});
    cb(false);
  } catch (error) {
    cb(false);
  }
};
