import styles from "./ServiceExamples.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import WorkCard from "../ui/WorkCard";

const examplesInfo = [
  {
    Img: `/image/work/work-image4.webp`,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    tags: ["UI 設計", "前端開發", "Wix"],
  },
  {
    Img: `/image/work/work-image6.webp`,
    title: "巧克巧克形象官網設計",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["UI設計", "設計系統", "網路電商"],
  },
  {
    Img: `/image/work/work-image5.webp`,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["前端開發", "後端支援", "Vue"],
  },
  {
    Img: `/image/work/work-image7.webp`,
    title: "2023 餉茶坊飲料旗艦店活動官網設計",
    description: "主打水果主題，冰鎮夏天暑氣",
    tags: ["網頁設計", "切版服務", "Javascript"],
  },
];

export default function ServiceExamples() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="客戶案例" />
      <ul className={styles.card_wrapper}>
        {examplesInfo.map((val, idx) => (
          <li key={idx}>
            <WorkCard
              imgSrc={val.Img}
              title={val.title}
              description={val.description}
              tags={val.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
