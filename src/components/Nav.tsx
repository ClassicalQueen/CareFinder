import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
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
          {/* <li>
            <Link to="/hospitals">Hospital List</Link>
          </li> */}
          <li>
            <Link to="/signup" className="login-btn" >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.146 12.1127 0.438 11.638C0.73 11.1633 1.11733 10.8007 1.6 10.55C2.63333 10.0333 3.68333 9.646 4.75 9.388C5.81667 9.13 6.9 9.00067 8 9C9.1 8.99933 10.1833 9.12867 11.25 9.388C12.3167 9.64733 13.3667 10.0347 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1133 16.0007 12.634 16 13.2V16H0Z"
                  fill="#FEE9DF"
                />
              </svg>

              <span className="next">  Sign Up/Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
