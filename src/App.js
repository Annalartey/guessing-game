import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Food from './component/Food';
import Animal from './component/Animal';
import Colour from './component/Colour';
import Numbers from './component/Numbers';
import Letter from './component/Letter';
import Drink from './component/Drink';
import Main from './component/Main';


function App() {
  return (
    <div className="">
     <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/animal' component={Animal} />
        <Route path='/colour' component={Colour} />
        <Route path='/number' component={Numbers} />
        <Route path='/letter' component={Letter} />
        <Route path='/drink' component={Drink} />
        <Route path='/main' component={Main} />

      </Switch>
    </Router>
    </div>
  );
}

export default App;
