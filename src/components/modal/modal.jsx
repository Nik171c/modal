import React from "react";
import ModalWrapper from './modal-wrapper'
import ModalHeader from './modal-header'
import ModalClose from'./modal-close'
import ModalFooter from './modal-footer'
import ModalBody from './modal-body'
import './modal.css'

export default function Modal({children, close}) {

    return (
        <ModalWrapper>
            <ModalBody>
                <ModalHeader>
                    <ModalClose onClick={close}/>
                </ModalHeader>
                {children}
                <ModalFooter firstText='111111' />
            </ModalBody>
        </ModalWrapper>
    )
}