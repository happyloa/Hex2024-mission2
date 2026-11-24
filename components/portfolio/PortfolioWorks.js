import styles from "./PortfolioWorks.module.css";

import WorkCard from "../ui/WorkCard";
import workCardStyles from "../ui/WorkCard.module.css";
import { PORTFOLIO_WORKS } from "@/lib/works";

export default function PortfolioWorks() {
  // 作品集列表：以 WorkCard 呈現多個案例並附上分頁占位
  return (
    <section className={styles.container}>
      <ul className={workCardStyles.grid}>
        {PORTFOLIO_WORKS.map((val) => (
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
