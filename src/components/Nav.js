import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
          <NavLink activeClassName='nav-active-page' exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='nav-active-page' exact to='/add'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='nav-active-page' exact to='/leaderboard'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      <div className='nav-account'>
        <span>Hello {user.name}</span>{' '}
        <span>
          <NavLink exact to='/signin'>
            Sign out
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
