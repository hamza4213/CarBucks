import CarBucksAxios from '../../utils/carBucksAxios';

export default class TAndCApi {
  fetchTAndC = () => {
    return CarBucksAxios({
      method: 'GET',
      url: `term-condition`,
    });
  };
}
