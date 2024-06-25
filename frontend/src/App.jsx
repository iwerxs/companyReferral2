import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Referrals from "./components/Referrals/Referrals";
import Navbar from "./components/Navbar/Navbar";
import CreateUser from "./components/CreateUser/CreateUser";
import CreateCompany from "./components/CreateCompany/CreateCompany";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/createcompany" element={<CreateCompany />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// // import React from "react";
// import "./App.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Home from "./components/Navbar/Home";
// import MyAccount from "./components/MyAccount/MyAccount";
// import Navbar from "./components/Navbar/Navbar";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar />}>
//           <Route index element={<Home />} />
//           <Route path="/login" component={Login} />
//           <Route path="/myaccount" component={MyAccount} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
