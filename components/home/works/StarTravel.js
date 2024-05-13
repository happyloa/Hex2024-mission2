import styles from "./StarTravel.module.css";

import CTABtn from "@/components/ui/CTABtn";

export default function StarTravel() {
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.work_img}>
          <img src="/image/home/homepage-work1.webp" alt="星際旅行訂票平台" />
        </div>
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
          <CTABtn href="/portfolio" content="完整介紹" />
        </div>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>星際旅行訂票平台</h3>
        <p>悠遊宇宙的夢想，從這裡開始實現</p>
        <ul>
          <li>網頁設計</li>
          <li>響應式設計</li>
          <li>Bootstrap</li>
        </ul>
        <CTABtn href="/portfolio" content="完整介紹" />
      </div>
    </article>
  );
}
