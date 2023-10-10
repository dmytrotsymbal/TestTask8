import { useSelector } from "react-redux";
import ItemsListElement from "./ItemsListElement";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  return (
    <ul className="itemsList">
      {items.map((item) => (
        <ItemsListElement key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default ItemsList;
