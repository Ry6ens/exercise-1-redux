import { addProduct, removeProduct } from "./types";

export default function cartReducer(prevState = [], { type, payload }) {
  switch (type) {
    case addProduct:
      return [...prevState, payload];
    case removeProduct:
      return prevState.filter((el) => el.id !== payload);
    default:
      return prevState;
  }
}
