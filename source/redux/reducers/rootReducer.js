import {combineReducers} from 'redux';

import auth from './auth';
import category from './category';
import service from './service';
import products from './products';
import metaData from './metaData';
import common from './common';
import promotions from './promotions';
import chat from './chat';
import cart from './cart';
import jobManagement from './jobManagement';
import tAndC from './tAndC';
export default combineReducers({
  auth,
  chat,
  cart,
  tAndC,
  common,
  service,
  metaData,
  category,
  products,
  promotions,
  jobManagement,
});
