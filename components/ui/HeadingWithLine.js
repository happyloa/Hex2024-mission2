import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({
  headingContent = "輸入標題",
  light = false,
}) {
  // 根據 light 屬性決定文字顏色
  const headingStyle = {
    color: light ? "var(--white)" : "var(--primary700)", // 如果 light 為 true 則文字顏色為白色，否則為原始顏色
  };

  return (
    <div className={styles.heading_wrapper}>
      <img alt="標題左邊裝飾" className={styles.srcImage1} />
      <h2 className={styles.heading} style={headingStyle}>
        {headingContent}
      </h2>
      <img alt="標題右邊裝飾" className={styles.srcImage2} />
    </div>
  );
}
