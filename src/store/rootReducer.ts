import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducers";

export interface BaseReduxData<T> {
  data: T,
  loading: boolean
    // ...
}

export const createBaseReduxData = <T>(data: T): BaseReduxData<T> => {

  return {
    data,
    loading: false
  }
}


const rootReducer = combineReducers({
  cart: cartReducer,
  cart1: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
