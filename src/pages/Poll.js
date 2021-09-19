import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState('huey');
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (e) => {
    // e.preventDefault();
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };
  
  return (
    <div className='poll'>
      <Card title='Tyler Asks:'>
        {!showResults ? (
          <div className='poll-question'>
            <h2 className='poll-title'>Would You Rather...</h2>

            <div className='poll-options'>
              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='huey'
                    checked
                    onChange={handleOptionChange}
                  />
                  Huey
                </label>
              </div>

              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='dewey'
                    onChange={handleOptionChange}
                  />
                  Dewey
                </label>
              </div>
            </div>
            <Button text='Submit' onClick={handleSubmit} />
          </div>
        ) : (
          <div className='poll-results'>
            <h2 className='poll-title'>Results</h2>

            <div className='poll-options'>
              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='huey'
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                    checked={selectedOption === 'huey'}
                  />
                  Would You Rather: Huey (3/5)
                </label>
              </div>

              <div>
                <label>
                  <input
                    type='radio'
                    name='options'
                    value='dewey'
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                    checked={selectedOption === 'dewey'}
                  />
                  Would You Rather: Dewey (2/5)
                </label>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Poll;
