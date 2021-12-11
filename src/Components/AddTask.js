import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddTask = () => {
  return (
    <Container className="my-5 w-75">
      <Form>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Todo Task : </Form.Label>
          <Form.Control type="text" placeholder="TODO task item." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Description</Form.Label>
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
