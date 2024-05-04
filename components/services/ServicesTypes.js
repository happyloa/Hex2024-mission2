import styles from "./ServicesTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const cardContent = [
  {
    cardIcon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-visual.svg`,
    cardTitle: "平面設計",
  },
  {
    cardIcon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-ui.svg`,
    cardTitle: "UI 設計",
  },
  {
    cardIcon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-html%26css.svg`,
    cardTitle: "切版服務",
  },
  {
    cardIcon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-front-end.svg`,
    cardTitle: "前端開發",
  },
];

export default function ServiceTypes() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" />
      <div className={styles.card_container}>
        {cardContent.map((val, idx) => (
          <div className={styles.card} key={idx}>
            <img src={val.cardIcon} className={styles.card_icon} />
            <h3 className={styles.card_heading}>{val.cardTitle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
