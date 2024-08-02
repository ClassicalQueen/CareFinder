import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase.ts';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import "./signup.css";
import Nav from "./Nav";
import Footer from "./Footer";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("")
  const [ error, setError] = useState<string | null>(null);
  const [ message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password != confirmpassword){
      setError("Passwords do not match");
    }
    try {
      const userCredential = await createUserWithEmailAndPassword (
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

       //Temporarily store user data in local storage

      localStorage.setItem(
        "registrationData",
        JSON.stringify({
          username,
          email,
        })
      );

      setMessage(
        "Registration succesful! Please check your email"
      );

      //clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("./login")
     } catch ( error ) {
      if (error instanceof Error) {
        setError( error.message );
      } else {
        setError("An unknown error occurred");
      }
     }
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

          <i className="input-icon user-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.9998 34C43.2082 34 50.6665 26.5417 50.6665 17.3333C50.6665 8.125 43.2082 0.666672 33.9998 0.666672C24.7915 0.666672 17.3332 8.125 17.3332 17.3333C17.3332 26.5417 24.7915 34 33.9998 34ZM33.9998 42.3333C22.8748 42.3333 0.666504 47.9167 0.666504 59V63.1667C0.666504 65.4583 2.5415 67.3333 4.83317 67.3333H63.1665C65.4582 67.3333 67.3332 65.4583 67.3332 63.1667V59C67.3332 47.9167 45.1248 42.3333 33.9998 42.3333Z"
                fill="#FEE9DF"
              />
            </svg>
          </i>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <i className="input-icon mail-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 84 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.8749 0.458333H20.1249C14.8758 0.458333 9.84175 2.54352 6.1301 6.25518C2.41844 9.96684 0.333252 15.0009 0.333252 20.25V57.75C0.333252 60.3491 0.845179 62.9227 1.8398 65.3239C2.83443 67.7252 4.29227 69.907 6.1301 71.7448C9.84175 75.4565 14.8758 77.5417 20.1249 77.5417H63.8749C69.1206 77.5307 74.1483 75.4419 77.8576 71.7327C81.5669 68.0234 83.6556 62.9957 83.6666 57.75V20.25C83.6556 15.0043 81.5669 9.97661 77.8576 6.26734C74.1483 2.55806 69.1206 0.469342 63.8749 0.458333ZM48.6666 35.125C46.6166 36.2941 44.2974 36.909 41.9374 36.909C39.5775 36.909 37.2583 36.2941 35.2083 35.125L6.66659 18.75C7.03564 15.4388 8.61245 12.3798 11.0954 10.1582C13.5784 7.9366 16.7932 6.70833 20.1249 6.70833H63.8749C67.2041 6.71746 70.4139 7.94888 72.895 10.1688C75.376 12.3886 76.9554 15.4423 77.3333 18.75L48.6666 35.125Z"
                fill="#FEE9DF"
              />
            </svg>
          </i>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="input-icon lock-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 96 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 27.0833V41.6667H9.6C7.05392 41.6667 4.61212 42.5446 2.81178 44.1074C1.01143 45.6702 0 47.7899 0 50L0 91.6667C0 93.8768 1.01143 95.9964 2.81178 97.5592C4.61212 99.122 7.05392 100 9.6 100H86.4C88.9461 100 91.3879 99.122 93.1882 97.5592C94.9886 95.9964 96 93.8768 96 91.6667V50C96 47.7899 94.9886 45.6702 93.1882 44.1074C91.3879 42.5446 88.9461 41.6667 86.4 41.6667H79.2V27.0833C79.2 19.9004 75.9129 13.0116 70.0617 7.93252C64.2106 2.85341 56.2748 0 48 0C39.7252 0 31.7894 2.85341 25.9383 7.93252C20.0871 13.0116 16.8 19.9004 16.8 27.0833ZM28.8 41.6667V27.0833C28.8 22.6631 30.8229 18.4238 34.4235 15.2982C38.0243 12.1726 42.9078 10.4167 48 10.4167C53.0922 10.4167 57.9758 12.1726 61.5765 15.2982C65.1772 18.4238 67.2 22.6631 67.2 27.0833V41.6667H28.8ZM38.4 64.5833C38.4004 63.1397 38.8328 61.7208 39.6549 60.4659C40.4769 59.2109 41.6605 58.1629 43.0896 57.4244C44.5186 56.686 46.1442 56.2825 47.807 56.2535C49.4697 56.2244 51.1127 56.5709 52.5748 57.2588C54.0369 57.9468 55.2681 58.9527 56.1476 60.1779C57.0272 61.4032 57.5249 62.8058 57.5922 64.2483C57.6594 65.6908 57.2938 67.1236 56.5311 68.4066C55.7684 69.6895 54.6349 70.7784 53.2416 71.5667L53.2032 71.5875C53.2032 71.5875 54.1392 76.5042 55.1952 82.2958V82.3C55.1952 83.1277 54.8164 83.9215 54.1422 84.5068C53.468 85.092 52.5535 85.4208 51.6 85.4208H44.3904C43.4369 85.4208 42.5224 85.092 41.8482 84.5068C41.174 83.9215 40.7952 83.1277 40.7952 82.3V82.2958L42.7872 71.5875C41.4394 70.832 40.331 69.7957 39.563 68.573C38.795 67.3503 38.3919 65.9801 38.3904 64.5875L38.4 64.5833Z"
                fill="#FEE9DF"
              />
            </svg>
          </i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <i className="input-icon lock-icon2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 96 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 27.0833V41.6667H9.6C7.05392 41.6667 4.61212 42.5446 2.81178 44.1074C1.01143 45.6702 0 47.7899 0 50L0 91.6667C0 93.8768 1.01143 95.9964 2.81178 97.5592C4.61212 99.122 7.05392 100 9.6 100H86.4C88.9461 100 91.3879 99.122 93.1882 97.5592C94.9886 95.9964 96 93.8768 96 91.6667V50C96 47.7899 94.9886 45.6702 93.1882 44.1074C91.3879 42.5446 88.9461 41.6667 86.4 41.6667H79.2V27.0833C79.2 19.9004 75.9129 13.0116 70.0617 7.93252C64.2106 2.85341 56.2748 0 48 0C39.7252 0 31.7894 2.85341 25.9383 7.93252C20.0871 13.0116 16.8 19.9004 16.8 27.0833ZM28.8 41.6667V27.0833C28.8 22.6631 30.8229 18.4238 34.4235 15.2982C38.0243 12.1726 42.9078 10.4167 48 10.4167C53.0922 10.4167 57.9758 12.1726 61.5765 15.2982C65.1772 18.4238 67.2 22.6631 67.2 27.0833V41.6667H28.8ZM38.4 64.5833C38.4004 63.1397 38.8328 61.7208 39.6549 60.4659C40.4769 59.2109 41.6605 58.1629 43.0896 57.4244C44.5186 56.686 46.1442 56.2825 47.807 56.2535C49.4697 56.2244 51.1127 56.5709 52.5748 57.2588C54.0369 57.9468 55.2681 58.9527 56.1476 60.1779C57.0272 61.4032 57.5249 62.8058 57.5922 64.2483C57.6594 65.6908 57.2938 67.1236 56.5311 68.4066C55.7684 69.6895 54.6349 70.7784 53.2416 71.5667L53.2032 71.5875C53.2032 71.5875 54.1392 76.5042 55.1952 82.2958V82.3C55.1952 83.1277 54.8164 83.9215 54.1422 84.5068C53.468 85.092 52.5535 85.4208 51.6 85.4208H44.3904C43.4369 85.4208 42.5224 85.092 41.8482 84.5068C41.174 83.9215 40.7952 83.1277 40.7952 82.3V82.2958L42.7872 71.5875C41.4394 70.832 40.331 69.7957 39.563 68.573C38.795 67.3503 38.3919 65.9801 38.3904 64.5875L38.4 64.5833Z"
                fill="#FEE9DF"
              />
            </svg>
          </i>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p color="red">{error}</p>}
          {message && <p color="green">{message}</p>}

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        <button 
        type="submit" 
        className="create-account-button"
        onClick={handleSubmit}>
          Create Account
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
