import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Nav2: React.FC = () => {

    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully");
        })
        };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/hospitalLogo.png" alt="Carefinder Logo" />
          <span className="name">Carefinder</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hospitals">Hospital List</Link>
          </li>
        
        </ul>
        <div className="logout">
        			<button onClick={handleLogout} className="logoutbtn">
                        Logout
                    </button>
        		</div>
      </nav>
    </header>
  );
};

export default Nav2;
