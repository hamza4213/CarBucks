import CarBucksAxios from '../../utils/carBucksAxios';
import api from '../../api/index'
import { paths } from '../../utils/endPoint';

export default class CategoryApi {
  fetchCategories = () => {
    return CarBucksAxios({
      method: 'GET',
      url: 'categories/getCategories',
    });
  };
  createCategories = async data => {
    return await CarBucksAxios({
      method: 'POST',
      url: 'categories',
      data,
    });
  };
  getSubCategoryById = id => {
    return CarBucksAxios({
      method: 'GET',
      url: `categories/getSubCategories/${id}`,
    });
  };
  updateCategoryById = async (id, data) => {
    return await CarBucksAxios({
      method: 'PATCH',
      url: `categories/${id}`,
      data,
    });
  };
  deleteCategoryById = async id => {
    return await CarBucksAxios({
      method: 'PATCH',
      url: `categories/${id}`,
    });
  };
}

function getCategoriesMethod() {
  return api(paths.getCategories)
}
function getSubCategoryByIdMethod(id) {
  return api(paths.getSubCategory)
}

export {
  getCategoriesMethod,
  getSubCategoryByIdMethod
}