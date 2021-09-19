import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import updateUser from '../actionCreators/user';
import Button from '../components/Button';
import Card from '../components/Card';

const Signin = () => {
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('sarahedo');
  const [shouldGoHome, setShouldGoHome] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const user = users.filter((u) => u.id === selectedUser)[0];
    localStorage.setItem('user', JSON.stringify(user));
    setShouldGoHome(true);
  };

  useEffect(() => {
    localStorage.clear();
    dispatch(updateUser({}));
  }, [dispatch]);

  if (shouldGoHome) return <Redirect to='/' />;
  return (
    <div className='signin'>
      <Card title='Welcome to Would You Rather App'>
        <h3>Select a user to continue</h3>
        <select
          name='cars'
          id='cars'
          value={selectedUser}
          className='signin-select'
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
        <Button text='Sign in' onClick={handleSignIn} />
      </Card>
    </div>
  );
};

export default Signin;
