import "./CreateUser.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import UserList from "./UserList";

const CreateUser = () => {
  const [showModal, setShowModal] = useState(false);

  const handleUser = (e) => {
    e.preventDefault();
    const createSuccess = true;

    if (createSuccess) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } else {
      // Handle login failure (optional)
      window.alert("User creation failed. Please try again.");
    }
  };

  return (
    <div className="user-container">
      <div className="create-user">
        <div className="title-container">
          <h2 className="user-title">Create User</h2>
          <div className="user-underline"></div>
        </div>
        <form className="user-form" onSubmit={handleUser}>
          <div className="users">
            <div>
              <div className="user-input">
                <input
                  type="text"
                  placeholder="Username"
                  // value={user}
                  // onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="user-input">
                <input
                  type="text"
                  placeholder="Email"
                  // value={user}
                  // onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="user-input">
                <input
                  type="password"
                  placeholder="Password"
                  // value={user}
                  // onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </div>
            <div className="user-dropdown">
              <label htmlFor="user-role">Select User Role:</label>
              <br />
              <select id="user-role" name="user-role">
                <option value="option1">Platform Admin</option>
                <option value="option2">Company Admin</option>
                <option value="option3">Standard User</option>
              </select>
            </div>
            <div className="company-dropdown">
              <label htmlFor="user-company">Select Company:</label>
              <br />
              <select id="user-company" name="user-company">
                <option value="option1">Loopli</option>
                <option value="option2">Technova</option>
                <option value="option3">Alphabet Ltd</option>
                <option value="option4">Delta</option>
                <option value="option5">Smart Inc</option>
                <option value="option6">QA Ltd</option>
                <option value="option7">BluePrint</option>
                <option value="option8">UrbanEdge</option>
                <option value="option9">SuperC</option>
                <option value="option10">Genesis Inc</option>
              </select>
            </div>
          </div>
          <div className="user-submit-container">
            <button className="user-submit" type="submit">
              Create User
            </button>
          </div>
        </form>
        {showModal && (
          <Modal
            message="User creation successful!"
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
      <UserList />
    </div>
  );
};

export default CreateUser;
