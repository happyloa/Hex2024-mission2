"use client";

import { useState, useEffect } from "react";

import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({
  headingContent = "輸入標題",
  light = false,
}) {
  // 使用 useState 設定左右裝飾圖片的預設路徑
  const [srcImage1, setSrcImage1] = useState(
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true"
  );
  const [srcImage2, setSrcImage2] = useState(
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true"
  );

  useEffect(() => {
    // 設計一個函數 handleResize 來根據視窗大小調整圖片來源
    function handleResize() {
      if (window.innerWidth <= 375) {
        setSrcImage1(
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-sm.png?raw=true"
        );
        setSrcImage2(
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-sm.png?raw=true"
        );
      } else {
        setSrcImage1(
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true"
        );
        setSrcImage2(
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true"
        );
      }
    }

    // 監聽視窗大小改變的事件
    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化檢查

    // 清除事件監聽器
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 根據 light 屬性決定文字顏色
  const headingStyle = {
    color: light ? "#FFF" : "#3b3b3b", // 如果 light 為 true 則文字顏色為白色，否則為原始顏色
  };

  return (
    <div className={styles.heading_wrapper}>
      <img src={srcImage1} alt="標題左邊裝飾" />
      <h2 className={styles.heading} style={headingStyle}>
        {headingContent}
      </h2>
      <img src={srcImage2} alt="標題右邊裝飾" />
    </div>
  );
}
