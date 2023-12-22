
import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';


const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const nav = document.querySelector('.tabs-container');
      const offset = nav.offsetTop;
  
      const handleScroll = () => {
        setIsSticky(window.scrollY >= offset);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <nav className={`tabs-container ${isSticky?'sticky' : ''} ${isSticky? 'large' : ''}`}>
      <Link to="https://www.instagram.com/teamcentinelsrm/" className="tab">
        CONTACT US
      </Link>
      <Link to="/token" className="tab">
        VIVEW TOKEN
      </Link>
    </nav>
   
  )
}

export default Navbar