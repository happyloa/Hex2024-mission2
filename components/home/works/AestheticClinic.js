import Link from "next/link";

import styles from "./AestheticClinic.module.css";

export default function AestheticClinic() {
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work3.png?raw=true"
          alt="醫美診所官網"
          className={styles.work_img}
        />
        <div className={styles.desktop_work_intro_wrapper}>
          <div className={styles.desktop_work_content}>
            <h3>醫美診所官網</h3>
            <p>永保青春的秘密，從粹究開始</p>
            <ul>
              <li>網頁設計</li>
              <li>響應式設計</li>
              <li>ＷordPress</li>
            </ul>
          </div>
          <Link href="/portfolio">
            完整介紹
            <img src="/arrow_forward.svg" />
          </Link>
        </div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>醫美診所官網</h3>
        <p>永保青春的秘密，從粹究開始</p>
        <ul>
          <li>網頁設計</li>
          <li>響應式設計</li>
          <li>ＷordPress</li>
        </ul>
        <Link href="/portfolio">
          完整介紹
          <img src="/arrow_forward.svg" />
        </Link>
      </div>
    </article>
  );
}
