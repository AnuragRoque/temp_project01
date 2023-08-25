import {  NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo3.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
    <img src={Logo} alt="Brand Logo" className="logo" />
      <div className="nav-links">
      
        <span><NavLink to="/" className="nav-text">TOP 100</NavLink></span>
        <span><NavLink to="/Welcome" className="nav-text">TOKENOMICS</NavLink></span>
        <span><NavLink to="/Roadmap"className="nav-text">ROADMAP</NavLink></span>
        <span><NavLink to="/Roadmap"className="nav-text">HOW TO BUY</NavLink></span>
        <span><NavLink to="/Roadmap"className="nav-text">INFLUENCERS TO FOLLOW</NavLink></span>
      
        
        </div>
        <button className='navbutton'>JOIN WISHLIST</button>
    </div>
  );
}
export default Navbar;
