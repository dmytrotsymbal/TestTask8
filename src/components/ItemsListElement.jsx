import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { completeItem, deleteItem } from "../redux/itemSlice";
import { useState } from "react";
import ChangePopup from "./ChangePopup";

const ItemsListElement = ({
  id,
  title,
  description,
  complited,
  showCompleted,
}) => {
  const dispatch = useDispatch();

  const [showChangePopup, setShowChangePopup] = useState(false);

  return (
    <li
      key={id}
      className={showCompleted ? "itemsListelement_done" : "itemsListelement"}
    >
      <div className="elementContent">
        <input
          type="checkbox"
          checked={complited}
          onChange={() => dispatch(completeItem(id))}
        />
        <div className="elementContentText">
          <h4>{title}</h4>
          <i>{description}</i>
        </div>
      </div>

      <div className="elementActions">
        <Button variant="primary" onClick={() => setShowChangePopup(true)}>
          Change
        </Button>

        <Button variant="danger" onClick={() => dispatch(deleteItem(id))}>
          Delete
        </Button>
      </div>
      <ChangePopup
        showChangePopup={showChangePopup}
        setShowChangePopup={setShowChangePopup}
        id={id}
        title={title}
        description={description}
      />
    </li>
  );
};
export default ItemsListElement;
