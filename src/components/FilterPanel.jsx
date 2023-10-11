import { Button } from "react-bootstrap";
import "../styles/components/FilterPanel.scss";

const FilterPanel = ({ setShowCompleted }) => {
  return (
    <div className="filterPanel">
      <Button onClick={() => setShowCompleted(false)} variant="primary">
        All tasks
      </Button>

      <Button onClick={() => setShowCompleted(true)} variant="primary">
        Completed tasks
      </Button>
    </div>
  );
};
export default FilterPanel;
