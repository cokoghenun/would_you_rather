import { useSelector } from 'react-redux';
import Card from '../components/Card';

const LeaderBoard = () => {
  const users = useSelector((state) =>
    state.users
      .map((u) => ({
        id: u.id,
        name: u.name,
        questions: u.questions.length,
        answers: Object.keys(u.answers).length,
        score: u.questions.length + Object.keys(u.answers).length,
      }))
      .sort((a, b) => b.score - a.score)
  );

  return (
    <div className='leaderboard'>
      <ul className='leaderboard-list'>
        {users.map((u) => (
          <li>
            <Card title={`${u.name}`}>
              <p>Answered questions: {u.questions}</p>
              <p>Created Questions: {u.questions}</p>
              <p>Score: {u.score}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LeaderBoard;
