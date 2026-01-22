import Modal from "../modal/modal";

export default function ModalText({ close }) {

    return (
        <Modal
            close={close}
            title='Modal text'
            firstFooterButtonText="ADD TO FAVORITE"
            firstFooterButtonClick={() => { }}
            // secondFooterButtonText="ADD TO FAVORITE"
            // secondFooterButtonClick={() => { }}
        >
            <h3 className='modal-title'>Add Product "NAME"</h3>
            <p className='modal-text'>Description for you product</p>
        </Modal>
    )
}