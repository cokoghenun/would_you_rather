import './App.css';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import Poll from './pages/Poll';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './reducers/users';
import { fetchQuestions } from './reducers/questions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
    dispatch(fetchQuestions);
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/add'>
            <NewQuestion />
          </Route>
          <Route exact path='/questions/:id'>
            <Poll />
          </Route>
          <Route exact path='/leaderboard'>
            <LeaderBoard />
          </Route>
          <Route exact path='/signin'>
            <Signin />
          </Route>
          <NotFound />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
