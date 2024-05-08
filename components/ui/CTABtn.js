import Link from "next/link";

import styles from "./CTABtn.module.css";

export default function CTABtn({ href = "#", content = "輸入按鈕內容" }) {
  return (
    <Link href={href} className={styles.link}>
      {content}
      <img src="/image/icon/arrow_forward.svg" alt="箭頭圖示"/>
    </Link>
  );
}
