import { useState, useEffect } from "react";
import dashboardStyle from "./dashboard.module.css";
import logo from "../assets/dashLogo.png";
import { Tab1, Tab3, Tab4, Tab6 } from "../index";
// import Header from "./Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// import { BrowserRouter, Routes } from "react-router-dom";

export default function Dashboard({ userName, code, mobi }) {
  const [activeTab, setActiveTab] = useState("داشبورد");
  const [prices, setPrices] = useState({}); // ایجاد state برای مدیریت قیمت‌ها
  const [deleteIDtab6Sub, setdeleteIDtab6Sub] = useState([]);
  const receiveDeletedCommodityId = (id) => {
    setdeleteIDtab6Sub(id); // دریافت آی‌دی محصول حذف‌شده
  };
  const [headerData, setHeaderData] = useState({
    activeTab: "داشبورد", // تب فعال
    userInfo: "اطلاعات کاربر", // داده‌های مرتبط با هدر
  });

  return (
    <>
      <div className={dashboardStyle.main}>
        <header className={`col-12 ${dashboardStyle.header}`}>
          <div
            className={`col-4 col-sm-3
             col-md-2 col-lg-2 col-xl-1 ${dashboardStyle.divlogo}`}
          >
            <a href="https://www.digikala.com/">
              <img className={dashboardStyle.logo} src={logo} alt="دیجی کالا" />
            </a>
          </div>
          <ul className={`col-md-11 col-lg-10 col-xl-11 ${dashboardStyle.ul}`}>
            <li
              className={`${
                activeTab === "داشبورد"
                  ? dashboardStyle.activeTab
                  : dashboardStyle.btns
              }`}
              onClick={() => setActiveTab("داشبورد")}
            >
              داشبورد
            </li>
            <li
              className={`${
                activeTab === "گزارشات کالا"
                  ? dashboardStyle.activeTab
                  : dashboardStyle.btns
              }`}
              onClick={() => setActiveTab("گزارشات کالا")}
            >
              گزارشات کالا
            </li>
            {/* <li
              className={`${
                activeTab === "گزارشات"
                  ? dashboardStyle.activeTab
                  : dashboardStyle.btns
              }`}
              onClick={() => setActiveTab("گزارشات")}
            >
              گزارشات
            </li> */}
            <li
              className={`${
                activeTab === "وضعیت پرداخت"
                  ? dashboardStyle.activeTab
                  : dashboardStyle.btns
              }`}
              onClick={() => setActiveTab("وضعیت پرداخت")}
            >
              وضعیت پرداخت
            </li>
            <li
              className={`${
                activeTab === "پشتیبانی"
                  ? dashboardStyle.activeTab
                  : dashboardStyle.btns
              }`}
              onClick={() => setActiveTab("پشتیبانی")}
            >
              پشتیبانی
            </li>
          </ul>
          <div
            className={`col-8 col-sm-7  col-lg-10 d-flex d-sm-flex d-md-none ${dashboardStyle.menuBTN}`}
          >
            {/* <i
              className="bi bi-menu-button-wide"
              style={{ fontSize: "24px", color: "white" }}
            ></i> */}
          </div>
        </header>
        <main>
          <div style={{ display: activeTab === "داشبورد" ? "block" : "none" }}>
            <Tab1
              seller={userName}
              UserCode={code}
              mobile={mobi}
              setPrices={setPrices}
              delIDtab6sub={receiveDeletedCommodityId}
            />
          </div>
          {/* <div style={{ display: activeTab === "گزارشات" ? "block" : "none" }}>
            <Tab2 />
          </div> */}
          <div
            style={{ display: activeTab === "گزارشات کالا" ? "block" : "none" }}
          >
            <Tab6 prices={prices} unavailableId={deleteIDtab6Sub} />
          </div>
          <div
            style={{
              display: activeTab === "وضعیت پرداخت" ? "block" : "none",
            }}
          >
            <Tab3 />
          </div>
          <div
            style={{
              display: activeTab === "پشتیبانی" ? "block" : "none",
            }}
          >
            <Tab4 />
          </div>
        </main>
      </div>
    </>
  );
}

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import dashboardStyle from "./dashboard.module.css";
// import logo from "../assets/dashLogo.png";
// import { Tab1, Tab2, Tab3, Tab4, Tab6 } from "../index";
// import { Routes, Route } from "react-router-dom";
// export default function Dashboard({ userName, code, mobi }) {
//   const [prices, setPrices] = useState({});
//   const [deleteIDtab6Sub, setdeleteIDtab6Sub] = useState([]);

//   const receiveDeletedCommodityId = (id) => {
//     setdeleteIDtab6Sub(id);
//   };

//   return (
//     <>
//       <div className={dashboardStyle.main}>
//         <header className={`col-12 ${dashboardStyle.header}`}>
//           <div
//             className={`col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 ${dashboardStyle.divlogo}`}
//           >
//             <a href="https://www.digikala.com/">
//               <img className={dashboardStyle.logo} src={logo} alt="دیجی کالا" />
//             </a>
//           </div>
//           <ul
//             className={`d-none d-sm-none d-md-flex col-md-11 col-lg-10 col-xl-11 ${dashboardStyle.ul}`}
//           >
//             <li className={dashboardStyle.btns}>
//               <Link to="/Dashboard" className={dashboardStyle.link}>
//                 داشبورد
//               </Link>
//             </li>
//             <li className={dashboardStyle.btns}>
//               <Link to="/Commodities" className={dashboardStyle.link}>
//                 کالا
//               </Link>
//             </li>
//             <li className={dashboardStyle.btns}>
//               <Link to="/Reports" className={dashboardStyle.link}>
//                 گزارشات
//               </Link>
//             </li>
//             <li className={dashboardStyle.btns}>
//               <Link to="/Payment-Status" className={dashboardStyle.link}>
//                 وضعیت پرداخت
//               </Link>
//             </li>
//             <li className={dashboardStyle.btns}>
//               <Link to="/Support" className={dashboardStyle.link}>
//                 راهنمایی و پشتیبانی
//               </Link>
//             </li>
//           </ul>
//           <div
//             className={`col-8 col-sm-7 col-lg-10 d-flex d-sm-flex d-md-none ${dashboardStyle.menuBTN}`}
//           >
//             <i
//               className="bi bi-menu-button-wide"
//               style={{ fontSize: "24px", color: "white" }}
//             ></i>
//           </div>
//         </header>

//         <main>
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 <Tab1
//                   seller={userName}
//                   UserCode={code}
//                   mobile={mobi}
//                   setPrices={setPrices}
//                   delIDtab6sub={receiveDeletedCommodityId}
//                 />
//               }
//             />
//             <Route
//               path="/commoditys"
//               element={<Tab6 prices={prices} unavailableId={deleteIDtab6Sub} />}
//             />
//             <Route path="/reports" element={<Tab2 />} />
//             <Route path="/payment-status" element={<Tab3 />} />
//             <Route path="/support" element={<Tab4 />} />
//           </Routes>
//         </main>
//       </div>
//     </>
//   );
// }

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import dashboardStyle from "./dashboard.module.css";
// import logo from "../assets/dashLogo.png";
// import { Tab1, Tab3, Tab4, Tab6 } from "../index";

// export default function Dashboard({ userName, code, mobi }) {
//   const location = useLocation(); // بررسی مسیر فعلی برای تب فعال

//   return (
//     <div className={dashboardStyle.main}>
//       {/* هدر ثابت */}
//       <header className={`col-12 ${dashboardStyle.header}`}>
//         <div
//           className={`col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 ${dashboardStyle.divlogo}`}
//         >
//           <a href="https://www.digikala.com/">
//             <img className={dashboardStyle.logo} src={logo} alt="دیجی کالا" />
//           </a>
//         </div>
//         <ul
//           className={`d-none d-sm-none d-md-flex col-md-11 col-lg-10 col-xl-11 ${dashboardStyle.ul}`}
//         >
//           <button
//             onClick={() => {
//               console.log({ mobi });
//             }}
//           >
//             کلیک
//           </button>
//           <li
//             className={
//               location.pathname === "/tab1"
//                 ? dashboardStyle.activeTab
//                 : dashboardStyle.btns
//             }
//           >
//             <Link to="/Dashboard">داشبورد</Link>
//           </li>
//           <li
//             className={
//               location.pathname === "/tab6"
//                 ? dashboardStyle.activeTab
//                 : dashboardStyle.btns
//             }
//           >
//             <Link to="/Reports">گزارشات کالا</Link>
//           </li>
//           <li
//             className={
//               location.pathname === "/tab3"
//                 ? dashboardStyle.activeTab
//                 : dashboardStyle.btns
//             }
//           >
//             <Link to="/Payment-Status">وضعیت پرداخت</Link>
//           </li>
//           <li
//             className={
//               location.pathname === "/tab4"
//                 ? dashboardStyle.activeTab
//                 : dashboardStyle.btns
//             }
//           >
//             <Link to="/Support">راهنمایی و پشتیبانی</Link>
//           </li>
//         </ul>
//         <div
//           className={`col-8 col-sm-7 col-lg-10 d-flex d-sm-flex d-md-none ${dashboardStyle.menuBTN}`}
//         >
//           <i
//             className="bi bi-menu-button-wide"
//             style={{ fontSize: "24px", color: "white" }}
//           ></i>
//         </div>
//       </header>

//       {/* بخش محتوای اصلی */}
//       <main
//         style={{
//           backgroundColor: "blue",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           position: "absolute",
//           bottom: 0,
//           right: "0",
//         }}
//       >
//         <Routes>
//           <Route
//             path="/tab1"
//             element={<Tab1 seller={userName} UserCode={code} mobile={mobi} />}
//           />
//           <Route path="/tab6" element={<Tab6 />} />
//           <Route path="/tab3" element={<Tab3 />} />
//           <Route path="/tab4" element={<Tab4 />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }
