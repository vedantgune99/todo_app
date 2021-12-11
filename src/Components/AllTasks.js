import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Badge, ListGroup } from "react-bootstrap";

const AllTask = (props) => {
  return (
    <Container className="my-3 py-3 px-2 w-75 border border-dark rounded">
      {props.tasks.map((task) => {
        return (
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-start py-3 my-2 px-3">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{task.title}</div>
                {task.desc}
              </div>
              <Badge bg="danger">X</Badge>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
};
export default AllTask;
