import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { completeItem, deleteItem } from "../redux/itemSlice";

const ItemsListElement = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id} className="element">
      <div className="elementContent">
        <input
          type="checkbox"
          checked={item.complited}
          onChange={() => dispatch(completeItem(item.id))}
        />
        <h4>{item.title}</h4>
        <i>{item.description}</i>
      </div>

      <div className="elementActions">
        <Button variant="primary">Change</Button>

        <Button variant="danger" onClick={() => dispatch(deleteItem(item.id))}>
          Delete
        </Button>
      </div>
    </li>
  );
};
export default ItemsListElement;
