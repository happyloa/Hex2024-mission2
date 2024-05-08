import styles from "./ServiceCards.module.css";

export default function ServiceCards({
  Icon = `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/service-item-visual.svg`,
  Title = "服務項目",
}) {
  return (
    <li className={styles.card}>
      <img src={Icon} className={styles.card_icon} alt={Title + "icon"} />
      <h3 className={styles.heading}>{Title}</h3>
    </li>
  );
}
