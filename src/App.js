import './App.css';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import Poll from './pages/Poll';
import Signin from './pages/Signin';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './reducers/user';
import Auth from './components/Auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Auth component={Home} />
          </Route>
          <Route exact path='/question'>
            <Auth component={NewQuestion} />
          </Route>
          <Route exact path='/leaderboard'>
            <Auth component={LeaderBoard} />
          </Route>
          <Route exact path='/signin'>
            <Auth component={Signin} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
