import PageButtons from "../PageButtons/PageButtons";
import { useState } from "react";
import "./CreateUser.css";

const Udata = [
  {
    Id: "1",
    Username: "Owen Jones",
    Email: "owenjones@loopli.net",
    Role: "Super Admin",
    Company: "Loopli",
  },
  {
    Id: "2",
    Username: "Michael Lane",
    Email: "michaellane@loopli.net",
    Role: "Platform Admin",
    Company: "Loopli",
  },
  {
    Id: "3",
    Username: "Alice Evans",
    Email: "a.evans@technova.com",
    Role: "Company Admin",
    Company: "Technova",
  },
  {
    Id: "4",
    Username: "David Martinez",
    Email: "davidm@alphabetltd.com",
    Role: "Company Admin",
    Company: "Alphabet Ltd",
  },
  {
    Id: "5",
    Username: "Barbara Field",
    Email: "barbaraf@alphabetltd.com",
    Role: "User",
    Company: "Alphabet Ltd",
  },
  {
    Id: "6",
    Username: "Laura Moore",
    Email: "lauram@alphabetltd.net",
    Role: "User",
    Company: "Alphabet Ltd",
  },
  {
    Id: "7",
    Username: "Andrew Clark",
    Email: "a.clark@technova.com",
    Role: "User",
    Company: "Technova",
  },
  {
    Id: "8",
    Username: "Katherine Baker",
    Email: "k.baker@technova.com",
    Role: "User",
    Company: "Technova",
  },
  {
    Id: "9",
    Username: "Charlize Hoang",
    Email: "charlizehoang@loopli.net",
    Role: "User",
    Company: "Loopli",
  },
  {
    Id: "10",
    Username: "Jacob Roberts",
    Email: "jacob.roberts@delta.net",
    Role: "Company Admin",
    Company: "Delta",
  },
  {
    Id: "11",
    Username: "Delia Borne",
    Email: "delia.borne@delta.net",
    Role: "User",
    Company: "Delta",
  },
  {
    Id: "12",
    Username: "Edgar Lloyd",
    Email: "e.lloyd@smartinc.com",
    Role: "Company Admin",
    Company: "Smart Inc",
  },
  {
    Id: "13",
    Username: "Fred Wiggins",
    Email: "fred.w@qa-ltd.com",
    Role: "Company Admin",
    Company: "QA Ltd",
  },
  {
    Id: "14",
    Username: "Ryan Hall",
    Email: "ryan.h@qa-ltd.com",
    Role: "User",
    Company: "QA Ltd",
  },
  {
    Id: "15",
    Username: "Stephanie Green",
    Email: "stephanie.g@qa-ltd.com",
    Role: "User",
    Company: "QA Ltd",
  },
];

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Adjust this to the total number of pages you have
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-container">
      <div className="table-title">
        <h2 className="table-user-title">Users</h2>
        <div className="user-underline"></div>
      </div>
      <table className="user-table">
        <thead className="user-head">
          <th className="user-row">Id</th>
          <th className="user-row">Username</th>
          <th className="user-row">Email</th>
          <th className="user-row">Role</th>
          <th className="user-row">Company</th>
          <th className="user-row">Action</th>
        </thead>
        <tbody className="user-body">
          {Udata.map((val, key) => {
            return (
              <tr key={key}>
                <td className="user-row">{val.Id}</td>
                <td className="user-row">{val.Username}</td>
                <td className="user-row">{val.Email}</td>
                <td className="user-row">{val.Role}</td>
                <td className="user-row">{val.Company}</td>
                <td className="user-row">
                  <div className="delete-action">
                    <button className="delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PageButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default UserList;
