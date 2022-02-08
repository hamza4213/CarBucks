import CarBucksAxios from '../../utils/carBucksAxios';

export default class ProductApi {
  getProductsByFilter = params => {
    return CarBucksAxios({
      method: 'GET',
      url: 'products',
      params,
    });
  };

  getCarToBuyApi = params => {
    let url = `products?category=cars`;

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
      url = url + `&details.price[lt]=${params.highPrice + 1}`;
    }
    // if (params.lowMilage && params.lowMilage !== '') {
    //   url = url + `&details.milage[gt]=${params.lowMilage}`;
    // }
    // if (params.highMilage && params.highMilage !== '') {
    //   url = url + `&details.milage[lt]=${params.highMilage}`;
    // }
    // if (params.color && params.color !== '') {
    //   url = url + `&details.color=${params.color}`;
    // }

    return CarBucksAxios({
      method: 'GET',
      // url: `services?keyword=carrental&details.price[gt]=${params.lowPrice}&details.price[lt]=${params.highPrice}&limit=3&page=1`,
      url: url,
    });
  };

  // getCarToBuyApi = data => {
  //   let url = `products?category=cars`;

  //   if (data.carModalYear && data.carModalYear !== '') {
  //     url = url + `&details.year=${data.carModalYear}`;
  //
  //   }
  //   if (data.carCompanyName && data.carCompanyName !== '') {
  //     url = url + `&details.make=${data.carCompanyName}`;
  //     console.log('url ', url);
  //   }
  //   if (data.carModalName && data.carModalName !== '') {
  //     url = url + `&details.model=${data.carModalName}`;
  //     console.log('url ', url);
  //   }
  //   if (data.bodyType && data.bodyType !== '') {
  //     url = url + `&details.bodyType=${data.bodyType}`;
  //     console.log('url ', url);
  //   }
  //   if (data.transmissionType && data.transmissionType !== '') {
  //     url = url + `&details.transmission=${data.transmissionType}`;
  //     console.log('url ', url);
  //   }
  //   if (data.fuelType && data.fuelType !== '') {
  //     url = url + `&details.fuelType=${data.fuelType}`;
  //     console.log('url ', url);
  //   }
  //   if (data.lowPrice && data.lowPrice !== '') {
  //     url = url + `&details.price[gt]=${data.lowPrice}`;
  //     console.log('url ', url);
  //   }
  //   if (data.highPrice && data.highPrice !== '') {
  //     url = url + `&details.price[lt]=${data.highPrice}`;
  //     console.log('url ', url);
  //   }
  //   return CarBucksAxios({
  //     method: 'GET',
  //     // url: `products?category=cars&details.price[gt]=4000&details.price[lt]=80000&details.make=Honda`,
  //     // url: `products?category=cars&details.price[gt]=${data?.lowPrice}&details.price[lt]=${data?.highPrice}`,
  //     url: url,
  //   });
  // };

  fetchAccessories = slug => {
    console.log('product categories ', slug);
    return CarBucksAxios({
      method: 'GET',
      url: `products?subcategory=${slug}`,
    });
  };
}
