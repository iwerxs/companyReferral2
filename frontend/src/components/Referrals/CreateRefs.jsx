import "./CreateRefs.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const CreateRefs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRef = (e) => {
    e.preventDefault();
    const createSuccess = true;

    if (createSuccess) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } else {
      // Handle login failure (optional)
      window.alert("Referral creation failed. Please try again.");
    }
  };

  return (
    <div className="create-referral">
      <form className="referral-form" onSubmit={handleRef}>
        <div className="refs">
          <div>
            <div className="ref-input">
              <input
                type="text"
                placeholder="Title"
                // value={user}
                // onChange={(e) => setUser(e.target.value)}
              />
            </div>
          </div>
          <div className="ref-input">
            <textarea type="text" placeholder="Content" />
          </div>
          <div className="ref-dropdown">
            <label htmlFor="ref-company">Select Company:</label>
            <br />
            <select id="ref-company" name="ref-company">
              <option value="option1">Loopli</option>
              <option value="option2">SSG</option>
              <option value="option3">Technova</option>
              <option value="option4">Alphabet Ltd</option>
              <option value="option5">Delta</option>
              <option value="option6">Smart Inc</option>
              <option value="option7">QA Ltd</option>
            </select>
          </div>
          <div className="ref-input">
            <input
              type="text"
              placeholder="Referee Client"
              className="referral-client"
            />
          </div>
          <div className="ref-input">
            <input
              type="text"
              placeholder="Referee Email"
              className="referral-email"
            />
          </div>
        </div>
        <div className="refsubmit-container">
          <button className="ref-submit" type="submit">
            Send Referral
          </button>
        </div>
      </form>
      {showModal && (
        <Modal
          message="Referral creation successful!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CreateRefs;
