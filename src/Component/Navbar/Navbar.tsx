import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useState } from 'react';
function Navbar() {
  const [toggle,setToggle] =useState(false);
  const toggleIt =()=>{
    setToggle(!toggle)
  }
  
  
  
  return (
    <div>
        <div className="collapse " id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                    <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/">Fill-Our-Info</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/category">Choose Category</NavLink>
                          </li>
                    </div>
          </div>
          <nav className="navbar navbar-light bg-light ">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <h1>
              <Link to={toggle?'/':'/category'} onClick={toggleIt}>
                  <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
              </Link>
            </h1>
            </div>
          </nav>
    </div>
  )
}

export default Navbar