import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';

const NotFound = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (!user?.id) return <Redirect to={`/signin?rp=${location.pathname}`} />;

  return (
    <div className='notfound'>
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default NotFound;
