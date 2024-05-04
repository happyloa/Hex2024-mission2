import styles from "./ServicesPricing.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const pricingInfo = [
  {
    icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/price-item-visual.svg`,
    service: "平面設計",
    price: "6,000",
  },
  {
    icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/price-item-ui.svg`,
    service: "UI 設計",
    price: "15,000",
  },
  {
    icon: `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/price-item-front-end.svg`,
    service: "前端開發",
    price: "22,000",
  },
];

export default function ServicesPricing() {
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
