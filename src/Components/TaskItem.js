import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Badge } from "react-bootstrap";

const TaskItem = (props) => {
  const removeTaskHandler = () => {
    props.onRemoveItem(props.title);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start py-3 my-2 px-3">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.title}</div>
        {props.desc}
      </div>
      <Badge
        bg="danger"
        style={{ cursor: "pointer" }}
        onClick={removeTaskHandler}
      >
        X
      </Badge>
    </ListGroup.Item>
  );
};
export default TaskItem;
