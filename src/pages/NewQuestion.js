import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
import { saveQuestion } from '../reducers/questions';
const NewQuestion = () => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const [shouldGoHome, setShouldGoHome] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      saveQuestion({
        author: user?.id,
        optionOneText: option1,
        optionTwoText: option2,
      })
    );
    console.log('hello');
    setShouldGoHome(true);
  };

  if (!user?.id )
    return <Redirect to='/signin?rp=/add' />;
  if (shouldGoHome) return <Redirect to='/' />;

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
        <Button text='Submit' onClick={handleSubmit} />
      </Card>
    </div>
  );
};

export default NewQuestion;
