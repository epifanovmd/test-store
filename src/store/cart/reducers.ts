import { ICartItem } from "../../types";
import { actionTypes, TypeActionCart } from "./types";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import { addFSA, removeFSA, addCart, removeCart } from "./actions";

const initialState: ICartItem[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const cart = [...state];
      const { count, product } = action.payload;
      const foundProduct = cart.find((item) => item.id === product.id);

      if (foundProduct) {
        foundProduct.count = count;
      } else {
        cart.push({
          ...product,
          count
        });
      }
      return cart;
    }

    case actionTypes.CART_REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};
////////////////////////////////////////////////////////
export const cartReducer1 = reducerWithInitialState(initialState).case(
  addFSA,
  addCart
);
