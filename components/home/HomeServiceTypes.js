import styles from "./HomeServiceTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import ServiceCards from "../ui/ServiceCards";
import CTABtn from "../ui/CTABtn";
import { SERVICE_TYPES } from "@/lib/serviceTypes";

export default function HomeServiceTypes() {
  // 服務列表區塊，透過資料陣列輸出服務卡片
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" />
      <ul className={styles.servicesCard_container}>
        {SERVICE_TYPES.map((val) => (
          <ServiceCards Icon={val.Icon} Title={val.Title} key={val.Title} />
        ))}
      </ul>
      <div className={styles.content_wrapper}>
        <h3>想要合作或瞭解更多？</h3>
        <CTABtn href="/services#process" content="詳細內容與合作流程" />
      </div>
    </section>
  );
}
