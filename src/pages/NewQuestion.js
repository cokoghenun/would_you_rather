import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
const NewQuestion = () => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  return (
    <div className='newquestion'>
      <Card title='Create a New Question'>
        <div className='newquestion-options'>
          <h3>Would you rather...</h3>
          <input
            type='text'
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            placeholder='Enter the first option here'
          />
          <p>OR</p>
          <input
            type='text'
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            placeholder='Enter the first option here'
          />
        </div>
        <Button text='Submit' onChange={() => {}} />
      </Card>
    </div>
  );
};

export default NewQuestion;
