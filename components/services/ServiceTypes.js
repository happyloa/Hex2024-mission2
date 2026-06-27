import styles from "./ServiceTypes.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import ServiceCards from "../ui/ServiceCards";
import { SERVICE_TYPES } from "@/lib/serviceTypes";

export default function ServiceTypes() {
  // 服務項目總覽，重複利用 ServiceCards 呈現四種服務
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="服務項目" isH1 />
      <ul className={styles.card_container}>
        {SERVICE_TYPES.map((val) => (
          <ServiceCards Icon={val.Icon} Title={val.Title} key={val.Title} />
        ))}
      </ul>
    </section>
  );
}
