import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.elements_wrapper}>
        <div className={styles.logo_and_paragraph_and_email}>
          <Link href="/">
            <img src="/image/logo.svg" alt="網站 Logo" />
          </Link>
          <p>
            若有數位產品設計和開發相關問題
            <br />
            歡迎填寫表單，或直接與我聯絡！
          </p>
          <a href="mailto:service@hexschool.com?subject=您好，我想與您合作。&body=如果您看到這封 Email，請回覆我，期待與您合作，謝謝！">
            service@hexschool.com
          </a>
        </div>
        <div className={styles.links}>
          <Link href="/contact">
            <img src="/image/icon/list.svg" alt="表單 icon" />
            填寫表單
          </Link>
          <a href="#" target="_blank">
            <img src="/image/icon/instagram.svg" alt="Instagram 連結" />
            hexschool_demo
          </a>
          <a href="#" target="_blank">
            <img src="/image/icon/facebook.svg" alt="Facebook 連結" />
            hexschoolTW
          </a>
        </div>
      </div>
    </footer>
  );
}
