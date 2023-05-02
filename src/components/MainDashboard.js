import React from "react";
import './MainDashboard.css';
import Card from "./Card";

const MainDashboard = () => {
    return (
      <div className="head">
        
        <div className="header">
          <h3>Page Builder Demo</h3>
          <div class="search-container">
              <input type="text" placeholder="Filter"/>
              <i class="fas fa-search search-icon"></i>
          </div>
        </div>
        {/* <Card/> */}
      </div>
    );
  };
  
  export default MainDashboard;
  
  
  
  
  
  
  
  