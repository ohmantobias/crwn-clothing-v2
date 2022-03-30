import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

// import { CATEGORIES_ACTION_TYPES } from "./category.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

// export const setCategoriesMap = (categoriesMap) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
