import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalFooter, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalHeader";

const ModalAlert = (props) => {
  const hideModalHandler = () => {
    props.onShowModal(false);
  };

  return (
    <Modal show>
      <ModalHeader>
        <ModalTitle>{props.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{props.body}</ModalBody>
      <ModalFooter>
        <Button onClick={hideModalHandler}>{props.buttonText}</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAlert;
