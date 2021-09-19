import Button from '../components/Button';
import Card from '../components/Card';
const Home = () => {
  return (
    <div className='home'>
      <div>
        <h1>Unanswered Questions</h1>
        <ul className='home-list'>
          <li>
            <Card title='Sarah Paul Asked:'>
              <h3>Would you rather</h3>
              <p>Do something</p>
              <strong>OR</strong>
              <p>Do something</p>
              <Button text='View' onClick={() => {}} />
            </Card>
          </li>
          <li>
            <Card title='Sarah Paul Asked:'>
              <h3>Would you rather</h3>
              <p>Do something</p>
              <strong>OR</strong>
              <p>Do something</p>
              <Button text='View' onClick={() => {}} />
            </Card>
          </li>
        </ul>
      </div>
      <div>
        <h1>Answered Questions</h1>
        <ul className='home-list'>
          <li>
            <Card title='Sarah Paul Asked:'>
              <h3>Would you rather</h3>
              <p>Do something</p>
              <strong>OR</strong>
              <p>Do something</p>
              <Button text='View' onClick={() => {}} />
            </Card>
          </li>
          <li>
            <Card title='Sarah Paul Asked:'>
              <h3>Would you rather</h3>
              <p>Do something</p>
              <strong>OR</strong>
              <p>Do something</p>
              <Button text='View' onClick={() => {}} />
            </Card>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
