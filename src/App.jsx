import React from "react";
import Login from "./components/Login";
import appStyle from "./app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab6 from "./components/Tab6";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
import Tab5 from "./components/Tab5";

export default function App() {
  return (
    // <>
    //   <div
    //     className={`col-12 d-flex justify-content-center align-items-center ${appStyle.main}`}
    //   >
    //     <Login />
    //   </div>
    // </>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="Dashboard" element={<Dashboard />} /> */}
      <Route path="Dashboard" element={<Tab1 />} />
      <Route path="Commodities" element={<Tab6 />} />
      <Route path="Reports" element={<Tab2 />} />
      <Route path="Payment-Status" element={<Tab3 />} />
      <Route path="Support" element={<Tab4 />} />
      <Route path="*" element={<Tab5 />} />
    </Routes>
  );
}
