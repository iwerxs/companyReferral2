import "./CreateCompany.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CompanyList from "./CompanyList";

const CreateCompany = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCompany = (e) => {
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
    <div className="company-container">
      <div className="create-company">
        <div className="company-title-container">
          <h2 className="company-title">Create Company</h2>
          <div className="company-underline"></div>
        </div>
        <form className="company-form" onSubmit={handleCompany}>
          <div className="companies">
            <div className="company-input">
              <input
                type="text"
                placeholder="Company"
                // value={user}
                // onChange={(e) => setUser(e.target.value)}
              />
            </div>
          </div>
          <div className="company-submit-container">
            <button className="company-submit" type="submit">
              Create Company
            </button>
          </div>
        </form>
        {showModal && (
          <Modal
            message="Company creation successful!"
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
      <CompanyList />
    </div>
  );
};

export default CreateCompany;
