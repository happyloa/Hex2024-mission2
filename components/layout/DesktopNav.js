import Link from "next/link";

import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.desktop_nav}>
      <ul className={styles.lists_wrapper}>
        <li>
          <Link href="/">首頁</Link>
          <span className={`${styles["border"]} ${styles["top-left"]}`}></span>
          <span className={`${styles["border"]} ${styles["top-right"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-left"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-right"]}`}></span>
        </li>
        <li>
          <Link href="/portfolio">作品集</Link>
          <span className={`${styles["border"]} ${styles["top-left"]}`}></span>
          <span className={`${styles["border"]} ${styles["top-right"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-left"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-right"]}`}></span>
        </li>
        <li>
          <Link href="/services">服務項目</Link>
          <span className={`${styles["border"]} ${styles["top-left"]}`}></span>
          <span className={`${styles["border"]} ${styles["top-right"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-left"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-right"]}`}></span>
        </li>
        <li>
          <Link href="/blog">部落格</Link>
          <span className={`${styles["border"]} ${styles["top-left"]}`}></span>
          <span className={`${styles["border"]} ${styles["top-right"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-left"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-right"]}`}></span>
        </li>
        <li>
          <Link href="/contact">聯絡我</Link>
          <span className={`${styles["border"]} ${styles["top-left"]}`}></span>
          <span className={`${styles["border"]} ${styles["top-right"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-left"]}`}></span>
          <span
            className={`${styles["border"]} ${styles["bottom-right"]}`}></span>
        </li>
      </ul>
    </nav>
  );
}
