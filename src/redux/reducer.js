import { addProduct } from "./types";

export default function cartReducer(prevState = [], { type, payload }) {
  switch (type) {
    case addProduct:
      return [...prevState, payload];
    default:
      return prevState;
  }
}
