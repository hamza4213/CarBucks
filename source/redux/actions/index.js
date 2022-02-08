import {
  login,
  logout,
  register,
  verifyEmail,
  resetPassword,
  forgetPassword,
  getCurrentUser,
} from './auth';

import {getCategories, getSubCategoryById} from './category';

import {getServicesByFilter} from './services';

import {getRatings} from './ratings';

import {getProductsByFilter} from './products';
import {getPromotions} from './promotion';
import {getInvitationCode} from './wallet';

export {
  // Auth
  login,
  logout,
  register,
  verifyEmail,
  resetPassword,
  getCurrentUser,
  forgetPassword,
  // Categories
  getCategories,
  getSubCategoryById,
  // services
  getServicesByFilter,
  //ratings
  getRatings,
  //product
  getProductsByFilter,
  //promotions
  getPromotions,
  getInvitationCode,
};
