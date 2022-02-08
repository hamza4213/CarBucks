import api from "../../api"
import { paths } from "../../utils/endPoint"


function getSubCategoryBySlugMethod({ type, slug }) {
    return api(paths.baseURL + type + "s?" + "subcategory=" + slug)
}

export {
    getSubCategoryBySlugMethod,
}