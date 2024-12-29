import React, { useState } from 'react'
import './Navbar.css'; 
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../images/phone.png';
import contact from '../Contact/contact';
import menu from '../../images/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] =useState(false);
  return (
   <nav className="navbar">
           <img src={logo} alt="Logo" className='logo' />
           <div className= "desktopMenu" >
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Home</Link>
         <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Portfolio</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Contact</Link>
           </div>
           <button className= "desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
           }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
           <div className= "navMenu" style={{display: showMenu?'flex':'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
           </div>
   </nav>
  )
}

export default Navbar