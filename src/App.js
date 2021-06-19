import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelper';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[0])}/>
    </div>
  );
}

export default App;
