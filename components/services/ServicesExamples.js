import styles from "./ServicesExamples.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const examplesInfo = [
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true`,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    tags: ["UI 設計", "前端開發", "Wix"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true`,
    title: "巧克巧克形象官網設計",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["UI設計", "設計系統", "網路電商"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true`,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["前端開發", "後端支援", "Vue"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image7.png?raw=true`,
    title: "2023 餉茶坊飲料旗艦店活動官網設計",
    description: "主打水果主題，冰鎮夏天暑氣",
    tags: ["網頁設計", "切版服務", "Javascript"],
  },
];

export default function ServicesExamples() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="客戶案例" />
      <ul className={styles.card_wrapper}>
        {examplesInfo.map((val, idx) => (
          <li key={idx}>
            <article className={styles.card}>
              <div className={styles.img_wrapper}>
                <img src={val.Img} alt={val.title} />
              </div>
              <div className={`${styles["card_content"]} ${styles["px-16"]}`}>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
              <div className={`${styles["card_tags"]} ${styles["px-16"]}`}>
                {val.tags.map((content, tagIndex) => (
                  <span key={tagIndex}>{content}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
