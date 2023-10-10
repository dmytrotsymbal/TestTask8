import { useSelector } from "react-redux";
import ItemsListElement from "./ItemsListElement";
import "../styles/components/ItemsList.scss";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  return (
    <>
      <h2>Items list:</h2>

      <ul className="itemsList">
        {items.map((item) => (
          <ItemsListElement
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            complited={item.complited}
          />
        ))}
      </ul>
    </>
  );
};
export default ItemsList;
