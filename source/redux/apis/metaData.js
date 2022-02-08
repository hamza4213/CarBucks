import CarBucksAxios from '../../utils/carBucksAxios';

export default class MetaDataApi {
  fetchMakes = async () => {
    return await CarBucksAxios({
      method: 'GET',
      url: 'cars/makes',
    });
  };

  getModals = async params => {
    return await CarBucksAxios({
      method: 'GET',
      url: 'cars/models',
      params,
    });
  };

  getversionsByModalId = async params => {
    return await CarBucksAxios({
      method: 'GET',
      url: 'cars/versions',
      params,
    });
  };

  fetchCarsbyFilters = params => {
    let url = `services?category=carrental`;
    console.log('params in api', params);

    if (params.carCompanyName && params.carCompanyName !== '') {
      url = url + `&details.make=${params.carCompanyName}`;
    }
    if (params.carModalYear && params.carModalYear !== '') {
      url = url + `&details.year=${params.carModalYear}`;
    }
    if (params.carModalName && params.carModalName !== '') {
      url = url + `&details.model=${params.carModalName}`;
    }
    if (params.bodyType && params.bodyType !== '') {
      url = url + `&details.bodyType=${params.bodyType}`;
    }
    if (params.transmissionType && params.transmissionType !== '') {
      url = url + `&details.transmission=${params.transmissionType}`;
    }
    if (params.fuelType && params.fuelType !== '') {
      url = url + `&details.fuelType=${params.fuelType}`;
    }
    if (params.lowPrice && params.lowPrice !== '') {
      url = url + `&details.price[gt]=${params.lowPrice}`;
    }
    if (params.highPrice && params.highPrice !== '') {
      url = url + `&details.price[lt]=${params.highPrice}`;
    }
    // if (params.lowMilage && params.lowMilage !== '') {
    //   url = url + `&details.milage[gt]=${params.lowMilage}`;
    // }
    // if (params.highMilage && params.highMilage !== '') {
    //   url = url + `&details.milage[lt]=${params.highMilage}`;
    // }
    if (params.color && params.color !== '') {
      url = url + `&details.color=${params.color}`;
    }

    console.log('url', url);
    return CarBucksAxios({
      method: 'GET',
      // url: `services?keyword=carrental&details.price[gt]=${params.lowPrice}&details.price[lt]=${params.highPrice}&limit=3&page=1`,
      url: url,
    });
  };
}
