import { useState } from "react";

import logInImage1 from "../assets/logIn1.png";
import logInImage2 from "../assets/logIn2.png";
import logInStyles from "./login.module.css";
import PopUp from "./PopUp";

export default function Login() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const giveCode = () => {
    if (!value) {
      setError("لطفاً شماره موبایل خود را وارد کنید");
      return;
    }

    if (!value.match(/(^9[0-9]{9}$)|^(09[0-9]{9}$)/)) {
      setError("لطفاً شماره موبایل معتبر وارد کنید");
      return;
    }

    setError("");
    setValue("");
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (!newValue) {
      setError("لطفاً شماره موبایل خود را وارد کنید");
    } else if (!newValue.match(/(^9[0-9]{9}$)|^(09[0-9]{9}$)/)) {
      setError(" شماره موبایل معتبر نیست");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <div
          className={`col-10 col-sm-9 col-lg-6 flex-md-column flex-lg-row height-auto ${logInStyles.mainDiv}`}
        >
          <h2 className={logInStyles.h2Div}>ورود یا ثبت نام</h2>
          <div
            className={`col-12 flex-column-reverse flex-md-row ${logInStyles.mainInterDiv}`}
          >
            <div className={`col-12 col-md-6 ${logInStyles.rightDiv}`}>
              <div className={logInStyles.contentDiv}>
                <p>
                  سلام! برای فروش در دیجیکالا آماده اید؟ شماره موبایل خود را
                  وارد کنید:
                </p>
              </div>
              <div className={logInStyles.floatingLableGroup}>
                <label htmlFor="LogIn" className={logInStyles.floatingLable}>
                  شماره موبایل
                </label>
                <input
                  type="text"
                  name="LogIn"
                  id="LogIn"
                  value={value}
                  onChange={handleChange}
                  className={logInStyles.logInText}
                />
              </div>

              <br />

              <span className={logInStyles.formDivSpan}>{error}</span>

              <br />
              <button
                onClick={(e) => {
                  if (!value.match(/(^9[0-9]{9}$)|^(09[0-9]{9}$)/)) {
                    e.preventDefault();
                    giveCode();
                  } else {
                    setShowPopUp(true);
                  }
                }}
                className={logInStyles.formDivBTN}
              >
                دریافت کد
              </button>
            </div>
            <div
              className={`col-12 col-md-6 flex-column ${logInStyles.leftDiv}`}
            >
              <img
                className={logInStyles.leftImgDiv}
                src={logInImage1}
                style={{ width: 120 }}
                alt=""
              />
              <img
                className={logInStyles.leftImgDiv}
                src={logInImage2}
                alt=""
              />
            </div>
          </div>
          <div className={logInStyles.moreBtn}>
            <button style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.4)" }}>
              راهنمای ثبت نام
            </button>
            <button>تماس با پشتیبانی</button>
          </div>
        </div>
      </div>
      {showPopUp && <PopUp mobNUM={value} />}
    </>
  );
}
