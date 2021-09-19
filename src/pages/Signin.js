import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Signin = () => {
  const [selectedUser, setSelectedUser] = useState('audi');
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
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
        <Button text='Sign in' onClick={() => {}} />
      </Card>
    </div>
  );
};

export default Signin;
