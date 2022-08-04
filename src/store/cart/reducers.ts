import { ICartItem } from "../../types";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import {addToCart, getProducts, removeFromCart} from "./actions";
import {createBaseReduxData} from "../rootReducer";


const initialState = createBaseReduxData<ICartItem[]>([]);

export const cartReducer = reducerWithInitialState(initialState)
  .case(addToCart, (state, payload) => {
    const cart = [...state.data];
    const { count, product } = payload;
    const foundProduct = cart.find((item) => item.id === product.id);

    if (foundProduct) {
      foundProduct.count = count;
    } else {
      cart.push({
        ...product,
        count
      });
    }
    return {...state, data: cart};
  })
  .case(removeFromCart, (state, payload) => {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== payload)
    };
  })

.case(getProducts.started, (state, payload) => {

  return {
    data: state.data,
    loading: true,
  };
})
.case(getProducts.done, (state, payload) => {

  return state;
})
.case(getProducts.failed, (state, payload) => {

  return state;
})


// export const cartReducer = (state = initialState, action: TypeActionCart) => {
//   switch (action.type) {
//     case actionTypes.CART_ADD_ITEM: {
//       const cart = [...state];
//       const { count, product } = action.payload;
//       const foundProduct = cart.find((item) => item.id === product.id);
//
//       if (foundProduct) {
//         foundProduct.count = count;
//       } else {
//         cart.push({
//           ...product,
//           count
//         });
//       }
//       return cart;
//     }
//
//     case actionTypes.CART_REMOVE_ITEM: {
//       return state.filter((item) => item.id !== action.payload);
//     }
//     default:
//       return state;
//   }
// };
