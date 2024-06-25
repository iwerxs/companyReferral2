// email: user@ssg.com
// password: ssg1

import "./Login.css";
import { useState } from "react";
import user_icon from "/src/assets/person.png";
import password_icon from "/src/assets/password.png";
import Modal from "../Modal/Modal";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    // Handle login logic here
    e.preventDefault();
    console.log("Logging in with:", user, password);

    const loginSuccess = user === "user@ssg.com" && password === "ssg1";

    if (loginSuccess) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        window.location.href = "/referrals";
      }, 2000); // Show modal for 2 seconds
    } else {
      // Handle login failure (optional)
      window.alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="inputs">
          <div>
            <div className="input">
              <img src={user_icon} alt="user" />
              <input
                type="text"
                placeholder="Username or Email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <br />
          </div>
          <div className="input">
            <img src={password_icon} alt="pswd" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click here</span>
        </div>

        <div className="submit-container">
          <button className="submit" type="submit">
            Login
          </button>
        </div>
      </form>
      {showModal && (
        <Modal
          message="Login successful! Redirecting you now..."
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Login;
