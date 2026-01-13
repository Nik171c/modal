import './App.css'
import Button from './components/button/button'
import Modal from './components/modal/modal'


const openFirstModal = () => {
  console.log('openning first modal')
}

const openSecondModal = () => {
  console.log('openning second modal')
}

function App() {

  return (
    <>
      <div className="App">
        <Button
          type="button"
          className="button-blue"
          onClick={openFirstModal}
        >Open first modal</Button>
        <Button
        type="button"
          className="button-red"
          onClick={openSecondModal}
        >Open second modal</Button>
      </div>
      <Modal></Modal>
      </>
  )
}

export default App
