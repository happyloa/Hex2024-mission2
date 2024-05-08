import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_and_paragraph_and_email}>
        <Link href="/">
          <img
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/logo.svg"
            alt="網站 Logo"
          />
        </Link>
        <p>
          若有數位產品設計和開發相關問題
          <br />
          歡迎填寫表單，或直接與我聯絡！
        </p>
        <a href="mailto:service@hexschool.com">service@hexschool.com</a>
      </div>
      <div className={styles.links}>
        <a href="#">
          <img src="/image/icon/list.svg" alt="表單 icon" />
          填寫表單
        </a>
        <a href="#" target="_blank">
          <img src="/image/icon/instagram.svg" alt="Instagram 連結" />
          hexschool_demo
        </a>
        <a href="#" target="_blank">
          <img src="/image/icon/facebook.svg" alt="Facebook 連結" />
          hexschoolTW
        </a>
      </div>
    </footer>
  );
}
