import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelper';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>}/>
        <Route exact path="/palette/:id" />
      </Switch>
      
      {/* <Palette palette={generatePalette(seedColors[0])}/> */}
    </div>
  );
}

export default App;
