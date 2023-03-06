import Modal from "../components/modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <Button onClick={handleClose} primary>Close</Button>

    const modal =  <Modal 
                        buttonText="Close" 
                        onClose={handleClose}
                        actionBar={actionBar}
                    >
                            <h3>This is a modal form!</h3>
                    </Modal>

    return (
        <div>
            <Button warning onClick={() => setShowModal(true)}>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;