import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import MainDashboard from "./components/MainDashboard";
import React from "react";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <section>
          <div className="layout">
            <div className="sidebar">
              <SideBar/>
            </div>
            <div className="maindashboard">
              <MainDashboard/>
            </div>
          </div>
        </section>

      </Router>
    </>
  );
}

export default App;
