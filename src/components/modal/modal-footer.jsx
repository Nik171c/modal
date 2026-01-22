import React from 'react'
import Button from '../button/button'


export default function ModalFooter({ firstText, secondaryText, firstClick, secondaryClick }) {

    return (
        <footer
            className="modal-footer">
            {Boolean(firstText) && <Button className= "btn-violet" click={firstClick}>{firstText}</Button>}
            {Boolean(secondaryText) && <Button className= "btn-white" click={secondaryClick}>{secondaryText}</Button>}
        </footer>
    )
}