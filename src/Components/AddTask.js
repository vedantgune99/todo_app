import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

const AddTask = () => {
  return (
    <Container className="my-5 py-5 px-5 w-75 border border-dark rounded">
      <Form>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>
            <b>Todo Task : </b>
          </Form.Label>
          <Form.Control type="text" placeholder="title of todo item." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>
            <b>Description : </b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="A Brief Description..."
          />
        </Form.Group>
      </Form>
      <Button className="px-5 py-2 mt-2">Add Task</Button>
    </Container>
  );
};

export default AddTask;
