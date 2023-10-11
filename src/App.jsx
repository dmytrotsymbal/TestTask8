import { Button, Container } from "react-bootstrap";
import "./styles/components/App.scss";
import ItemsList from "./components/ItemsList";
import InputForm from "./components/InputForm";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
      <Container className="container">
        <Button
          className="addItemBtn"
          onClick={() => setShowForm(!showForm)}
          variant="primary"
        >
          Add item
        </Button>

        {showForm && <InputForm setShowForm={setShowForm} />}

        <ItemsList />
      </Container>
    </div>
  );
}

export default App;
