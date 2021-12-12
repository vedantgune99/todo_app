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
        <ModalTitle>Invalid TODO Item!</ModalTitle>
      </ModalHeader>
      <ModalBody>Please enter valid todo item!</ModalBody>
      <ModalFooter>
        <Button onClick={hideModalHandler}>Close Modal</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAlert;
