import CarBucksAxios from '../../utils/carBucksAxios';

export default class ServicesApi {
  getServicesByFilter = params => {
    return CarBucksAxios({
      method: 'GET',
      url: 'services',
      params,
    });
  };

  fetchSubCategoryServicesByName = slug => {
    
    return CarBucksAxios({
      method: 'GET',
      url: `services?subcategory=${slug}`,
    });
  };

  serviceCheckout = data => {
    return CarBucksAxios({
      method: 'POST',
      url: `orders/placeOrder`,
      data,
    });
  };

  completeServiceApi = id => {
    return CarBucksAxios({
      method: 'PATCH',
      url: `orders/markCompleted/${id}`,
    });
  };

  cancelOrderApi = data => {
    return CarBucksAxios({
      method: 'POST',
      url: `orders/cancelRequests`,
      data,
    });
  };
}
