import * as constants from '../ActionTypes';

const initState = {
  cart: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case constants.ADD_T0_CART:
      let isFound = false;
      const filteredData = state?.cart?.map(item => {
        if (item.id === payload.id) {
          isFound = true;
          return {...item, qty: item.qty + payload.qty};
        } else {
          isFound = false;
          return {...item};
        }
      });
      if (!isFound) {
        filteredData.push(payload);
      }

      return {
        ...state,
        cart: [...filteredData],
      };

    case constants.DELETE_ITEM:
      const cartAfterDeletingitem = state?.cart?.filter(
        item => item._id !== payload,
      );
      return {
        ...state,
        cart: [...cartAfterDeletingitem],
      };

    case constants.CHANGEITEMQTY:
      return {
        ...state,
        cart: [...payload],
      };

    // case constants.INCREASE_ITEM:
    //   const itemToIncrease = state?.cart?.filter(item => item?._id === payload);
    //   const otherItems = state?.cart?.filter(item => item?._id !== payload);

    //   return {
    //     ...state,
    //     cart: [
    //       ...otherItems,
    //       {
    //         ...itemToIncrease[0],
    //         qty: itemToIncrease[0].qty + 1,
    //       },
    //     ],
    //   };

    // case constants.DECREASE_ITEM:
    //   const itemToDecrease = state?.cart?.filter(item => item?._id === payload);
    //   const otherItem = state?.cart?.filter(item => item?._id !== payload);

    //   return {
    //     ...state,
    //     cart: [
    //       ...otherItem,
    //       {
    //         ...itemToDecrease[0],
    //         qty: itemToDecrease[0].qty - 1,
    //       },
    //     ],
    //   };

    default:
      return state;
  }
};
