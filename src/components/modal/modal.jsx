import React, { useEffect } from "react";
import ModalWrapper from './modal-wrapper'
import ModalHeader from './modal-header'
import ModalClose from './modal-close'
import ModalFooter from './modal-footer'
import ModalBody from './modal-body'
import './modal.css'

export default function Modal({ children, close, title, firstFooterButtonText, firstFooterButtonClick, secondFooterButtonText, secondFooterButtonClick }) {
    const handleOverlayClick = (evt) => {
        evt.stopPropagation();
        if (evt.target.classList.contains('modal')) {
            close()
        }
    }
    useEffect(() => {
        const handleKeyDown = ({ key }) => {
            if (key === "Escape") {
                close();
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (

        <div
            className="modal"
            onClick={handleOverlayClick}
        >
            <ModalWrapper>
                <ModalHeader>
                    {title}
                    <ModalClose onClick={close} />
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter
                    firstText={firstFooterButtonText}
                    firstClick={firstFooterButtonClick}
                    secondaryText={secondFooterButtonText}
                    secondaryClick={secondFooterButtonClick}
                />
            </ModalWrapper>
        </div>
    )
}