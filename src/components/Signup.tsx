import React, { useState } from "react";
import "./styles.css";
import Nav from "./Nav";
import Footer from "./Footer";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { username, email, password });
  };

  return (
    <div className="signup">
      <Nav />
      <div className="sign-up-page">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="avatar-circle">
            <i className="avatar-icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 50C43.125 50 37.2396 47.5521 32.3438 42.6562C27.4479 37.7604 25 31.875 25 25C25 18.125 27.4479 12.2396 32.3438 7.34375C37.2396 2.44792 43.125 0 50 0C56.875 0 62.7604 2.44792 67.6562 7.34375C72.5521 12.2396 75 18.125 75 25C75 31.875 72.5521 37.7604 67.6562 42.6562C62.7604 47.5521 56.875 50 50 50ZM0 100V82.5C0 78.9583 0.912501 75.7042 2.7375 72.7375C4.5625 69.7708 6.98333 67.5042 10 65.9375C16.4583 62.7083 23.0208 60.2875 29.6875 58.675C36.3542 57.0625 43.125 56.2542 50 56.25C56.875 56.2458 63.6458 57.0542 70.3125 58.675C76.9792 60.2958 83.5417 62.7167 90 65.9375C93.0208 67.5 95.4437 69.7667 97.2687 72.7375C99.0937 75.7083 100.004 78.9625 100 82.5V100H0ZM12.5 87.5H87.5V82.5C87.5 81.3542 87.2146 80.3125 86.6437 79.375C86.0729 78.4375 85.3167 77.7083 84.375 77.1875C78.75 74.375 73.0729 72.2667 67.3437 70.8625C61.6146 69.4583 55.8333 68.7542 50 68.75C44.1667 68.7458 38.3854 69.45 32.6562 70.8625C26.9271 72.275 21.25 74.3833 15.625 77.1875C14.6875 77.7083 13.9312 78.4375 13.3562 79.375C12.7812 80.3125 12.4958 81.3542 12.5 82.5V87.5ZM50 37.5C53.4375 37.5 56.3812 36.2771 58.8312 33.8312C61.2812 31.3854 62.5042 28.4417 62.5 25C62.4958 21.5583 61.2729 18.6167 58.8312 16.175C56.3896 13.7333 53.4458 12.5083 50 12.5C46.5542 12.4917 43.6125 13.7167 41.175 16.175C38.7375 18.6333 37.5125 21.575 37.5 25C37.4875 28.425 38.7125 31.3688 41.175 33.8312C43.6375 36.2938 46.5792 37.5167 50 37.5Z"
                  fill="#FEE9DF"
                />
              </svg>
            </i>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
        <button type="submit" className="create-account-button">
            Create Account
          </button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
