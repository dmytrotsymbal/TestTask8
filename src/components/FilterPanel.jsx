import { Button } from "react-bootstrap";
import "../styles/components/FilterPanel.scss";

const FilterPanel = ({ setShowCompleted }) => {
  return (
    <div className="filterPanel">
      <Button onClick={() => setShowCompleted(false)} variant="secondary">
        Not completed tasks
      </Button>

      <Button onClick={() => setShowCompleted(true)} variant="secondary">
        Completed tasks
      </Button>
    </div>
  );
};
export default FilterPanel;
