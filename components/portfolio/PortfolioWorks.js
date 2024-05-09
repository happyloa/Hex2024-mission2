import styles from "./PortfolioWorks.module.css";

import WorkCard from "../ui/WorkCard";

const portfolioCardsInfo = [
  {
    Img: `/image/work/work-image1.webp`,
    title: "星際旅行訂票平台",
    description: "悠遊宇宙的夢想，從這裡開始實現",
    tags: ["網頁設計", "響應式設計", "Bootstrap"],
  },
  {
    Img: `/image/work/work-image2.webp`,
    title: "理財App",
    description: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
    tags: ["APP設計", "iOS", "React"],
  },
  {
    Img: `/image/work/work-image3.webp`,
    title: "醫美診所官網",
    description: "永保青春的秘密，從粹究開始",
    tags: ["網頁設計", "響應式設計", "ＷordPress"],
  },
  {
    Img: `/image/work/work-image4.webp`,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    tags: ["UI 設計", "前端開發", "Wix"],
  },
  {
    Img: `/image/work/work-image5.webp`,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["前端開發", "後端支援", "Vue"],
  },
  {
    Img: `/image/work/work-image6.webp`,
    title: "巧克巧克形象官網設計",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["UI 設計", "設計系統", "網路電商"],
  },
];

export default function PortfolioWorks() {
  return (
    <section className={styles.container}>
      <ul className={styles.card_wrapper}>
        {portfolioCardsInfo.map((val, idx) => (
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
      <nav>
        <ul className={styles.pagination}>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
