import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Card from '../components/Card';

const LeaderBoard = () => {
  const users = useSelector((state) =>
    state.users
      .map((u) => ({
        id: u.id,
        name: u.name,
        avatarURL: u.avatarURL,
        questions: u.questions.length,
        answers: Object.keys(u.answers).length,
        score: u.questions.length + Object.keys(u.answers).length,
      }))
      .sort((a, b) => b.score - a.score)
  );
  const user = useSelector((state) => state.user);

  if (!user?.id  ) return <Redirect to='/signin?rp=/leaderboard' />;

  return (
    <div className='leaderboard'>
      <ul className='leaderboard-list'>
        {users.map((u) => (
          <li key={u.id}>
            <Card title={`${u.name}`}>
              <div className='grid-flex'>
                <div className='grid-flex-one'>
                  <img src={u.avatarURL} alt={u.id} />
                </div>
                <div className='grid-flex-two'>
                  <p>Answered questions: {u.questions}</p>
                  <p>Created Questions: {u.questions}</p>
                  <p>Score: {u.score}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LeaderBoard;
