import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "../assets/images/admlogo.png";
import loheaderbgo from "../assets/images/header_bg.png";



const Header = () => {
  return (
    <div className='header d-flex justify-conent-between px-5 align-items-center' style={{backgroundImage: `url(${loheaderbgo})`}}>
    <div className='logo w-25'>
         <img style={{width:"200px"}} src={logo} alt="" /> 
    </div>

  <nav className="horizontal-nav w-50">
      <ul>
        <li>
          <Link to="/">Taskboard</Link>
        </li>
        <li>
          <Link to="/activelog">Activity Log</Link>
        </li>
        <li>
          <Link to="/pipeline">Pipeline</Link>
        </li>
        <li>
          <Link to="/pipeline">My team</Link>
        </li>
        <li>
          <Link to="/clients">Client</Link>
        </li>
      </ul>
    </nav>

    <div className='profile-box w-25'> </div>


  </div>
  )
}

export default Header