import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Poll = () => {
  const [options, setOptions] = useState('');

  const handleOptionChange = (e) => {
    // e.preventDefault();
    console.log(options);
    setOptions(e.target.value);
  };
  return (
    <div className='poll'>
      <Card title='Tyler Asks:'>
        <h2 className='poll-title'>Would You Rather...</h2>

        <div className='poll-options'>
          <div>
            <input
              type='radio'
              id='huey'
              name='options'
              value='huey'
              checked
              onChange={handleOptionChange}
            />
            <label htmlFor='huey'>Huey</label>
          </div>

          <div>
            <input
              type='radio'
              id='dewey'
              name='options'
              value='dewey'
              onChange={handleOptionChange}
            />
            <label htmlFor='dewey'>Dewey</label>
          </div>
        </div>
        <Button
          text='Submit'
          onClick={() => {
            console.log('hello');
          }}
        />
      </Card>
    </div>
  );
};

export default Poll;
