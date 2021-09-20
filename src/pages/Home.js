import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
const Home = () => {
  const history = useHistory();
  const questions = useSelector((store) => store.questions);
  const user = useSelector((store) => store.user);
  const users = useSelector((store) => store.users);

  if (!user?.id && !localStorage.getItem('userid')) return <Redirect to='/signin' />;
  return (
    <div className='home'>
      <div>
        <h1>Unanswered Questions</h1>
        <ul className='home-list'>
          {questions
            ?.filter(
              (q) => !user?.answers[q.id] && !user?.questions.includes(q.id)
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
                          users.filter((u) => u.id === q.author)[0].avatarURL
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
      <div>
        <h1>Answered Questions</h1>

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
                          users.filter((u) => u.id === q.author)[0].avatarURL
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
    </div>
  );
};
export default Home;
