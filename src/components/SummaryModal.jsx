import React from "react";
import {Modal, ModalClose, ModalContent} from "../styles_components/ModalStyles";

const SummaryModal = (props) => {
    return (
        <Modal
            {...props.open ? {open_modal: true} : {close_modal: true}}
        >
            <ModalContent>
                <ModalClose onClick={()=>{
                    props.setOpenStateModal(!props.open);
                }}>&times;</ModalClose>
                <p>
                    test
                </p>
            </ModalContent>
        </Modal>
    )
}
export default SummaryModal;
