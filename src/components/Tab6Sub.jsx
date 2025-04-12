// import React, { useState, useEffect } from "react";
// import tab6SubStyle from "./tab6Sub.module.css";

// export default function Tab6Sub({ unavailableId, filterType }) {
//   const [getCommoditys, setCommoditys] = useState([]);
//   const [removedCommodities, setRemovedCommodities] = useState([]); // محصولات حذف‌شده

//   // دریافت لیست اولیه محصولات
//   useEffect(() => {
//     fetch("https://redesigned-winner-qyvy.onrender.com/api/commoditys")
//       .then((response) => response.json())
//       .then((data) => {
//         setCommoditys(data);
//       })
//       .catch((error) => {
//         alert("Error fetching commodities!");
//         console.error("Fetch error:", error);
//       });
//   }, []);

//   // مدیریت حذف محصولات براساس unavailableId
//   useEffect(() => {
//     if (unavailableId) {
//       const removedCommodity = getCommoditys.find(
//         (commodity) => commodity.id === unavailableId
//       );

//       if (removedCommodity) {
//         // افزودن محصول به لیست محصولات حذف‌شده
//         setRemovedCommodities((prevRemoved) => [
//           ...prevRemoved,
//           removedCommodity,
//         ]);
//         // حذف محصول از لیست اصلی
//         setCommoditys((prevCommoditys) =>
//           prevCommoditys.filter((commodity) => commodity.id !== unavailableId)
//         );
//       }
//     }
//   }, [unavailableId, getCommoditys]);

//   return (
//     <div className={tab6SubStyle.mainTab6ContentRows}>
//       {filterType === "available" ? (
//         <>
//           {getCommoditys.length > 0 ? (
//             getCommoditys.map((commodity) => (
//               <div
//                 key={commodity.id}
//                 className={tab6SubStyle.mainTab6ContentRow}
//               >
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={`${tab6SubStyle.divImg}`}>
//                     <img
//                       className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
//                       src={commodity.image}
//                       alt={commodity.name}
//                     />
//                   </div>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.name}
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.mainPrice}
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.Inventory} دستگاه
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={tab6SubStyle.mainTab6ContentColintDiv}>
//                     سفارشات : {commodity.DailyOrders} دستگاه
//                   </div>
//                   <div className={tab6SubStyle.mainTab6ContentColintDiv}>
//                     خرید : {commodity.Dailyshopping} دستگاه
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>محصولی برای نمایش وجود ندارد.</p>
//           )}
//         </>
//       ) : (
//         <>
//           {removedCommodities.length > 0 ? (
//             removedCommodities.map((commodity) => (
//               <div
//                 key={commodity.id}
//                 className={tab6SubStyle.mainTab6ContentRow}
//               >
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={`${tab6SubStyle.divImg}`}>
//                     <img
//                       className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
//                       src={commodity.image}
//                       alt={commodity.name}
//                     />
//                   </div>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.name}
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     قیمت سایت: {commodity.mainPrice} تومان
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.Inventory} دستگاه
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={tab6SubStyle.mainTab6ContentColintDiv}>
//                     سفارشات : {commodity.DailyOrders} دستگاه
//                   </div>
//                   <div className={tab6SubStyle.mainTab6ContentColintDiv}>
//                     خرید : {commodity.Dailyshopping} دستگاه
//                   </div>
//                   <button>موجود شود</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className={tab6SubStyle.mainTab6ContentColdiv}></div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import tab6SubStyle from "./tab6Sub.module.css";

export default function Tab6Sub({ unavailableId, filterType }) {
  const [getCommoditys, setCommoditys] = useState([]); // لیست کالاهای موجود
  const [removedCommodities, setRemovedCommodities] = useState([]); // لیست کالاهای ناموجود
  const [processedIds, setProcessedIds] = useState(new Set()); // ذخیره آی‌دی‌های پردازش‌شده

  // دریافت لیست اولیه کالاها
  useEffect(() => {
    fetch("https://redesigned-winner-qyvy.onrender.com/api/commoditys")
      .then((response) => response.json())
      .then((data) => {
        setCommoditys(data); // ذخیره لیست موجودی اولیه
      })
      .catch((error) => {
        alert("Error fetching commodities!");
        console.error("Fetch error:", error);
      });
  }, []);

  // مدیریت آی‌دی ناموجود و جلوگیری از پردازش مجدد
  useEffect(() => {
    if (unavailableId && !processedIds.has(unavailableId)) {
      const removedCommodity = getCommoditys.find(
        (commodity) => commodity.id === unavailableId
      );

      if (removedCommodity) {
        setRemovedCommodities((prevRemoved) => [
          ...prevRemoved,
          removedCommodity,
        ]);
        setCommoditys((prevCommoditys) =>
          prevCommoditys.filter((commodity) => commodity.id !== unavailableId)
        );
        setProcessedIds((prevProcessed) =>
          new Set(prevProcessed).add(unavailableId)
        );
      }
    }
  }, [unavailableId, getCommoditys, processedIds]);

  // مدیریت بازگرداندن کالا به لیست موجودی
  const handleReturnToAvailable = (id) => {
    const returnedCommodity = removedCommodities.find(
      (commodity) => commodity.id === id
    );

    if (returnedCommodity) {
      setCommoditys((prevCommoditys) => [...prevCommoditys, returnedCommodity]); // بازگشت به لیست موجودی‌ها
      setRemovedCommodities((prevRemoved) =>
        prevRemoved.filter((commodity) => commodity.id !== id)
      ); // حذف از لیست ناموجودها
    }
  };

  return (
    <div className={tab6SubStyle.mainTab6ContentRows}>
      {filterType === "available" ? (
        <>
          {getCommoditys.length > 0 ? (
            getCommoditys.map((commodity) => (
              <div
                key={commodity.id}
                className={tab6SubStyle.mainTab6ContentRow}
              >
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <div className={`${tab6SubStyle.divImg}`}>
                    <img
                      className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
                      src={commodity.image}
                      alt={commodity.name}
                    />
                  </div>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.name}
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default", height: "auto" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.mainPrice}
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default", height: "auto" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.Inventory} دستگاه
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <div className={tab6SubStyle.mainTab6ContentColintDiv}>
                    سفارشات : {commodity.DailyOrders} دستگاه
                  </div>
                  <div className={tab6SubStyle.mainTab6ContentColintDiv}>
                    خرید : {commodity.Dailyshopping} دستگاه
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>محصولی برای نمایش وجود ندارد.</p>
          )}
        </>
      ) : (
        <>
          {removedCommodities.length > 0 ? (
            removedCommodities.map((commodity) => (
              <div
                key={commodity.id}
                className={tab6SubStyle.mainTab6ContentRow}
              >
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <div className={`${tab6SubStyle.divImg}`}>
                    <img
                      className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
                      src={commodity.image}
                      alt={commodity.name}
                    />
                  </div>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.name}
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default", height: "auto" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.mainPrice}
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <span
                    style={{ cursor: "default", height: "auto" }}
                    className={tab6SubStyle.spans}
                  >
                    {commodity.Inventory} دستگاه
                  </span>
                </div>
                <div className={tab6SubStyle.mainTab6ContentCol}>
                  <div
                    className={tab6SubStyle.mainTab6ContentColintDiv}
                    style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.23)" }}
                  >
                    سفارشات : {commodity.DailyOrders} دستگاه
                  </div>
                  <div className={tab6SubStyle.mainTab6ContentColintDiv}>
                    خرید : {commodity.Dailyshopping} دستگاه
                  </div>
                  <button
                    onClick={() => handleReturnToAvailable(commodity.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      margin: "5px 0",
                      height: "18%",
                      fontSize: 14,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    موجود شود
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>هیچ کالای ناموجودی وجود ندارد.</p>
          )}
        </>
      )}
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import tab6SubStyle from "./tab6Sub.module.css";

// export default function Tab6Sub({ unavailableId, filterType }) {
//   const [getCommoditys, setCommoditys] = useState([]); // لیست کالاهای موجود
//   const [removedCommodities, setRemovedCommodities] = useState([]); // لیست کالاهای ناموجود

//   // دریافت لیست اولیه کالاها
//   useEffect(() => {
//     fetch("https://redesigned-winner-qyvy.onrender.com/api/commoditys")
//       .then((response) => response.json())
//       .then((data) => {
//         setCommoditys(data); // ذخیره لیست موجودی اولیه
//       })
//       .catch((error) => {
//         alert("Error fetching commodities!");
//         console.error("Fetch error:", error);
//       });
//   }, []);

//   // مدیریت آیتم‌های ناموجود براساس unavailableId
//   useEffect(() => {
//     if (unavailableId) {
//       const removedCommodity = getCommoditys.find(
//         (commodity) => commodity.id === unavailableId
//       );

//       if (removedCommodity) {
//         setRemovedCommodities((prevRemoved) => [
//           ...prevRemoved,
//           removedCommodity,
//         ]);
//         setCommoditys((prevCommoditys) =>
//           prevCommoditys.filter((commodity) => commodity.id !== unavailableId)
//         );
//       }
//     }
//   }, [unavailableId, getCommoditys]);

// // مدیریت بازگرداندن کالا از ناموجود به موجود
// const handleReturnToAvailable = (id) => {
//   const returnedCommodity = removedCommodities.find(
//     (commodity) => commodity.id === id
//   );

//   if (returnedCommodity) {
//     // حذف آیتم از ناموجود و افزودن به موجود
//     setCommoditys((prevCommoditys) => [...prevCommoditys, returnedCommodity]);
//     setRemovedCommodities((prevRemoved) =>
//       prevRemoved.filter((commodity) => commodity.id !== id)
//     );
//   }
// };

//   return (
//     <div className={tab6SubStyle.mainTab6ContentRows}>
//       {/* لیست کالاهای موجود */}
//       {filterType === "available" ? (
//         <>
//           {getCommoditys.length > 0 ? (
//             getCommoditys.map((commodity) => (
//               <div
//                 key={commodity.id}
//                 className={tab6SubStyle.mainTab6ContentRow}
//               >
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={`${tab6SubStyle.divImg}`}>
//                     <img
//                       className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
//                       src={commodity.image}
//                       alt={commodity.name}
//                     />
//                   </div>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.name}
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     قیمت سایت: {commodity.mainPrice} تومان
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.Inventory} دستگاه
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>محصولی برای نمایش وجود ندارد.</p>
//           )}
//         </>
//       ) : (
//         <>
//           {/* لیست کالاهای ناموجود */}
//           {removedCommodities.length > 0 ? (
//             removedCommodities.map((commodity) => (
//               <div
//                 key={commodity.id}
//                 className={tab6SubStyle.mainTab6ContentRow}
//               >
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <div className={`${tab6SubStyle.divImg}`}>
//                     <img
//                       className={`col-12 col-md-6 ${tab6SubStyle.divImginimg}`}
//                       src={commodity.image}
//                       alt={commodity.name}
//                     />
//                   </div>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.name}
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     قیمت سایت: {commodity.mainPrice} تومان
//                   </span>
//                 </div>
//                 <div className={tab6SubStyle.mainTab6ContentCol}>
//                   <span
//                     style={{ cursor: "default", height: "auto" }}
//                     className={tab6SubStyle.spans}
//                   >
//                     {commodity.Inventory} دستگاه
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleReturnToAvailable(commodity.id)}
//                   style={{
//                     backgroundColor: "red",
//                     color: "white",
//                     border: "none",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   موجود شود
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>هیچ کالای ناموجودی وجود ندارد.</p>
//           )}
//         </>
//       )}
//     </div>
//   );

// }
