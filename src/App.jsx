import { Button, Container } from "react-bootstrap";
import ItemsList from "./components/ItemsList";
import InputForm from "./components/InputForm";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
      <Container
        style={{
          height: "100vh",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Button onClick={() => setShowForm(!showForm)} variant="primary">
          Add item
        </Button>

        {showForm && <InputForm setShowForm={setShowForm} />}

        <ItemsList />
      </Container>
    </div>
  );
}

export default App;
