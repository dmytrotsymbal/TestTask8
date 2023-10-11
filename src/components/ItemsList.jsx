import { useSelector } from "react-redux";
import ItemsListElement from "./ItemsListElement";
import "../styles/components/ItemsList.scss";
import { useState } from "react";
import FilterPanel from "./FilterPanel";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);

  const [showCompleted, setShowCompleted] = useState(false);
  return (
    <>
      <FilterPanel setShowCompleted={setShowCompleted} />

      {showCompleted ? <h2>Completed tasks</h2> : <h2>Not completed tasks</h2>}

      <ul className="itemsList">
        {showCompleted
          ? items
              .filter((item) => item.complited === true)
              .map((item) => (
                <ItemsListElement
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  complited={item.complited}
                />
              ))
          : items
              .filter((item) => item.complited === false)
              .map((item) => (
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
