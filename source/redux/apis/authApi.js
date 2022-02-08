import CarBucksAxios from '../../utils/carBucksAxios';

export default class AuthApi {
  register = async data => {
    const res = await CarBucksAxios({
      method: 'POST',
      url: 'auth/customers/register',
      data,
    });
    return res;
  };

  sendEmailVerify = async email => {
    const res = await CarBucksAxios({
      method: 'PATCH',
      url: 'auth/users/send-email-verification-token',
      data: {email},
    });
    return res;
  };

  login = async data => {
    const res = await CarBucksAxios({
      method: 'POST',
      url: 'auth/customers/login',
      data,
    });
    return res;
  };

  forgetPassword = async data => {
    const res = await CarBucksAxios({
      method: 'PATCH',
      url: 'auth/customers/forgotPassword',
      data,
    });
    return res;
  };
  editProfile = data => {
    const res = CarBucksAxios({
      method: 'PATCH',
      url: 'auth/customers/updateMe',
      data,
    });
    return res;
  };
  updatePassword = async data => {
    const res = await CarBucksAxios({
      method: 'PATCH',
      url: 'auth/users/updateMyPassword',
      data,
    });
    return res;
  };

  verifyEmail = async (email, token) => {
    const res = await CarBucksAxios({
      method: 'PATCH',
      url: `auth/users/verify-email/${token}`,
      data: {email},
    });
    return res;
  };

  resetPassword = async (data, token) => {
    const res = await CarBucksAxios({
      method: 'PATCH',
      url: `auth/customers/resetPassword/${token}`,
      data,
    });
    return res;
  };

  currentUser = async () => {
    return await CarBucksAxios({
      method: 'GET',
      url: `auth/users/currentUser`,
    });
  };
}
