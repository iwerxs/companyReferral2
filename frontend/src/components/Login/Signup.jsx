import "./Login.css";
import { useState } from "react";
import user_icon from "/src/assets/person.png";
import user_company from "/src/assets/home.png";
import email_icon from "/src/assets/email.png";
import password_icon from "/src/assets/password.png";
import Modal from "../Modal/Modal";
import { callApi, signUpUser } from "../../api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Handle login logic here
  //   console.log("Logging in with:", email, password);
  // };
  const [showModal, setShowModal] = useState(false);

  const handleSignup = async (e) => {
    // Handle login logic here
    e.preventDefault();

    // const signUpSuccess = true;

    // if (signUpSuccess) {
    //   setShowModal(true);
    //   setTimeout(() => {
    //     setShowModal(false);
    //     navigate("/myaccount");
    //   }, 2000); // Show modal for 2 seconds
    // } else {
    //   // Handle login failure (optional)
    //   window.alert("Sign up failed. Please check your credentials.");
    // }
    try {
      await callApi("/signup", {
        name: name,
        password: password,
        company: company,
        email: email,
      });
      alert("Registration successful!");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        window.location.href = "/myaccount";
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", error);
      window.alert("Sign up failed. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSignup}>
        <div className="inputs">
          <div>
            <div className="input">
              <img src={user_icon} alt="user" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br></br>
            <div className="input">
              <img src={user_company} alt="company" />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <div className="input">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
        <div className="submit-container">
          <button className="submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      {showModal && (
        <Modal
          message="Sign up successful! Redirecting you now..."
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default SignUp;
