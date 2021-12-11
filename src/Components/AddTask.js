import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

const AddTask = (props) => {
  const todoItemName = useRef("");
  const todoItemDescription = useRef("");

  const submitFormHandler = () => {
    props.onAddItem({
      id: Math.random() * 100,
      title: todoItemName.current.value,
      desc: todoItemDescription.current.value,
    });
  };

  return (
    <Container className="my-5 py-5 px-5 w-75 border border-dark rounded">
      <Form onSubmit={submitFormHandler}>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>
            <b>Todo Task : </b>
          </Form.Label>
          <Form.Control
            type="text"
            ref={todoItemName}
            placeholder="title of todo item."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>
            <b>Description : </b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            ref={todoItemDescription}
            placeholder="A Brief Description..."
          />
        </Form.Group>
        <Button type="submit" className="px-5 py-2 mt-2">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default AddTask;
