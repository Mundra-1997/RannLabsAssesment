import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const navv = useNavigate()
  function moveToHome(){
    navv('/home')
  }
  return (
    <div>
      <div className="header">
    
        <h2 className="logo" onClick={moveToHome}>Author & Publishers</h2>
        <nav>
          <ul className="links">
            <li>
              <NavLink  to="/publisher-reg">Publisher Registration</NavLink>
            </li>
            <li>
              <NavLink to="/">Author Registration</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
