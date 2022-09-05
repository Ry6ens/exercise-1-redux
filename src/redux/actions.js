import { addProduct } from "./types";

export const addProductAction = (product) => {
  return { type: addProduct, payload: product };
};
