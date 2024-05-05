import styles from "./PortfolioWorks.module.css";

import WorkCard from "../ui/WorkCard";

const portfolioCardsInfo = [
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true`,
    title: "星際旅行訂票平台",
    description: "悠遊宇宙的夢想，從這裡開始實現",
    tags: ["網頁設計", "響應式設計", "Bootstrap"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true`,
    title: "理財App",
    description: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
    tags: ["APP設計", "iOS", "React"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true`,
    title: "醫美診所官網",
    description: "永保青春的秘密，從粹究開始",
    tags: ["網頁設計", "響應式設計", "ＷordPress"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true`,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    tags: ["UI 設計", "前端開發", "Wix"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true`,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    tags: ["前端開發", "後端支援", "Vue"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true`,
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
