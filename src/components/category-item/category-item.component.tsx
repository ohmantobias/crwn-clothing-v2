import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryCategories } from "../directory/directory.component";

import "./category-item.styles.scss";

type CategoryProps = {
  category: DirectoryCategories;
};

const CategoryItem: FC<CategoryProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="category-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
