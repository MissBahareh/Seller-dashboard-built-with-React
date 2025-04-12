// import React, { useState } from "react";
// import headerStyle from "./header.module.css";
// import logo from "../assets/dashLogo.png";
// export default function Header() {
//   const [activeTab, setActiveTab] = useState("داشبورد");
//   return (
//     <>
//       <header className={`col-12 ${headerStyle.header}`}>
//         <div
//           className={`col-4 col-sm-3
//              col-md-2 col-lg-2 col-xl-1 ${headerStyle.divlogo}`}
//         >
//           <a href="https://www.digikala.com/">
//             <img className={headerStyle.logo} src={logo} alt="دیجی کالا" />
//           </a>
//         </div>
//         <ul
//           className={`d-none d-sm-none d-md-flex col-md-11 col-lg-10 col-xl-11 ${headerStyle.ul}`}
//         >
//           <li
//             className={`${
//               activeTab === "داشبورد" ? headerStyle.activeTab : headerStyle.btns
//             }`}
//             onClick={() => setActiveTab("داشبورد")}
//           >
//             داشبورد
//           </li>
//           <li
//             className={`${
//               activeTab === "کالا" ? headerStyle.activeTab : headerStyle.btns
//             }`}
//             onClick={() => setActiveTab("کالا")}
//           >
//             کالا
//           </li>
//           <li
//             className={`${
//               activeTab === "گزارشات" ? headerStyle.activeTab : headerStyle.btns
//             }`}
//             onClick={() => setActiveTab("گزارشات")}
//           >
//             گزارشات
//           </li>
//           <li
//             className={`${
//               activeTab === "وضعیت پرداخت"
//                 ? headerStyle.activeTab
//                 : headerStyle.btns
//             }`}
//             onClick={() => setActiveTab("وضعیت پرداخت")}
//           >
//             وضعیت پرداخت
//           </li>
//           <li
//             className={`${
//               activeTab === "راهنمایی و پشتیبانی"
//                 ? headerStyle.activeTab
//                 : headerStyle.btns
//             }`}
//             onClick={() => setActiveTab("راهنمایی و پشتیبانی")}
//           >
//             راهنمایی و پشتیبانی
//           </li>
//         </ul>
//         <div
//           className={`col-8 col-sm-7  col-lg-10 d-flex d-sm-flex d-md-none ${headerStyle.menuBTN}`}
//         >
//           <i
//             className="bi bi-menu-button-wide"
//             style={{ fontSize: "24px", color: "white" }}
//           ></i>
//         </div>
//       </header>
//     </>
//   );
// }
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerStyle from "./header.module.css";
import logo from "../assets/dashLogo.png";

export default function Header({mobiee}) {
  const [activeTab, setActiveTab] = useState("داشبورد");
  const location = useLocation(); // برای بررسی مسیر فعلی

  return (
    <>
      <header className={`col-12 ${headerStyle.header}`}>
        <div
          className={`col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 ${headerStyle.divlogo}`}
        >
          <a href="https://www.digikala.com/">
            <img className={headerStyle.logo} src={logo} alt="دیجی کالا" />
          </a>
        </div>
        <ul
          className={`d-none d-sm-none d-md-flex col-md-11 col-lg-10 col-xl-11 ${headerStyle.ul}`}
        >
          <li
            className={
              location.pathname === "/Dashboard"
                ? headerStyle.activeTab
                : headerStyle.btns
            }
            onClick={() => setActiveTab("داشبورد")}
          >
            <Link to="/Dashboard">داشبورد</Link>
          </li>
          <li
            className={
              location.pathname === "/Commodities"
                ? headerStyle.activeTab
                : headerStyle.btns
            }
            onClick={() => setActiveTab("کالا")}
          >
            <Link to="/Commodities">کالا</Link>
          </li>
          <li
            className={
              location.pathname === "/Reports"
                ? headerStyle.activeTab
                : headerStyle.btns
            }
            onClick={() => setActiveTab("گزارشات")}
          >
            <Link to="/Reports">گزارشات</Link>
          </li>
          <li
            className={
              location.pathname === "/Payment-Status"
                ? headerStyle.activeTab
                : headerStyle.btns
            }
            onClick={() => setActiveTab("وضعیت پرداخت")}
          >
            <Link to="/Payment-Status">وضعیت پرداخت</Link>
          </li>
          <li
            className={
              location.pathname === "/Support"
                ? headerStyle.activeTab
                : headerStyle.btns
            }
            onClick={() => setActiveTab("راهنمایی و پشتیبانی")}
          >
            <Link to="/Support">راهنمایی و پشتیبانی</Link>
          </li>
        </ul>
        <div
          className={`col-8 col-sm-7 col-lg-10 d-flex d-sm-flex d-md-none ${headerStyle.menuBTN}`}
        >
          <i
            className="bi bi-menu-button-wide"
            style={{ fontSize: "24px", color: "white" }}
          ></i>
        </div>
      </header>
    </>
  );
}
