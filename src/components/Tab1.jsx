import React, { useState, useEffect } from "react";
import tab1dashboardStyle from "./tab1.module.css";
import { XSquareFill } from "react-bootstrap-icons";
import StarRate from "./StarRate";
import ChangeInfo from "./ChangeInfo";
// import Login from "./Login";
import mob from "../assets/mob.webp";
import tablet from "../assets/tablet.png";
import watch from "../assets/Smartwatch.jpg";
import accessories from "../assets/accessories.jpg";
import backReport from "../assets/2611-sales.gif";
import payReport from "../assets/421-wallet-purse.gif";
import backSupp from "../assets/DIGIKALA-LOGO-2.jpg";
import kala from "../assets/108-box.gif";
import ChangeImage from "./ChangeImage";
import Header from "./Header";
// import { Route, Routes } from "react-router-dom";

export default function Tab1({
  seller,
  UserCode,
  mobile,
  setPrices,
  delIDtab6sub,
}) {
  const [ACCESSIMGs, setACCESSIMGs] = useState([]);
  const [ACCESSNames, setACCESSNames] = useState([]);
  const [ACCESSMainPrice, setACCESSMainPrice] = useState([]);
  const [mobIMGs, setMobIMGs] = useState([]);
  const [mobNames, setMobNames] = useState([]);
  const [mobMainPrice, setMobMainPrice] = useState([]);
  const [TabIMGs, setTabIMGs] = useState([]);
  const [TabNames, setTabNames] = useState([]);
  const [TabMainPrice, setTabMainPrice] = useState([]);
  const [WatchIMGs, setWatchIMGs] = useState([]);
  const [WatchNames, setWatchNames] = useState([]);
  const [WatchMainPrice, setWatchMainPrice] = useState([]);
  const [getCommoditys, setCommoditys] = useState([]);
  const [isCoverVisibleACCESS, setIsCoverVisibleACCESS] = useState(false);
  const [isCoverVisibleMOB, setIsCoverVisibleMOB] = useState(false);
  const [isCoverVisibleTAB, setIsCoverVisibleTAB] = useState(false);
  const [isCoverVisibleWATCH, setIsCoverVisibleWATCH] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});
  const [hoverStyletab, setHoverStyletab] = useState({});
  const [hoverStylewATCH, setHoverStylewATCH] = useState({});
  const [hoverStyleAccessories, setHoverStyleAccessories] = useState({});

  const [sellerName, setSellerName] = useState(seller);
  // const [eSCbtn, setESCbtn] = useState("خروج");
  // const exiting = () => {
  //   if (eSCbtn === "خروج") {
  //     return <Login />;
  //   }
  // };
  const handleMouseEnter = () => {
    setHoverStyle({ transform: "scale(1.1)" });
  };

  const handleMouseLeave = () => {
    setHoverStyle({ transform: "scale(1)" });
  };
  const handleMouseEntertABLET = () => {
    setHoverStyletab({ transform: "scale(1.1)" });
  };

  const handleMouseLeavetABLET = () => {
    setHoverStyletab({ transform: "scale(1)" });
  };
  const handleMouseEnterWatch = () => {
    setHoverStylewATCH({ transform: "scale(1.1)" });
  };

  const handleMouseLeaveWatch = () => {
    setHoverStylewATCH({ transform: "scale(1)" });
  };
  const handleMouseEnterAccessories = () => {
    setHoverStyleAccessories({ transform: "scale(1.1)" });
  };

  const handleMouseLeaveAccessories = () => {
    setHoverStyleAccessories({ transform: "scale(1)" });
  };

  // دریافت داده‌ها از API
  useEffect(() => {
    fetch("https://redesigned-winner-qyvy.onrender.com/api/commoditys")
      .then((result) => result.json())
      .then((resultFC) => {
        setCommoditys(resultFC);
      })
      .catch((error) => {
        alert("مشکلی رخ داده است");
        console.log(error);
      });
  }, []);

  // // مدیریت حذف کالا
  // const handleDelete = (id) => {
  //   console.log("Deleting commodity with id:", id);
  //   const updatedItems = getCommoditys.filter(
  //     (commodity) => commodity.id !== id
  //   );
  //   setCommoditys(updatedItems);
  //   delIDtab6sub(id);
  // };
  const sendIDtoDashboard = (id) => {
    console.log("Sending ID to dashboard:", id);
    // اینجا عملیات ارسال به داشبورد را انجام دهید
  };
  // مدیریت اضافه کردن به لیست ناموجود بدون حذف از موجودی
  const handleDelete = (id) => {
    console.log("Commodity marked as unavailable with id:", id);

    // نمایش هشدار به کاربر
    alert("کالا به لیست ناموجودها در تب کالا اضافه شد.");

    // ارسال آی‌دی به تب 6 ساب
    delIDtab6sub(id);

    // ارسال آی‌دی به داشبورد (این بخش به رفتار داشبورد وابسته است)
    sendIDtoDashboard(id);
  };

  // توابع مدیریت کاور
  const handleImageClickMOB = () => {
    setIsCoverVisibleMOB(true);
    const filteredDataMob = getCommoditys.filter(
      (item) => item.group === "موبایل"
    );
    setMobIMGs(filteredDataMob.map((e) => e.image));
    setMobNames(filteredDataMob.map((e) => e.name));
    setMobMainPrice(filteredDataMob.map((e) => e.mainPrice));
  };

  const handleImageClickACCESS = () => {
    setIsCoverVisibleACCESS(true);
    const filteredAccessories = getCommoditys.filter(
      (item) => item.group === "لوازم جانبی"
    );
    setACCESSIMGs(filteredAccessories.map((e) => e.image));
    setACCESSNames(filteredAccessories.map((e) => e.name));
    setACCESSMainPrice(filteredAccessories.map((e) => e.mainPrice));
  };

  const handleImageClickTAB = () => {
    setIsCoverVisibleTAB(true);
    const filteredDataTab = getCommoditys.filter(
      (item) => item.group === "تبلت"
    );
    setTabIMGs(filteredDataTab.map((e) => e.image));
    setTabNames(filteredDataTab.map((e) => e.name));
    setTabMainPrice(filteredDataTab.map((e) => e.mainPrice));
  };

  const handleImageClickWATCH = () => {
    setIsCoverVisibleWATCH(true);
    const filteredDataWatch = getCommoditys.filter(
      (item) => item.group === "ساعت هوشمند"
    );
    setWatchIMGs(filteredDataWatch.map((e) => e.image));
    setWatchNames(filteredDataWatch.map((e) => e.name));
    setWatchMainPrice(filteredDataWatch.map((e) => e.mainPrice));
  };

  const closeCover = () => {
    setIsCoverVisibleACCESS(false);
    setIsCoverVisibleMOB(false);
    setIsCoverVisibleTAB(false);
    setIsCoverVisibleWATCH(false);
  };
  const [changeMoboPrice, setChangeMoboPrice] = useState({}); // ذخیره قیمت‌های تغییر‌یافته

  // ارسال مقدار به کامپوننت والد
  const handleSendPrice = (id) => {
    const price = changeMoboPrice[id]; // دریافت مقدار مرتبط با id
    if (!price) {
      alert("لطفاً مقدار قیمت را وارد کنید!");
      return;
    }

    // ارسال مقدار به والد
    setPrices((prevPrices) => ({
      ...prevPrices,
      [id]: price, // به‌روزرسانی قیمت‌ها بر اساس id
    }));
    alert(`قیمت ${price} برای آیتم با آی‌دی ${id} ذخیره شد!`);
  };
  // تابع برای فرمت‌دهی عدد
  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // اضافه کردن کاما هر سه رقم
  };
  // // مدیریت تغییر مقدار وروردی و فرمنت دهی
  const handleFormattedInputChange = (id, value) => {
    const rawValue = value.replace(/,/g, ""); // حذف کاماهای قبلی
    if (!isNaN(rawValue)) {
      const formattedValue = formatNumber(rawValue); // فرمت‌دهی سه‌رقمی
      setChangeMoboPrice((prevValues) => ({
        ...prevValues,
        [id]: formattedValue, // ذخیره مقدار فرمت‌ شده
      }));
    }
  };

  return (
    <>
      {/* <Header  /> */}
      <div className={tab1dashboardStyle.mainT1}>
        {isCoverVisibleMOB && (
          <div className={tab1dashboardStyle.coverly}>
            <button
              onClick={closeCover}
              className={tab1dashboardStyle.coverlyClose}
            >
              <XSquareFill
                style={{
                  fill: "red",
                  width: 30,
                  height: 30,
                  display: "flex",
                }}
              />
            </button>
            <div
              className={`col-11 col-md-10 ${tab1dashboardStyle.coverlyInter}`}
            >
              <h2 className={tab1dashboardStyle.coverlyColTIT}>موبایل</h2>
              <div className={`col-12 ${tab1dashboardStyle.coverlyCol}`}>
                {mobIMGs.map((img, index) => {
                  const commodity = getCommoditys.find(
                    (item) => item.image === img
                  );
                  return commodity ? (
                    <div
                      key={commodity.id}
                      className={`col-12 col-md-6 ${tab1dashboardStyle.coverlyCol}`}
                    >
                      <img
                        style={{ padding: "20px" }}
                        src={img}
                        alt={mobNames[index]}
                      />
                      <div className={tab1dashboardStyle.coverlyColDivCont}>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          {mobNames[index]}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت اصلی : {`${mobMainPrice[index]} تومان`}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت سایت :{" "}
                          {changeMoboPrice[commodity.id] ||
                            "......................."}
                          تومان
                        </span>
                        <input
                          style={{
                            textAlign: "center",
                            border: "2px solid #09A88A",
                            borderRadius: 5,
                            backgroundColor: "rgb(198, 242, 234)",
                          }}
                          type="text"
                          placeholder="قیمت جدید "
                          value={changeMoboPrice[commodity.id] || ""} // مقدار مرتبط با id
                          onChange={(e) =>
                            handleFormattedInputChange(
                              commodity.id,
                              e.target.value
                            )
                          } // مدیریت ورودی با فرمت‌دهی
                        />

                        <div className={tab1dashboardStyle.coverlyColDivRate}>
                          <span>میزان رضایت از فروش</span>
                          <StarRate />
                        </div>
                        <button
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: " 0 5px 2px",
                            fontSize: "16px",
                          }}
                          onClick={() => handleDelete(commodity.id)}
                        >
                          ناموجود شود
                        </button>

                        <button
                          onClick={() => handleSendPrice(commodity.id)} // ارسال قیمت با آی‌دی
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: "0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ثبت قیمت
                        </button>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
        {isCoverVisibleTAB && (
          <div className={tab1dashboardStyle.coverly}>
            <button
              onClick={closeCover}
              className={tab1dashboardStyle.coverlyClose}
            >
              <XSquareFill
                style={{
                  fill: "red",
                  width: 30,
                  height: 30,
                  display: "flex",
                }}
              />
            </button>
            <div
              className={`col-11 col-md-10 ${tab1dashboardStyle.coverlyInter}`}
            >
              <h2 className={tab1dashboardStyle.coverlyColTIT}>تبلت</h2>
              <div className={`col-12 ${tab1dashboardStyle.coverlyCol}`}>
                {TabIMGs.map((img, index) => {
                  const commodity = getCommoditys.find(
                    (item) => item.image === img
                  );
                  return commodity ? (
                    <div
                      key={commodity.id}
                      className={`col-12 col-md-6 ${tab1dashboardStyle.coverlyCol}`}
                    >
                      <img
                        style={{ padding: "20px" }}
                        src={img}
                        alt={TabNames[index]}
                      />
                      <div className={tab1dashboardStyle.coverlyColDivCont}>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          {TabNames[index]}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت اصلی : {`${TabMainPrice[index]} تومان`}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت سایت :{" "}
                          {changeMoboPrice[commodity.id] ||
                            "......................."}
                          تومان
                        </span>
                        <input
                          style={{
                            textAlign: "center",
                            border: "2px solid #09A88A",
                            borderRadius: 5,
                            backgroundColor: "rgb(198, 242, 234)",
                          }}
                          type="text"
                          placeholder="قیمت جدید "
                          value={changeMoboPrice[commodity.id] || ""} // مقدار مرتبط با id
                          onChange={(e) =>
                            handleFormattedInputChange(
                              commodity.id,
                              e.target.value
                            )
                          } // مدیریت ورودی با فرمت‌دهی
                        />

                        <div className={tab1dashboardStyle.coverlyColDivRate}>
                          <span>میزان رضایت از فروش</span>
                          <StarRate />
                        </div>
                        <button
                          onClick={() => handleDelete(commodity.id)}
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: " 0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ناموجود شود
                        </button>
                        <button
                          onClick={() => handleSendPrice(commodity.id)} // ارسال قیمت با آی‌دی
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: "0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ثبت قیمت
                        </button>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
        {isCoverVisibleWATCH && (
          <div className={tab1dashboardStyle.coverly}>
            <button
              onClick={closeCover}
              className={tab1dashboardStyle.coverlyClose}
            >
              <XSquareFill
                style={{
                  fill: "red",
                  width: 30,
                  height: 30,
                  display: "flex",
                }}
              />
            </button>
            <div
              className={`col-11 col-md-10 ${tab1dashboardStyle.coverlyInter}`}
            >
              <h2 className={tab1dashboardStyle.coverlyColTIT}>ساعت هوشمند</h2>
              <div className={`col-12 ${tab1dashboardStyle.coverlyCol}`}>
                {WatchIMGs.map((img, index) => {
                  const commodity = getCommoditys.find(
                    (item) => item.image === img
                  );
                  return commodity ? (
                    <div
                      key={commodity.id}
                      className={`col-12 col-md-6 ${tab1dashboardStyle.coverlyCol}`}
                    >
                      <img
                        style={{ padding: "20px" }}
                        src={img}
                        alt={WatchNames[index]}
                      />
                      <div className={tab1dashboardStyle.coverlyColDivCont}>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          {WatchNames[index]}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت اصلی : {`${WatchMainPrice[index]} تومان`}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت سایت :{" "}
                          {changeMoboPrice[commodity.id] ||
                            "......................."}
                          تومان
                        </span>
                        <input
                          style={{
                            textAlign: "center",
                            border: "2px solid #09A88A",
                            borderRadius: 5,
                            backgroundColor: "rgb(198, 242, 234)",
                          }}
                          type="text"
                          placeholder="قیمت جدید "
                          value={changeMoboPrice[commodity.id] || ""} // مقدار مرتبط با id
                          onChange={(e) =>
                            handleFormattedInputChange(
                              commodity.id,
                              e.target.value
                            )
                          } // مدیریت ورودی با فرمت‌دهی
                        />

                        <div className={tab1dashboardStyle.coverlyColDivRate}>
                          <span>میزان رضایت از فروش</span>
                          <StarRate />
                        </div>
                        <button
                          onClick={() => handleDelete(commodity.id)}
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: " 0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ناموجود شود
                        </button>
                        <button
                          onClick={() => handleSendPrice(commodity.id)} // ارسال قیمت با آی‌دی
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: "0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ثبت قیمت
                        </button>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
        {isCoverVisibleACCESS && (
          <div className={tab1dashboardStyle.coverly}>
            <button
              onClick={closeCover}
              className={tab1dashboardStyle.coverlyClose}
            >
              <XSquareFill
                style={{
                  fill: "red",
                  width: 30,
                  height: 30,
                  display: "flex",
                }}
              />
            </button>
            <div
              style={{ border: "none" }}
              className={`col-11 col-md-10 ${tab1dashboardStyle.coverlyInter}`}
            >
              <h2 className={tab1dashboardStyle.coverlyColTIT}>لوازم جانبی</h2>
              <div className={`col-12 ${tab1dashboardStyle.coverlyCol}`}>
                {ACCESSIMGs.map((img, index) => {
                  const commodity = getCommoditys.find(
                    (item) => item.image === img
                  );
                  return commodity ? (
                    <div
                      key={commodity.id}
                      className={`col-12 col-md-6 ${tab1dashboardStyle.coverlyCol}`}
                    >
                      <img
                        style={{ padding: "20px" }}
                        src={img}
                        alt={ACCESSNames[index]}
                      />
                      <div className={tab1dashboardStyle.coverlyColDivCont}>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          {ACCESSNames[index]}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت اصلی : {`${ACCESSMainPrice[index]} تومان`}
                        </span>
                        <span className={tab1dashboardStyle.coverlyColSpanName}>
                          قیمت سایت :{" "}
                          {changeMoboPrice[commodity.id] ||
                            "......................."}
                          تومان
                        </span>
                        <input
                          style={{
                            textAlign: "center",
                            border: "2px solid #09A88A",
                            borderRadius: 5,
                            backgroundColor: "rgb(198, 242, 234)",
                          }}
                          type="text"
                          placeholder="قیمت جدید "
                          value={changeMoboPrice[commodity.id] || ""} // مقدار مرتبط با id
                          onChange={(e) =>
                            handleFormattedInputChange(
                              commodity.id,
                              e.target.value
                            )
                          } // مدیریت ورودی با فرمت‌دهی
                        />

                        <div className={tab1dashboardStyle.coverlyColDivRate}>
                          <span>میزان رضایت از فروش</span>
                          <StarRate />
                        </div>
                        <button
                          onClick={() => handleDelete(commodity.id)}
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: " 0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ناموجود شود
                        </button>
                        <button
                          onClick={() => handleSendPrice(commodity.id)} // ارسال قیمت با آی‌دی
                          style={{
                            margin: "10px 0",
                            backgroundColor: "#09A88A",
                            borderRadius: 5,
                            color: "white",
                            border: "none",
                            padding: "0 5px 2px",
                            fontSize: "16px",
                          }}
                        >
                          ثبت قیمت
                        </button>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}

        <div
          className={`col-4 col-sm-3 col-md-2 col-xl-1 ${tab1dashboardStyle.rightSide}`}
        >
          <div className={tab1dashboardStyle.profileInformaition}>
            <div
              style={{
                display: "flex",
                height: "50%",
                width: "100%",
                // backgroundColor: "red",
              }}
            >
              <ChangeImage
                className={tab1dashboardStyle.Image}
                style={tab1dashboardStyle.profileImageSelect}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "50%",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "1rem",
                  fontFamily: "SOGAND, TrainOne",
                  cursor: "default",
                }}
              >
                {sellerName}
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1rem",
                  fontFamily: "SOGAND",
                  letterSpacing: 2,
                  cursor: "default",
                  margin: "5px 0 0 0",
                }}
              >
                شماره موبایل :{mobile}
              </span>{" "}
              <br />
              <span
                className={tab1dashboardStyle.change}
                onClick={() => <ChangeInfo />}
              >
                {" "}
                تغییر مشخصات
              </span>
              <button className={tab1dashboardStyle.esc}>خروج</button>
            </div>
          </div>
        </div>
        <div
          className={`col-8 col-sm-9 col-md-10 col-xl-11 ${tab1dashboardStyle.leftSide}`}
        >
          <div
            className={`col-11 col-md-6 m-auto ${tab1dashboardStyle.inventory}`}
          >
            <div className={`col-12 ${tab1dashboardStyle.inventoryCover}`}>
              <h2 className={tab1dashboardStyle.title1}>
                <i
                  style={{ color: "#217c6b" }}
                  className={`bi bi-box-seam ${tab1dashboardStyle.icons}`}
                ></i>
                کالا
              </h2>
              <img
                className={`col-10 col-md-7 ${tab1dashboardStyle.inventoryCoverIMG}`}
                src={kala}
                alt=""
              />
              <ul className={tab1dashboardStyle.inventoryCoverList}>
                <li>موبایل</li>
                <li>تبلت</li>
                <li>ساعت هوشمند</li>
                <li>لوازم جانبی</li>
              </ul>
            </div>
            <h2 className={tab1dashboardStyle.title}>
              <i
                style={{ color: "#217c6b" }}
                className={`bi bi-box-seam ${tab1dashboardStyle.icons}`}
              ></i>
              کالا
            </h2>
            <div className={tab1dashboardStyle.prog1}>
              <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClickMOB("موبایل")}
                className={tab1dashboardStyle.mob1}
                style={hoverStyle}
                src={mob}
                alt="mobileInventory"
              />
              <span className={tab1dashboardStyle.mob1Span}>موبایل</span>
            </div>
            <div className={tab1dashboardStyle.prog2}>
              <img
                onMouseEnter={handleMouseEntertABLET}
                onMouseLeave={handleMouseLeavetABLET}
                onClick={() => handleImageClickTAB("تبلت")}
                className={tab1dashboardStyle.mob1}
                style={hoverStyletab}
                src={tablet}
                alt="mobileInventory"
              />
              <span className={tab1dashboardStyle.mob1Span}>تبلت</span>
            </div>
            <div className={tab1dashboardStyle.prog3}>
              <img
                onMouseEnter={handleMouseEnterWatch}
                onMouseLeave={handleMouseLeaveWatch}
                onClick={() => handleImageClickWATCH("ساعت هوشمند")}
                className={tab1dashboardStyle.mob1}
                style={hoverStylewATCH}
                src={watch}
                alt="mobileInventory"
              />
              <span className={tab1dashboardStyle.mob1Span}>ساعت هوشمند</span>
            </div>
            <div className={tab1dashboardStyle.prog4}>
              <img
                onMouseEnter={handleMouseEnterAccessories}
                onMouseLeave={handleMouseLeaveAccessories}
                onClick={() => handleImageClickACCESS("لوازم جانبی")}
                className={tab1dashboardStyle.mob1}
                style={hoverStyleAccessories}
                src={accessories}
                alt="mobileInventory"
              />
              <span className={tab1dashboardStyle.mob1Span}>لوازم جانبی</span>
            </div>
          </div>
          <div
            className={`col-11 col-md-6 m-auto ${tab1dashboardStyle.orders}`}
          >
            <h2
              style={{
                position: "sticky",
                top: 0,
                right: 0,
                backgroundColor: "white",
                padding: "10px 0",
                width: "auto",
                height: "10%",
                zIndex: "3",
                marginLeft: "100%",
              }}
              className={tab1dashboardStyle.title}
            >
              <i
                style={{ color: "#217c6b" }}
                className={`bi bi-clipboard-pulse ${tab1dashboardStyle.icons}`}
              ></i>
              گزارشات
            </h2>
            <div className={tab1dashboardStyle.mainInter}>
              <img
                className={`col-10 col-md-8 ${tab1dashboardStyle.mainInterIMG}`}
                src={backReport}
                alt=""
              />
              <span
                style={{ top: 60 }}
                className={tab1dashboardStyle.mainInterSpan}
              >
                فروش و درآمد{" "}
              </span>
              <span className={tab1dashboardStyle.mainInterSpan}>
                گزارش کلی عملکرد
              </span>
              <span
                style={{ top: 100 }}
                className={tab1dashboardStyle.mainInterSpan}
              >
                مرجوعی
              </span>
            </div>
          </div>
          <div
            className={`col-11 col-md-6 m-auto ${tab1dashboardStyle.shopping}`}
          >
            <h2
              className={tab1dashboardStyle.title}
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                padding: "10px 0",
              }}
            >
              <i
                style={{ color: "#217c6b" }}
                className={`bi bi-cash-coin ${tab1dashboardStyle.icons}`}
              ></i>
              وضعیت پرداخت
            </h2>
            <div className={`  ${tab1dashboardStyle.box}`}>
              <img
                className={`col-9 col-md-6 ${tab1dashboardStyle.boxIMg}`}
                src={payReport}
                alt=""
              />
              <span
                style={{ top: 60 }}
                className={tab1dashboardStyle.mainInterSpan}
              >
                بدهکار{" "}
              </span>
              <span className={tab1dashboardStyle.mainInterSpan}>بستانکار</span>
              <span
                style={{ top: 100 }}
                className={tab1dashboardStyle.mainInterSpan}
              >
                هزینه‌ها
              </span>
            </div>
          </div>
          <div
            className={`col-11 col-md-6 m-auto ${tab1dashboardStyle.satisfied}`}
          >
            <h2
              className={tab1dashboardStyle.title}
              style={{
                position: "absolute",
                top: 0,
                backgroundColor: "white",
                padding: "10px 0",
                zIndex: "3",
              }}
            >
              <i
                style={{ color: "#217c6b" }}
                className={`bi bi-info-square ${tab1dashboardStyle.icons}`}
              ></i>
              راهنمایی و پشتیبانی
            </h2>
            <img
              className={tab1dashboardStyle.satisfiedImg}
              src={backSupp}
              alt=""
            />
            <ul className={tab1dashboardStyle.satisfiedUL1}>
              <li>
                <i
                  style={{ margin: "0 0 0 8px" }}
                  className="bi bi-pin-angle"
                ></i>
                مرکز آموزش فروشندگان
              </li>
              <li>
                <i
                  style={{ margin: "0 0 0 8px" }}
                  className="bi bi-pin-angle"
                ></i>
                کالای غیر مجاز
              </li>
              <li>
                <i
                  style={{ margin: "0 0 0 8px" }}
                  className="bi bi-pin-angle"
                ></i>
                سوالات متداول
              </li>
              <li>
                <i
                  style={{ margin: "0 0 0 8px" }}
                  className="bi bi-pin-angle"
                ></i>
                درخواست پشتیبانی
              </li>
              <li style={{ display: "flex", flexDirection: "row" }}>
                <i
                  style={{
                    margin: "0 0 0 8px",
                    display: "flex",
                  }}
                  className="bi bi-pin-angle"
                ></i>
                <a
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  href="https://www.digikala.com/"
                >
                  دیجی‌کالا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
