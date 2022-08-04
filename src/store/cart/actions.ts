import actionCreatorFactory from "typescript-fsa";
import {ICartAddItemPayload} from "./types";

const actionCreator = actionCreatorFactory("CART");

export const addToCart = actionCreator<ICartAddItemPayload>("ADD_ITEM");
export const removeFromCart = actionCreator<number>("REMOVE_ITEM");

export const getProducts = actionCreator.async<number, any[], Error>("GET_PRODUCTS");

// const thunk = createthunk(async (dispatch) => {
//   dispatch(getProducts.started(123));
//  try   {
//    const res = await getProductsService();
//
//    dispatch(getProducts.done(res))
//  }
//   catch (e: any) {
//     dispatch(getProducts.failed(e))
//   }
// })

//////

// export const removeFromCart = (productId: number) => ({
//   type: actionTypes.CART_REMOVE_ITEM,
//   payload: productId
// });

// export const addToCart = (product: IProduct, count: number) => ({
//   type: actionTypes.CART_ADD_ITEM,
//   payload: { product, count }
// });
