import styles from "./PricingCard.module.css";

export default function PricingCard({
  icon = `/image/services/price-item-visual.svg`,
  service = "服務內容",
  price = "2,000",
}) {
  // 定價卡片：顯示服務名稱、價格與示意圖示
  return (
    <li className={styles.pricing_card}>
      <img src={icon} alt={service} />
      <h3>{service}</h3>
      <hr />
      <h4>{price}</h4>
      <span>起</span>
    </li>
  );
}
