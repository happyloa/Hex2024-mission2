import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({
  headingContent = "輸入標題",
  light = false,
  isH1 = false,
}) {
  // 根據 isH1 屬性決定使用 <h1> 或 <h2> 標籤
  const HeadingTag = isH1 ? "h1" : "h2";

  return (
    <div className={styles.heading_wrapper}>
      <picture>
        <source media="(max-width: 576px)" srcSet="/image/deco/title-deco-left-sm.webp" width={56} height={6} />
        <img src="/image/deco/title-deco-left-lg.webp" alt="" width={100} height={6} />
      </picture>
      <HeadingTag className={light ? `${styles.heading} ${styles.light}` : styles.heading}>
        {headingContent}
      </HeadingTag>
      <picture>
        <source media="(max-width: 576px)" srcSet="/image/deco/title-deco-right-sm.webp" width={56} height={6} />
        <img src="/image/deco/title-deco-right-lg.webp" alt="" width={100} height={6} />
      </picture>
    </div>
  );
}
