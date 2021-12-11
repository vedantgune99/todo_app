import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup } from "react-bootstrap";

const AddTask = () => {
  return (
    <Container className="my-3 w-75">
      <ListGroup>
        <ListGroup.Item className="py-3">Task 1</ListGroup.Item>
        <ListGroup.Item className="py-3">Task 2</ListGroup.Item>
        <ListGroup.Item className="py-3">Task 3</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
export default AddTask;
