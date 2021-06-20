import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelper';
import { Route, Switch } from 'react-router-dom';
import { FindReplaceTwoTone } from '@material-ui/icons';

function App() {

  console.log(generatePalette(seedColors.find(palette => palette.id === 'material-ui-colors')))
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/" 
          render={() => <h1>Palette List</h1>}
        />
        <Route 
          exact path="/palette/:id" 
          render={routeProps => <Palette palette={generatePalette(seedColors.find(palette => palette.id === routeProps.match.params.id))}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
