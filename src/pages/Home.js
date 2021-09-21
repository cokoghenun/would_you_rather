import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const history = useHistory();
  const questions = useSelector((store) => store.questions);
  const user = useSelector((store) => store.user);
  const users = useSelector((store) => store.users);
  const [activeTab, setActiveTab] = useState(1);

  if (!user?.id) return <Redirect to='/signin?rp=/' />;
  return (
    <div className='home'>
      <div className='tab'>
        <div className='tab-head'>
          <div
            className='tab-head-one'
            style={{
              backgroundColor: activeTab === 1 ? 'black' : 'unset',
              color: activeTab === 1 ? 'white' : 'unset',
            }}
            onClick={() => setActiveTab(1)}
          >
            Unanswered Questions
          </div>

          <div
            className='tab-head-two'
            style={{
              backgroundColor: activeTab === 2 ? 'black' : 'unset',
              color: activeTab === 2 ? 'white' : 'unset',
            }}
            onClick={() => setActiveTab(2)}
          >
            Answered Questions
          </div>
        </div>
        <div className='tab-body'>
          {activeTab === 1 ? (
            <div className='tab-body-one'>
              <ul className='home-list'>
                {questions
                  ?.filter(
                    (q) =>
                      !user?.answers[q.id] && !user?.questions.includes(q.id)
                  )
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((q) => (
                    <li key={q.id}>
                      <Card
                        title={`${
                          users.filter((u) => u.id === q.author)[0].name
                        } Asked:`}
                      >
                        <div className='grid-flex'>
                          <div className='grid-flex-one'>
                            <img
                              src={
                                users.filter((u) => u.id === q.author)[0]
                                  .avatarURL
                              }
                              alt={q.author}
                            />
                          </div>
                          <div className='grid-flex-two'>
                            <h3>Would you rather</h3>
                            <p>{q.optionOne.text}</p>
                            <strong>OR</strong>
                            <p>{q.optionTwo.text}</p>
                            <Button
                              text='View'
                              onClick={() => history.push(`/questions/${q.id}`)}
                            />
                          </div>
                        </div>
                      </Card>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className='tab-body-two'>
              <ul className='home-list'>
                {questions
                  ?.filter((q) => user?.answers[q.id])
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((q) => (
                    <li key={q.id}>
                      <Card
                        title={`${
                          users.filter((u) => u.id === q.author)[0].name
                        } Asked:`}
                      >
                        <div className='grid-flex'>
                          <div className='grid-flex-one'>
                            <img
                              src={
                                users.filter((u) => u.id === q.author)[0]
                                  .avatarURL
                              }
                              alt={q.author}
                            />
                          </div>
                          <div className='grid-flex-two'>
                            <h3>Would you rather</h3>
                            <p>{q.optionOne.text}</p>
                            <strong>OR</strong>
                            <p>{q.optionTwo.text}</p>
                            <Button
                              text='View'
                              onClick={() => history.push(`/questions/${q.id}`)}
                            />
                          </div>
                        </div>
                      </Card>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
