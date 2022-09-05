import { useSelector, useDispatch } from "react-redux";
import { removeProductAction } from "../redux/actions";

export default function Bucket() {
  const goods = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  function handleClickRemove({ target: { id } }) {
    dispatch(removeProductAction(id));
  }

  return (
    <>
      <ol>
        {goods.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
            <button id={item.id} onClick={handleClickRemove}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
