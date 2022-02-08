// const baseURL = 'https://api.autofixz.com/v1/';
const baseURL = 'http://192.168.18.98:4000/v1/';
const SOCKET_URL = 'https://api.autofixz.com/';


const paths = {
    baseURL,
    getCategories: baseURL + "categories/getCategoriesPublic",
    getSubCategory: baseURL + "categories/getSubCategoriesPublic/",
    getPromotions: baseURL + "promotions",
}


export {
    baseURL,
    SOCKET_URL,
    paths
}