import CarBucksAxios from '../../utils/carBucksAxios';

export default class RatingsApi {
  fetchRatings = () => {
    return CarBucksAxios({
      method: 'GET',
      url: 'ratings',
    });
  };
}
