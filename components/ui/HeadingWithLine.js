import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({
  headingContent = "輸入標題",
  light = false,
  isH1 = false,
}) {
  // 根據 light 屬性決定文字顏色
  const headingStyle = {
    color: light ? "var(--white)" : "var(--primary700)", // 如果 light 為 true 則文字顏色為白色，否則為原始顏色
  };

  // 根據 isH1 屬性決定使用 <h1> 或 <h2> 標籤
  const HeadingTag = isH1 ? "h1" : "h2";

  return (
    <div className={styles.heading_wrapper}>
      <img alt="標題左邊裝飾" className={styles.srcImage1} />
      <HeadingTag className={styles.heading} style={headingStyle}>
        {headingContent}
      </HeadingTag>
      <img alt="標題右邊裝飾" className={styles.srcImage2} />
    </div>
  );
}
