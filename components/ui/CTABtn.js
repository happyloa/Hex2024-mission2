import Link from "next/link";

import styles from "./CTABtn.module.css";

export default function CTABtn({ href = "#", content = "輸入按鈕內容" }) {
  // 共用 CTA 按鈕，附帶箭頭圖示並支援自訂連結
  return (
    <Link href={href} className={styles.link}>
      {content}
      <img src="/image/icon/arrow_forward.svg" alt="箭頭圖示"/>
    </Link>
  );
}
