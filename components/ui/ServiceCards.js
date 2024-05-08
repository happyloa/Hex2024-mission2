import styles from "./ServiceCards.module.css";

export default function ServiceCards({
  Icon = `/image/services/service-item-visual.svg`,
  Title = "服務項目",
}) {
  return (
    <li className={styles.card}>
      <img src={Icon} className={styles.card_icon} alt={Title + "icon"} />
      <h3 className={styles.heading}>{Title}</h3>
    </li>
  );
}
