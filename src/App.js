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
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './reducers/users';
import { fetchQuestions } from './reducers/questions';
import updateUser from './actionCreators/user';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers);
    dispatch(fetchQuestions);

    dispatch(
      updateUser(
        users.filter((u) => u.id === localStorage.getItem('userid'))[0] || {}
      )
    );
  }, [dispatch, users]);
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
