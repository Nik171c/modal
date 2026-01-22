import React from "react";
import ModalHeader from "./modal-header";


export default function ModalWrapper({children}) {
    


    return (
        <div className="modal-wrapper">
            {children}
        </div>
    )
}