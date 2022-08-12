import { NavLink } from 'react-router-dom';
import userIcon from '../icons/account_circle.svg';

const Nav = () => (
  <nav>
    <div>
      <a className="nav-brand" href="/">Bookstore CMS</a>
      <ul className="nav-list">
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <a className="user-icon" href="/">
      <img src={userIcon} alt="user icon" />
    </a>
  </nav>
);

export default Nav;
