import Link from "next/link";

import styles from "./StarTravel.module.css";

export default function StarTravel() {
  return (
    <article>
      <div className={styles.container}>
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work1.png?raw=true"
          alt="星際旅行訂票平台"
          className={styles.work_img}
        />
        <div className={styles.desktop_work_intro_wrapper}>
          <div className={styles.desktop_work_content}>
            <h3>星際旅行訂票平台</h3>
            <p>悠遊宇宙的夢想，從這裡開始實現</p>
            <ul>
              <li>網頁設計</li>
              <li>響應式設計</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <Link href="/portfolio">
            完整介紹
            <img src="/arrow_forward.svg" />
          </Link>
        </div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>星際旅行訂票平台</h3>
        <p>悠遊宇宙的夢想，從這裡開始實現</p>
        <ul>
          <li>網頁設計</li>
          <li>響應式設計</li>
          <li>Bootstrap</li>
        </ul>
        <Link href="/portfolio">
          完整介紹
          <img src="/arrow_forward.svg" />
        </Link>
      </div>
    </article>
  );
}
