import { useState } from "react";
import tab6Style from "./tab6.module.css";
import Tab6Sub from "./Tab6Sub";
import logo from "../assets/dashLogo.png";
import { Link } from "react-router-dom";
export default function Tab6({ prices, unavailableId }) {
  const [filterType, setFilterType] = useState("available"); // "available" یا "unavailable"
  const [activeTab, setActiveTab] = useState("داشبورد");
  const handleFilterChange = (event) => {
    setFilterType(event.target.value); // به‌روزرسانی نوع فیلتر براساس انتخاب کاربر
  };

  return (
    <>
      {/* <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10%",
          width: "100%",
          color: "black",
          position: "absolute",
          top: "0",
          padding: 0,
        }}
      >
        <header className={`col-12 ${tab6Style.header}`}>
          <div
            className={`col-4 col-sm-3  col-md-2 col-lg-2 col-xl-1 ${tab6Style.divlogo}`}
          >
            <a href="https://www.digikala.com/">
              <img className={tab6Style.logo} src={logo} alt="دیجی کالا" />
            </a>
          </div>
          <ul
            className={`d-none d-sm-none d-md-flex col-md-11 col-lg-10 col-xl-11 ${tab6Style.ul}`}
          >
            <li
              className={`${
                activeTab === "داشبورد" ? tab6Style.activeTab : tab6Style.btns
              }`}
              // onClick={() => setActiveTab("داشبورد")}
            
            >
              <Link to={"Dashboard"}>داشبورد</Link>
              داشبورد
            </li>
            <li
              className={`${
                activeTab === "کالا" ? tab6Style.activeTab : tab6Style.btns
              }`}
              onClick={() => setActiveTab("کالا")}
            >
              کالا
            </li>
            <li
              className={`${
                activeTab === "گزارشات" ? tab6Style.activeTab : tab6Style.btns
              }`}
              onClick={() => setActiveTab("گزارشات")}
            >
              گزارشات
            </li>
            <li
              className={`${
                activeTab === "وضعیت پرداخت"
                  ? tab6Style.activeTab
                  : tab6Style.btns
              }`}
              onClick={() => setActiveTab("وضعیت پرداخت")}
            >
              وضعیت پرداخت
            </li>
            <li
              className={`${
                activeTab === "راهنمایی و پشتیبانی"
                  ? tab6Style.activeTab
                  : tab6Style.btns
              }`}
              onClick={() => setActiveTab("راهنمایی و پشتیبانی")}
            >
              راهنمایی و پشتیبانی
            </li>
          </ul>
          <div
            className={`col-8 col-sm-7  col-lg-10 d-flex d-sm-flex d-md-none ${tab6Style.menuBTN}`}
          >
            <i
              className="bi bi-menu-button-wide"
              style={{ fontSize: "24px", color: "white" }}
            ></i>
          </div>
        </header>
      </div> */}
      <div className={tab6Style.mainTab6}>
        <div className={tab6Style.mainTab6Tit}>
          <div className={`col-4 col-md-2 ${tab6Style.selectbox}`}>
            <select
              name="filterOptions"
              className={tab6Style.selectboxSelect}
              onChange={handleFilterChange} // مدیریت تغییر انتخاب
            >
              <option value="available">لیست کالا موجود در سایت</option>
              <option value="unavailable">لیست کالا ناموجود در سایت</option>
            </select>
          </div>
        </div>
        <div className={tab6Style.mainTab6Content}>
          <div className={tab6Style.mainTab6ContentRowTIT}>
            <div
              style={{ border: "1px solid rgba(0, 0, 0, 0)" }}
              className={tab6Style.mainTab6ContentColTIT}
            >
              <h2>image</h2>
            </div>
            <div className={tab6Style.mainTab6ContentColTIT}>
              <h2>عنوان کالا</h2>
            </div>
            <div className={tab6Style.mainTab6ContentColTIT}>
              <h2>
                قیمت اصلی
                <br />
                <span>(تومان)</span>
              </h2>
            </div>
            <div className={tab6Style.mainTab6ContentColTIT}>
              <h2>موجودی انبار</h2>
            </div>
            <div
              style={{ borderRadius: "10px 0 0 0" }}
              className={tab6Style.mainTab6ContentColTIT}
            >
              <h2>وضعیت روزانه</h2>
            </div>
          </div>
          <div className={tab6Style.mainTab6ContentRows}>
            {/* ارسال انتخاب فیلتر به Tab6Sub */}
            <Tab6Sub
              prices={prices}
              unavailableId={unavailableId}
              filterType={filterType} // "available" یا "unavailable"
            />
          </div>
        </div>
      </div>
    </>
  );
}
