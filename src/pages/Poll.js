import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
import { saveQuestionAnswer } from '../reducers/questions';

const Poll = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const question = useSelector((store) =>
  store.questions.filter((q) => q.id === location.pathname.split('/')[2])
  )[0];
  
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState('optionOne');

  const handleSubmit = () => {
    dispatch(
      saveQuestionAnswer({
        authedUser: user?.id,
        qid: question?.id,
        answer: selectedOption,
      })
    );
    setShowResults(true);
  };

  return (
    <div className='poll'>
      <Card title={`${question?.author} Asks:`}>
        {!showResults ? (
          <div className='poll-question'>
            <h2>Would You Rather...</h2>

            <div className='poll-options'>
              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='optionOne'
                    checked={selectedOption === 'optionOne'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {question?.optionOne.text}
                </label>
              </div>

              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='optionTwo'
                    onChange={(e) => setSelectedOption(e.target.value)}
                    checked={selectedOption === 'optionTwo'}
                  />
                  {question?.optionTwo.text}
                </label>
              </div>
            </div>
            <Button text='Submit' onClick={handleSubmit} />
          </div>
        ) : (
          <div className='poll-results'>
            <h2>Results</h2>

            <div className='poll-options'>
              <div>
                {selectedOption === question?.optionOne.text ? '✅ ' : ''}
                {question?.optionOne.text}({question.optionOne.votes.length}/
                {
                  question.optionOne.votes.concat(question.optionTwo.votes)
                    .length
                }
                )
              </div>

              <div>
                {selectedOption === question?.optionTwo.text ? '✅ ' : ''}
                {question?.optionTwo.text}({question.optionTwo.votes.length}/
                {
                  question.optionOne.votes.concat(question.optionTwo.votes)
                    .length
                }
                )
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Poll;
