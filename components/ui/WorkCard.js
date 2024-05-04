import styles from "./WorkCard.module.css";

export default function WorkCard({
  imgSrc = `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true`,
  title = "請輸入作品標題",
  description = "請輸入作品描述",
  tags = ["作品標籤"],
}) {
  return (
    <article className={styles.card}>
      <div className={styles.img_wrapper}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={`${styles["card_content"]} ${styles["px-16"]}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={`${styles["card_tags"]} ${styles["px-16"]}`}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
