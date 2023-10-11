import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { changeItem } from "../redux/itemSlice";

const ChangePopup = ({
  showChangePopup,
  setShowChangePopup,
  id,
  title,
  description,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const dispatch = useDispatch();

  const handleSaveChanges = () => {
    if (!newTitle || !newDescription) {
      alert("Please enter new title and new description");
      return;
    }
    dispatch(
      changeItem({ id: id, title: newTitle, description: newDescription })
    );
    setShowChangePopup(false);
  };

  return (
    <>
      <Modal show={showChangePopup} onHide={() => setShowChangePopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formNewTitle">
            <Form.Control
              type="text"
              placeholder="Change title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formNewDescription">
            <Form.Control
              type="text"
              placeholder="Change description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowChangePopup(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChangePopup;
