import { IProduct } from "../../types";
import { actionTypes } from "./types";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

// export const addToCart = (product: IProduct, count: number) => ({
//   type: actionTypes.CART_ADD_ITEM,
//   payload: { product, count }
// });
export const addToCart = actionCreator("CART_ADD_ITEM");
// export const removeFromCart = (productId: number) => ({
//   type: actionTypes.CART_REMOVE_ITEM,
//   payload: productId
// });

//////////////////////////////////////////////////////////////////////////////////

// export const addFSA = actionCreator<{ foo: object }>(actionTypes.CART_ADD_ITEM);
// console.log(addFSA.type);
// export const addCart = (product: IProduct, count: number) => {
//   addFSA({ foo: { product, count } });
// };
// console.log(addCart);

// export const removeFSA = actionCreator<{ foo: number }>(
//   actionTypes.CART_REMOVE_ITEM
// );
// export const removeCart = (productId: number) => {
//   removeFSA({ foo: productId });
// };

// export enum actionTypes {
//   CART_ADD_ITEM = "CART_ADD_ITEM",
//   CART_REMOVE_ITEM = "CART_REMOVE_ITEM"
// }
