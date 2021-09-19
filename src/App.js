import './App.css';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import Poll from './pages/Poll';
import Signin from './pages/Signin';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/question' component={NewQuestion} />
          <Route exact path='/leaderboard' component={LeaderBoard} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
