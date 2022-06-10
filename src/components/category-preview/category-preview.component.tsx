import { FC } from "react";

import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import { CategoryItem } from "../../store/categories/category.types";

import "./category-preview.styles.scss";

export type CategoryPreviewProps = {
  products: CategoryItem[];
  title: string;
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
