import * as constants from '../ActionTypes';
import showToast from '../../common/components/toast/simpleToast';

export const addToCart = params => (dispatch, getState) => {
  // let items = getState().cart.cart;
 

  // let cartItems = [];

  // items.map(item => {
  //   if (item._id === params._id) {
  //     let cartItem = {...item};
  //     if (cartItem.qty + params.qty <= cartItem.inStock) {
  //     } else {
  //     }
  //   } else {
  //     cartItems.push(item);
  //   }
  // });

  dispatch({type: constants.ADD_T0_CART, payload: {...params}});
};

export const increaseItem = id => dispatch => {
  dispatch({type: constants.INCREASE_ITEM, payload: id});
};

export const changeItemQty = (id, isAdded) => (dispatch, getState) => {
  let items = getState().cart.cart;

  let cartItems = [];
  items.map(item => {
    if (item.id === id) {
      let cartItem = {...item};

      if (isAdded) {
        if (cartItem.inStock > cartItem.qty) {
          cartItem['qty'] = cartItem.qty + 1;
        } else {
          showToast('This item does not have more quantity.');
        }
      } else {
        if (cartItem.qty === 0) {
          showToast('Quantity of an item cannot be less than 0.');
        } else {
          cartItem['qty'] = cartItem.qty - 1;
        }
      }

      cartItems.push(cartItem);
    } else {
      cartItems.push(item);
    }
  });

  dispatch({
    type: constants.CHANGEITEMQTY,
    payload: cartItems,
  });
};

export const decreaseItem = id => dispatch => {
  dispatch({type: constants.DECREASE_ITEM, payload: id});
};
export const deleteItemFromCart = id => dispatch => {
  dispatch({type: constants.DELETE_ITEM, payload: id});
};
