import PageButtons from "../PageButtons/PageButtons";
import { useState } from "react";

const Cdata = [
  {
    ID: "1",
    Company: "Loopli",
  },
  {
    ID: "2",
    Company: "Technova",
  },
  {
    ID: "3",
    Company: "Alphabet Ltd",
  },
  {
    ID: "4",
    Company: "Delta",
  },
  {
    ID: "5",
    Company: "Smart Inc",
  },
  {
    ID: "6",
    Company: "QA Ltd",
  },
  {
    ID: "7",
    Company: "BluePrint",
  },
  {
    ID: "8",
    Company: "UrbanEdge",
  },
  {
    ID: "9",
    Company: "Genesis Inc",
  },
  {
    ID: "10",
    Company: "SuperC",
  },
];

const CompanyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Adjust this to the total number of pages you have
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="company-table-container">
      <div className="company-title">
        <h2 className="table-company-title">Companies</h2>
        <div className="company-underline"></div>
      </div>
      <table className="company-table">
        <thead className="company-head">
          <th className="company-row">ID</th>
          <th className="company-row">Company</th>
          <th className="company-row">Action</th>
        </thead>
        <tbody className="company-body">
          {Cdata.map((val, key) => {
            return (
              <tr className="company-tr" key={key}>
                <td className="company-row">{val.ID}</td>
                <td className="company-row">{val.Company}</td>
                <td className="company-row">
                  <div className="company-delete-action">
                    <button className="company-delete-btn">Delete</button>
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

export default CompanyList;
