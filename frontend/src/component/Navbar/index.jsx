import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import './NavbarStyles.css';

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar" style={{width:'100%'}}>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <BsLayoutSidebarInset size={24} />
        </button>
        
        {/* <div className="nav-menu">
          <a href="/project" className="nav-link">
            Project
          </a>
          <a href="/saved" className="nav-link">
            Saved
          </a>
          <a href="/shared" className="nav-link">
            Shared
          </a>
          <a href="/achievement" className="nav-link">
            Achievment
          </a>
        </div> */}
        
        <img src="https://picsum.photos/40" alt="Profile" className="profile-image" />
        
        <div className="mobile-icon" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="/project" className="mobile-link" onClick={toggle}>
          Project
        </a>
        <a href="/saved" className="mobile-link" onClick={toggle}>
          Saved
        </a>
        <a href="/shared" className="mobile-link" onClick={toggle}>
          Shared
        </a>
        <a href="/achievement" className="mobile-link" onClick={toggle}>
          Achievment
        </a>
        
        <a href="/dashboard" className="mobile-link" onClick={toggle}>
          Dashboard
        </a>
        <a href="/portfolio" className="mobile-link" onClick={toggle}>
          Portfolio
        </a>
        <a href="/inputs" className="mobile-link" onClick={toggle}>
          Inputs
        </a>
        <a href="/profile" className="mobile-link" onClick={toggle}>
          Profile
        </a>
      </div>
    </>
  );
};

export default Navbar;
