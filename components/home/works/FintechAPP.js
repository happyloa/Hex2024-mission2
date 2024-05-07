import Link from "next/link";

import styles from "./FintechAPP.module.css";

export default function FintechAPP() {
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.desktop_work_intro_wrapper}>
            <div className={styles.desktop_work_content}>
              <h3>理財APP</h3>
              <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
              <ul>
                <li>APP設計</li>
                <li>iOS</li>
                <li>React</li>
              </ul>
            </div>
            <Link href="/portfolio">
              完整介紹
              <img src="/arrow_forward.svg" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>理財APP</h3>
        <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
        <ul>
          <li>APP設計</li>
          <li>iOS</li>
          <li>React</li>
        </ul>
        <Link href="/portfolio">
          完整介紹
          <img src="/arrow_forward.svg" />
        </Link>
      </div>
    </article>
  );
}
