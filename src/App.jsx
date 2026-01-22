import './App.css'
import Button from './components/button/button'
import Modal from './components/modal/modal'
import { useState } from 'react'
import ModalImage from './components/modals/modal-image';
import ModalText from './components/modals/modal-text';


// const openFirstModal = () => {
//   console.log('openning first modal')
// }

// const openSecondModal = () => {
//   console.log('openning second modal')
// }

function App() {
  const [isShownModal1, updateShowModal1] = useState(false);
  const [isShownModal2, updateShowModal2] = useState(false);
  const handleCloseModal1 = () => {
    updateShowModal1(() => false)
  }

  const handleCloseModal2 = () => {
    updateShowModal2(() => false)
  }

  const handleFirstOpen = () => {
    console.log('Open first modal')
    updateShowModal1(() => true)
  }

  const handleSecondOpen = () => {
    console.log('Open second modal')
    updateShowModal2(() => true)
  }

  return (
    <div className="App">
      <Button
        onclick={handleFirstOpen}
        type="button"
        className="btn-violet"
      >Open first modal</Button>
      <Button
        onclick={handleSecondOpen}
        type="button"
        className="btn-white"
      >Open second modal</Button>
      {isShownModal1 && <ModalImage close={handleCloseModal1}>11111</ModalImage>}
      {isShownModal2 && <ModalText close={handleCloseModal2}>11111</ModalText>}
    </div>
  )
}

export default App
