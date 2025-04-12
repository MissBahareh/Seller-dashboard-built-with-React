import { useState, useEffect } from "react";
import popUpStyle from "./popUp.module.css";
import Dashboard from "./Dashboard";

export default function PopUp({ mobNUM }) {
  const [randomNum, setRandomNum] = useState("");
  const [valuePop, setValuePop] = useState("");
  const [errorPop, setErrorPop] = useState("");
  const [showDashboard, setDashboard] = useState(false);

  useEffect(() => {
    // string.padStart(targetLength, padString) =>>>> برای ایجاد عدد با چهر رقم میباشد که مقدار اول تعداد ارقام و مقدار دوم جایگزین در صورت نبودن مقدار چهارم(در اینجا) میباشد
    setRandomNum(String(Math.floor(Math.random() * 10000)).padStart(4, "0"));
  }, []);

  const handleChangePop = (e) => {
    e.preventDefault();
    if (!valuePop) {
      setErrorPop(" نام و نام خانوادگی خود را وارد کنید");
      return;
    } else {
      setDashboard(true);
    }
    setErrorPop("");
  };

  return (
    <>
      <div className={popUpStyle.mainDiv}>
        <div className={`col-7 col-sm-5 col-lg-3  ${popUpStyle.intermainDiv}`}>
          <p className={popUpStyle.intermainDivP}>
            <strong className={popUpStyle.intermainDivStrong}>
              کد کاربری شما : {randomNum}
            </strong>
            برای ورود به پنل ، لطفاً نام و نام خانوادگی خود را وارد کنید
          </p>
          <form
            className={popUpStyle.intermainDivForm}
            onSubmit={handleChangePop}
          >
            <input
              className={popUpStyle.intermainDivInput}
              type="text"
              value={valuePop}
              onChange={(e) => setValuePop(e.target.value)}
            />
            <span className={popUpStyle.intermainDivInputSpan}>{errorPop}</span>
            <input
              className={popUpStyle.intermainDivInputSUB}
              type="submit"
              value="ورود به پنل"
            />
          </form>
        </div>
      </div>
      {showDashboard && (
        <Dashboard userName={valuePop} code={randomNum} mobi={mobNUM} />
      )}
    </>
  );
}
