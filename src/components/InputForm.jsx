import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/itemSlice";
import { useState } from "react";

const InputForm = ({ setShowForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="background">
      <Form className="Form">
        <Button onClick={() => setShowForm(false)} variant="warning">
          close
        </Button>
        <Form.Group controlId="formTitle">
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => dispatch(addItem({ title, description }))}
          variant="primary"
        >
          Add item
        </Button>
      </Form>
    </div>
  );
};
export default InputForm;
