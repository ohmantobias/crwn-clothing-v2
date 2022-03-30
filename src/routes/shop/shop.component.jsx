import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action.js";

import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocument("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
