import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import Card from '../components/Card';

const Signin = () => {
  const users = useSelector((state) =>
    Object.keys(state.user).map((key) => state.user[key])
  );
  const [selectedUser, setSelectedUser] = useState('sarahedo');
  const handleSignIn = () => {
    localStorage.setItem(
      'user',
      JSON.stringify(users.filter((u) => u.id === selectedUser)[0])
    );
  };
  useEffect(() => {
    console.log(users);
    // console.log(Object.keys(users).map((key) => users[key]));
  }, []);
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
