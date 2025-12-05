import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import './Navbar.css'
import caret_icon from '../../assets/caret_icon.svg'
import { useRef } from 'react'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom';



export default function Navbar() {
const navigate = useNavigate();

  const navRef = React.useRef();
  const handleSignOut = () => {
  // You can also clear auth tokens or user info here
  navigate('/login'); // this will redirect to login page
}


 useEffect(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark');
    } else {
      navRef.current.classList.remove('nav-dark');
    }
  })
  }, []);



  return (
    <div ref={navRef} className='navbar'>  
    
        <div className='navbar-left'>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={search_icon} alt="" className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile'/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
    <p onClick={() => navigate('/login')}>Sign out of Movie Star</p>
            </div>
          </div>
        </div>
    </div>
  )
}
