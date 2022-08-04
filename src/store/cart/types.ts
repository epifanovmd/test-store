import { IProduct } from "../../types";

export interface ICartAddItemPayload {
  product: IProduct;
  count: number;
}
