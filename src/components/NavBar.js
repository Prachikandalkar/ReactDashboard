import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <i className="fa fa-bars"></i>
              {/* Custom Dashboard */}
            </NavLink>
            <h1 className="main-head"> Custom Dashboard</h1>
            <div class="search-container">
              <input type="text" placeholder="Search"/>
              <i class="fas fa-search search-icon"></i>
            </div>

                  {/* <div class="search-container">
                  <form action="#">
                  <input type="text" placeholder="Search..." name="search"/>
                  <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                  </div> */}


            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
            


                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  >
                  {/* <i class="fa fa-bell"></i> */}
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink exact to="/" className="nav-logo">
                  <i class="fa fa-bell" ></i>
                </NavLink>
              </li>
              <li className="nav-item">
            
                <NavLink exact to="/" className="nav-logo">
                  <i class='fas fa-user-alt'></i>
                </NavLink>
              </li>
            </ul>
            {/* <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div> */}
          </div>

        </nav>
    </>
  );
}

export default NavBar;
