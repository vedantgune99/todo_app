import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const AllTask = (props) => {
  const removeItem = (taskItem) => {
    props.onRemoveTask(taskItem);
  };
  return (
    <Container className="my-3 py-3 px-2 w-75 border border-dark rounded">
      <ListGroup>
        {props.tasks.map((todo) => {
          return (
            <TaskItem
              onRemoveItem={removeItem}
              key={todo.id}
              title={todo.title}
              desc={todo.desc}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default AllTask;
