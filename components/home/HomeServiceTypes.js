import styles from "./HomeServiceTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import ServiceCards from "../ui/ServiceCards";
import CTABtn from "../ui/CTABtn";

const servicesContent = [
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

export default function HomeServiceTypes() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" />
      <ul className={styles.servicesCard_container}>
        {servicesContent.map((val, idx) => (
          <ServiceCards Icon={val.Icon} Title={val.Title} key={idx} />
        ))}
      </ul>
      <div className={styles.content_wrapper}>
        <h3>想要合作或瞭解更多？</h3>
        <CTABtn href="/services#process" content="詳細內容與合作流程" />
      </div>
    </section>
  );
}
