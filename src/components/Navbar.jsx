import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
const navLinks = ['home', 'profile', 'skills', 'projects', 'contacts'];

export default function Navbar() {
  let location = useLocation();
  console.log(location);
  return (
    <nav className='navbar'>
      {navLinks.map(link => {
        return (
          <NavLink
            to={`/${link !== 'home' ? `${link}` : ''}`}
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            {location.pathname === `/${link}`
              ? `< ${link.toUpperCase()} >`
              : location.pathname + 'home' === '/home'
              ? `${link === 'home' ? '< HOME >' : link.toUpperCase()}`
              : `${link.toUpperCase()}`}
          </NavLink>
        );
      })}
    </nav>
  );
}
