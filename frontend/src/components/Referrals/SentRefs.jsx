import "./Tables.css";

const Sdata = [
  {
    ssgcmref: "1",
    firstname: "Owen",
    lastname: "Jones",
    contactnum: "07412 34567823",
    company: "Loopli",
    refnum: "134",
  },
  {
    ssgcmref: "1",
    firstname: "Michael",
    lastname: "Lane",
    contactnum: "07823 56789324",
    company: "Loopli",
    refnum: "2345",
  },
  {
    ssgcmref: "23",
    firstname: "Alice",
    lastname: "Evans",
    contactnum: "07345 78901245",
    company: "Technova",
    refnum: "3456",
  },
  {
    ssgcmref: "34",
    firstname: "Barbara",
    lastname: "Field",
    contactnum: "07747 6789014",
    company: "Alphabet Ltd",
    refnum: "435",
  },
];

const SentRefs = () => {
  return (
    <table className="ref-table">
      <thead>
        <tr>
          <th className="ref-head">
            <div className="SSGCM ref">SSGCM company reference</div>
          </th>
          <th className="ref-head">First Name</th>
          <th className="ref-head">Last Name</th>
          <th className="ref-head">Contact Number</th>
          <th className="ref-head">Company Name</th>
          <th className="ref-head">Reference Number</th>
        </tr>
      </thead>
      <tbody>
        {Sdata.map((val, key) => {
          return (
            <tr className="ref-row" key={key}>
              <td className="ref-data">{val.ssgcmref}</td>
              <td className="ref-data">{val.firstname}</td>
              <td className="ref-data">{val.lastname}</td>
              <td className="ref-data">{val.contactnum}</td>
              <td className="ref-data">{val.company}</td>
              <td className="ref-data">{val.refnum}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SentRefs;
