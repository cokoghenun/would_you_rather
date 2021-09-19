import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
          <NavLink activeClassName='nav-active-page' exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='nav-active-page' exact to='/question'>
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
        <span>Hello Mark</span> <span><NavLink exact to='/signin'>Sign out</NavLink></span>
      </div>
    </nav>
  );
};

export default Nav;
