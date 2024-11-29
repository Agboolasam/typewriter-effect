import Typewriter from './components/Typewriter';
import './App.css'

function App() {
  return (
    <>
      <div id="inputContainer">
        <h3>Text Inputs</h3>
        <label htmlFor="text1">First text</label><br />
        <input type="text" id='text1' /><br />
        <label htmlFor="text2">Second Text</label><br />
        <input type="text" id='text2' /><br />
        <label htmlFor="text3">Third Text</label><br />
        <input type="text" id='text3' /><br />
        <h3>Controls</h3>
        <label htmlFor="speed">Speed:</label>
        <input type="number" id='speed' max={1500} min={100} />

      </div>
      <Typewriter />
    </>
  )
}

export default App
