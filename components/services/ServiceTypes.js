import styles from "./ServiceTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import ServiceCards from "../ui/ServiceCards";

const cardContent = [
  {
    Icon: `/image/services/service-item-visual.svg`,
    Title: "平面設計",
  },
  {
    Icon: `/image/services/service-item-ui.svg`,
    Title: "UI 設計",
  },
  {
    Icon: `/image/services/service-item-html&css.svg`,
    Title: "切版服務",
  },
  {
    Icon: `/image/services/service-item-front-end.svg`,
    Title: "前端開發",
  },
];

export default function ServiceTypes() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" isH1 />
      <ul className={styles.card_container}>
        {cardContent.map((val, idx) => (
          <ServiceCards Icon={val.Icon} Title={val.Title} key={idx} />
        ))}
      </ul>
    </section>
  );
}
