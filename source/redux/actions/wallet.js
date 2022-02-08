import {WalletApi} from '../apis';
import * as constants from '../ActionTypes';

const walletApi = new WalletApi();

export const getInvitationCode = () => async dispatch => {
  try {
    dispatch({type: constants.LOADING_ON});
    const res = await walletApi.fetchInviteCode();
    console.log(res?.data?.result?.code);
    dispatch({type: constants.LOADING_OFF});
  } catch (error) {
    console.log('error:', error);
    dispatch({type: constants.LOADING_OFF});
  }
};
