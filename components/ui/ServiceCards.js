import styles from "./ServiceCards.module.css";

export default function ServiceCards({
  Icon = `/image/services/service-item-visual.svg`,
  Title = "服務項目",
  headingLevel = 3,
  eager = false,
}) {
  const HeadingTag = `h${headingLevel}`;
  // 服務卡片：呈現單一服務的圖示與標題
  return (
    <li className={styles.card}>
      <img src={Icon} className={styles.card_icon} alt="" width={80} height={80} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
      <HeadingTag className={styles.heading}>{Title}</HeadingTag>
    </li>
  );
}
