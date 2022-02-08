import { CategoryApi } from '../apis';
import showToast from '../../common/components/toast/simpleToast';
import * as constants from '../ActionTypes';
const categoryApi = new CategoryApi();
import { getCategoriesMethod, getSubCategoryByIdMethod } from '../apis/categoryApi'

export const sequence = {
  0: '6192a0afb915fe44dca1a4d7',
  1: '6192a130b915fe44dca1a4db',
  2: '6192a213b915fe44dca1a4e7',
  3: '6192a1bdb915fe44dca1a4e3',
};

export const getCategories = () => async (dispatch, getState) => {
  try {
    const { categories } = getState().category;

    if (!categories.length) {
      dispatch({ type: constants.LOADING_ON });
    }

    const res = await getCategoriesMethod();
    dispatch({
      type: constants.GET_CATEGORIES,
      payload: !!res?.result.length ? res.result : []
    });
    dispatch({ type: constants.LOADING_OFF });
    return res?.result

  } catch (error) {
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.message || error.message);
    return false
  }
};

export const createCategories = (data, cb) => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await categoryApi.createCategories(data);

    const { status } = res.data;

    if (status === 'success') {
      dispatch({
        type: constants.CREATE_CATEGORY,
        payload: [],
      });
    }
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};

export const getSubCategoryById = (id, type) => async (dispatch, getState) => {
  console.log('id, type: ', id, type);
  try {
    const { subCategories, productCategories } = getState().category;

    if (type === 'product' && productCategories.length) {
    } else if (subCategories.length) {
    } else {
      dispatch({ type: constants.LOADING_ON });
    }

    const res = await getSubCategoryByIdMethod(id);

    const { status, result } = res;

    if (status === 'success') {
      dispatch({
        type:
          type === 'product'
            ? constants.GET_PRODUCT_CATEGORIES_BY_ID
            : constants.GET_SUB_CATEGORIES_BY_ID,
        payload: result,
      });
    }
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    dispatch({
      type:
        type === 'product'
          ? constants.GET_PRODUCT_CATEGORIES_BY_ID
          : constants.GET_SUB_CATEGORIES_BY_ID,
      payload: [],
    });
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};

export const updateCategoryById = (id, data, cb) => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await categoryApi.updateCategoryById(id, data);

    const { status } = res.data;

    if (status === 'success') {
      dispatch({
        type: constants.UPDATE_CATEGORY_BY_ID,
        payload: [],
      });
    }
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};

export const deleteCategoryById = (id, cb) => async dispatch => {
  try {
    dispatch({ type: constants.LOADING_ON });
    const res = await categoryApi.deleteCategoryById(id);

    const { status } = res.data;

    if (status === 'success') {
      dispatch({
        type: constants.DELETE_CATEGORY_BY_ID,
        payload: [],
      });
    }
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
  } catch (error) {
    cb?.();
    dispatch({ type: constants.LOADING_OFF });
    showToast(error.response?.data?.message || error.message);
  }
};
