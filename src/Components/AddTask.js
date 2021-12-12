import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import ModalAlert from "./UI/ModalAlert";

const AddTask = (props) => {
  const [todoItemName, setTodoItemName] = useState("");
  const [todoItemDescription, setTodoItemDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const taskInputHandler = (event) => {
    setTodoItemName(event.target.value);
  };

  const descInputHandler = (event) => {
    setTodoItemDescription(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (todoItemName.trim() === "") {
      setShowModal(true);
      return;
    }

    props.onAddItem({
      id: Math.random() * 100,
      title: todoItemName,
      desc: todoItemDescription,
    });
  };

  const hideModalHandler = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <Container className="my-5 py-5 px-5 w-75 border border-dark rounded">
        <Form onSubmit={submitFormHandler}>
          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>
              <b>Todo Task : </b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-bg red"
              onChange={taskInputHandler}
              value={todoItemName}
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>
              <b>Description : </b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={descInputHandler}
              value={todoItemDescription}
              placeholder="Brief Description... "
            />
          </Form.Group>
          {showModal && <ModalAlert onShowModal={hideModalHandler} />}
          <Button type="submit" className="px-5 py-2 mt-2">
            Add Task
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTask;
