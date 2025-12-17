import styles from "./ServiceCards.module.css";

export default function ServiceCards({
  Icon = `/image/services/service-item-visual.svg`,
  Title = "服務項目",
}) {
  // 服務卡片：呈現單一服務的圖示與標題
  return (
    <li className={styles.card}>
      <img src={Icon} className={styles.card_icon} alt={Title + "icon"} />
      <h3 className={styles.heading}>{Title}</h3>
    </li>
  );
}
