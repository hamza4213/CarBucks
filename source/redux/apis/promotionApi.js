import api from '../../api';
import CarBucksAxios from '../../utils/carBucksAxios';
import { paths } from '../../utils/endPoint';

export default class PromotionApi {
  getPromotions = async () => {
    return await CarBucksAxios({
      method: 'GET',
      url: 'promotions',
    });
  };
}

function getPromotionsMethod() {
  return api(paths.getPromotions)
}

export {
  getPromotionsMethod
}
