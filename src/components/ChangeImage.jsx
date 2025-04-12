import React, { useRef, useState } from "react";
import tab1dashboardIMGStyle from "./changeImage.module.css";

function ImageChangerWithButton({ className, style, src }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        className={tab1dashboardIMGStyle.mainproIMAGE}
        style={{ marginBottom: "20px" }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Current"
            className={tab1dashboardIMGStyle.proIMAGE}
          />
        )}
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#09A88A",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          height: 30,
          fontSize: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
          // bottom: "0",
          padding: "10px 5px 12px",
          fontWeight: "600",
        }}
      >
        انتخاب تصویر
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageChangerWithButton;
