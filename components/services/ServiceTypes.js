import styles from "./ServiceTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import ServiceCards from "../ui/ServiceCards";

const cardContent = [
  {
    Icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-visual.svg`,
    Title: "平面設計",
  },
  {
    Icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-ui.svg`,
    Title: "UI 設計",
  },
  {
    Icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-html%26css.svg`,
    Title: "切版服務",
  },
  {
    Icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-front-end.svg`,
    Title: "前端開發",
  },
];

export default function ServiceTypes() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" />
      <ul className={styles.card_container}>
        {cardContent.map((val, idx) => (
          <ServiceCards Icon={val.Icon} Title={val.Title} key={idx} />
        ))}
      </ul>
    </section>
  );
}
