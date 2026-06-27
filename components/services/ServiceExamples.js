import styles from "./ServiceExamples.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import WorkCard from "../ui/WorkCard";
import { SERVICE_EXAMPLE_WORKS } from "@/lib/works";

export default function ServiceExamples() {
  // 客戶案例：重複利用 WorkCard 展示四個不同專案
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="客戶案例" />
      <ul className={styles.card_wrapper}>
        {SERVICE_EXAMPLE_WORKS.map((val) => (
          <li key={val.id}>
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
