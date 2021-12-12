import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Badge } from "react-bootstrap";
import { useState } from "react";

const TaskItem = (props) => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const removeTaskHandler = () => {
    props.onRemoveItem(props.title);
  };

  const completedTaskHandler = () => {
    if (taskCompleted) {
      setTaskCompleted(false);
    } else {
      setTaskCompleted(true);
    }
  };

  const styleCompletedTaskElement = taskCompleted
    ? { background: "#c2faac" }
    : {};

  return (
    <ListGroup.Item
      onClick={completedTaskHandler}
      style={styleCompletedTaskElement}
      className="d-flex justify-content-between align-items-start py-3 my-2 px-3"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.title}</div>
        {props.desc}
      </div>

      {taskCompleted && (
        <Badge bg="success" className="mx-2">
          {" "}
          ✓{" "}
        </Badge>
      )}

      {/* Delete Task Marker */}
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
