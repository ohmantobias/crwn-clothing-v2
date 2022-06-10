import { FC } from "react";

import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";

import "./product-card.styles.scss";

import { CartItem } from "../../store/cart/cart.types";
import Button from "../button/button.component";

type ProductCardProps = {
  product: CartItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
