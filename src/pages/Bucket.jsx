import { useSelector } from "react-redux";

export default function Bucket() {
  const goods = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <ol>
        {goods.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
          </li>
        ))}
      </ol>
    </>
  );
}
