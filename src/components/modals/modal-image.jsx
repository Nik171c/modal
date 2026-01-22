import Modal from '../modal/modal'


export default function ModalImage({ close, children }) {

    return (
        <Modal
            close={close}
            title='Modal image'
            firstFooterButtonText="ADD TO FAVORITE"
            firstFooterButtonClick={() => { }}
            secondFooterButtonText="ADD TO FAVORITE"
            secondFooterButtonClick={() => { }}
        >
            <div className='like-image'></div>
            <h3 className='modal-title'>Product Delete</h3>
            <p className='modal-text'>By clicking the "Yes, Delete" button, Product NAME will be deleted</p>
        </Modal>
    )
}