import "./Tables.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Rdata = [
  {
    ssgcmref: "1",
    firstname: "Charlize",
    lastname: "Hoang",
    contactnum: "07459 29384615",
    company: "Loopli",
    refnum: "15",
  },
  {
    ssgcmref: "8",
    firstname: "Delia",
    lastname: "Borne",
    contactnum: "02084 13830684",
    company: "Delta",
    refnum: "223",
  },
  {
    ssgcmref: "12",
    firstname: "Edgar",
    lastname: "Lloyd",
    contactnum: "07495 28576034",
    company: "Smart Inc",
    refnum: "353",
  },
  {
    ssgcmref: "19",
    firstname: "Fred",
    lastname: "Wiggins",
    contactnum: "02078 93647451",
    company: "QA Ltd",
    refnum: "89",
  },
];

const ReceivedRefs = () => {
  const [showModal, setShowModal] = useState(false);

  const responseRef = (e) => {
    e.preventDefault();
    const acceptResponse = true;

    if (acceptResponse) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  };

  return (
    <table className="ref-table">
      <thead>
        <tr>
          <th className="ref-head">
            <div className="SSGCM ref">SSGCM company reference</div>
          </th>
          <th className="ref-head">First Name</th>
          <th className="ref-head">Last Name</th>
          <th className="ref-head">Phone Number</th>
          <th className="ref-head">Company Name</th>
          <th className="ref-head">Reference Number </th>
          <th className="ref-head">Action</th>
        </tr>
      </thead>
      <tbody>
        {Rdata.map((val, key) => {
          return (
            <tr className="ref-row" key={key}>
              <td className="ref-data">{val.ssgcmref}</td>
              <td className="ref-data">{val.firstname}</td>
              <td className="ref-data">{val.lastname}</td>
              <td className="ref-data">{val.contactnum}</td>
              <td className="ref-data">{val.company}</td>
              <td className="ref-data">{val.refnum}</td>
              <td className="ref-data">
                <div className="actionbtn" onSubmit={responseRef}>
                  <button className="accpt">Accept</button>
                  <button className="dcln">Decline</button>
                </div>
              </td>
              {showModal && (
                <Modal
                  message="Referral response received!"
                  onClose={() => setShowModal(false)}
                />
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReceivedRefs;
