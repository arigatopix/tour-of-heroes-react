import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link className="text-reset text-decoration-none" to="/">
          Tour of Hero
        </Link>
      </h1>

      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/heroes">
            Heros
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
