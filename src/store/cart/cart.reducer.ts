import { CartItem } from "./cart.types";
import { setCartItems, setisCartOpen } from "./cart.action";
import { AnyAction } from "redux";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setisCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
