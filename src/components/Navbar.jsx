import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav >
      <ul className='navforheader'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
