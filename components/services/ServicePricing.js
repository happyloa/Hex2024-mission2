import styles from "./ServicePricing.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const pricingInfo = [
  {
    icon: `/image/services/price-item-visual.svg`,
    service: "平面設計",
    price: "6,000",
  },
  {
    icon: `/image/services/price-item-ui.svg`,
    service: "UI 設計",
    price: "15,000",
  },
  {
    icon: `/image/services/price-item-front-end.svg`,
    service: "前端開發",
    price: "22,000",
  },
];

export default function ServicePricing() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="價格表" />
      <div className={styles.pricing_cards_container}>
        {pricingInfo.map((val, idx) => (
          <article className={styles.pricing_card} key={idx}>
            <img src={val.icon} alt={val.service} />
            <h3>{val.service}</h3>
            <hr />
            <h4>{val.price}</h4>
            <span>起</span>
          </article>
        ))}
      </div>
    </section>
  );
}
