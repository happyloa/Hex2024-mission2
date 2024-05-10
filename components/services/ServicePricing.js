import styles from "./ServicePricing.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import PricingCard from "../ui/PricingCard";

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
      <ul className={styles.pricing_cards_container}>
        {pricingInfo.map((val, idx) => (
          <PricingCard
            icon={val.icon}
            service={val.service}
            price={val.price}
            key={idx}
          />
        ))}
      </ul>
    </section>
  );
}
