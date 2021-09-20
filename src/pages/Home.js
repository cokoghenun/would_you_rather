import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
const Home = () => {
  const history = useHistory();
  const questions = useSelector((store) => store.questions);
  const user = useSelector((store) => store.user);
  return (
    <div className='home'>
      <div>
        <h1>Unanswered Questions</h1>
        <ul className='home-list'>
          {questions
            ?.filter(
              (q) => !user.answers[q.id] && !user.questions.includes(q.id)
            )
            .map((q) => (
              <li key={q.id}>
                <Card title={`${q.author} Asked:`}>
                  <h3>Would you rather</h3>
                  <p>{q.optionOne.text}</p>
                  <strong>OR</strong>
                  <p>{q.optionTwo.text}</p>
                  <Button
                    text='View'
                    onClick={() => history.push(`/question/${q.id}`)}
                  />
                </Card>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1>Answered Questions</h1>

        <ul className='home-list'>
          {questions
            ?.filter((q) => user.answers[q.id])
            .map((q) => (
              <li key={q.id}>
                <Card title={`${q.author} Asked:`}>
                  <h3>Would you rather</h3>
                  <p>{q.optionOne.text}</p>
                  <strong>OR</strong>
                  <p>{q.optionTwo.text}</p>
                  <Button
                    text='View'
                    onClick={() => history.push(`/question/${q.id}`)}
                  />
                </Card>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
