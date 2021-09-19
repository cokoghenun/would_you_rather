import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
import { fetchQuestions } from '../reducers/questions';
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questions = useSelector((store) => store.questions);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    // console.log(questions);
    console.log(
      questions?.filter(
        (q) => !user.answers[q.id] && !user.questions.includes(q.id)
      )
    );
    // console.log(questions?.filter((q) => !user.questions.includes(q.id)));
  }, [questions, user.answers, user.questions]);
  useEffect(() => {
    dispatch(fetchQuestions);
  }, [dispatch]);
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
