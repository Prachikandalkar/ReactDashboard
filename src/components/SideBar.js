import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faNoteSticky, faPencil, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css"
import Add from "./Add"

function SideBar() {
  return (
    
    <div className="left-panel">
      <Add/>
      {/* <button className="add-button"> <FontAwesomeIcon icon={faPlus} />  <a> Add</a> </button> */}
      <button className="create-button"> <FontAwesomeIcon icon={faPencil} /> Create</button>
      <ul className="menu">
        <li>
          <a href="#">  <FontAwesomeIcon icon={faBook} /> All</a>
        </li>
        <li>
          <a href="#">  <FontAwesomeIcon icon={faClock} /> Recent</a>
        </li>
        <li className='separator'>
          <a href="#">  <FontAwesomeIcon icon={faStar} /> Starred</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon={faNoteSticky} /> Test Demo</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon={faNoteSticky} /> Page Builder Demo</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon={faNoteSticky} /> Metabase</a>
        </li>
      </ul>
      
    </div>
    );
}
export default SideBar;

