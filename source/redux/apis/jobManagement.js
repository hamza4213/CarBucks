import CarBucksAxios from '../../utils/carBucksAxios';

export default class JobManagementApi {
  fetchProducts = (id) => {
    return CarBucksAxios({
      method: 'GET',
      url: 'orders/' + id,
    });
  };
}
