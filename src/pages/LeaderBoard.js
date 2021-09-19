import Card from '../components/Card';

const LeaderBoard = () => {
  return (
    <div className='leaderboard'>
      <ul className='leaderboard-list'>
        <li>
          <Card title='Sarah Paul'>
            <p>Answered questions: 4</p>
            <p>Created Questions: 5</p>
            <p>Score: 10</p>
          </Card>
        </li>
        <li>
          <Card title='Sarah Paul'>
            <p>Answered questions: 4</p>
            <p>Created Questions: 5</p>
            <p>Score: 10</p>
          </Card>
        </li>
        <li>
          <Card title='Sarah Paul'>
            <p>Answered questions: 4</p>
            <p>Created Questions: 5</p>
            <p>Score: 10</p>
          </Card>
        </li>
      </ul>
    </div>
  );
};
export default LeaderBoard;
