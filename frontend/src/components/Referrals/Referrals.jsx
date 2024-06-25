import { useState } from "react";
import "./Referrals.css";
import SentRefs from "./SentRefs";
import ReceivedRefs from "./ReceivedRefs";
import CreateRefs from "./CreateRefs";

const Referrals = () => {
  const [activeTab, setActiveTab] = useState("Referrals Sent");

  const renderContent = () => {
    switch (activeTab) {
      case "Referrals Sent":
        return <SentRefs />;
      case "Referrals Received":
        return <ReceivedRefs />;
      case "Create Referral":
        return <CreateRefs />;
      default:
        return <SentRefs />;
    }
  };

  return (
    <div className="Referrals">
      {/* <div className="welcome-text">
        <h2>Welcome Owen Jones!</h2>
      </div> */}
      <h2 className="ref-title">MY REMUNERATION</h2>
      <div className="ref-underline"></div>
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab("Referrals Sent")}
          className={activeTab === "Referrals Sent" ? "active" : ""}
        >
          Referrals Sent
        </button>
        <button
          onClick={() => setActiveTab("Referrals Received")}
          className={activeTab === "Referrals Received" ? "active" : ""}
        >
          Referrals Received
        </button>
        <button
          onClick={() => setActiveTab("Create Referral")}
          className={activeTab === "Create Referral" ? "active" : ""}
        >
          Create Referral
        </button>
      </div>
      <div className="tableHeader">{activeTab}</div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Referrals;
