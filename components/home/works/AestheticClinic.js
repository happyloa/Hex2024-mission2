import styles from "./AestheticClinic.module.css";
import Image from "next/image";

import CTABtn from "@/components/ui/CTABtn";

export default function AestheticClinic() {
  // 醫美診所案例：包含桌機與手機版的 CTA 區塊
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.work_img}>
          <Image src="/image/home/homepage-work3.webp" alt="醫美診所官網" width={721} height={512} sizes="(max-width: 1024px) 295px, (max-width: 1440px) 50vw, 721px" />
        </div>
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
          <CTABtn href="/portfolio" content="完整介紹" />
        </div>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>醫美診所官網</h3>
        <p>永保青春的秘密，從粹究開始</p>
        <ul>
          <li>網頁設計</li>
          <li>響應式設計</li>
          <li>ＷordPress</li>
        </ul>
        <CTABtn href="/portfolio" content="完整介紹" />
      </div>
    </article>
  );
}
