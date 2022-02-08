import * as constants from '../ActionTypes';

const initState = {
  productCategories: [],
  categories: [],
  subCategories: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case constants.GET_SUB_CATEGORIES_BY_ID:
      return {
        ...state,
        subCategories: payload,
      };

    case constants.GET_PRODUCT_CATEGORIES_BY_ID:
      return {
        ...state,
        productCategories: payload,
      };

    default:
      return state;
  }
};
