import CarBucksAxios from '../../utils/carBucksAxios';

export default class WalletApi {
  fetchInviteCode = () => {
    return CarBucksAxios({
      method: 'POST',
      url: `invites`,
    });
  };
}
