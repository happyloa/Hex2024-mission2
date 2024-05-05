import styles from "./PortfolioQuote.module.css";

export default function PortfolioQuote() {
  return (
    <section className={styles.container}>
      <blockquote className={styles.blockquote}>
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/quote-left.png?raw=true"
          alt="引用裝飾1"
          className={styles.quoteIcon1}
        />
        <h2>
          讓使用者在觀賞與使用的旅程中，發現
          <span>
            設計的價值
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true" />
          </span>
        </h2>
        <h2>
          而我在設計與開發的過程中，看見
          <span>
            自己的價值
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true" />
          </span>
        </h2>
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/quote-right.png?raw=true"
          alt="引用裝飾2"
          className={styles.quoteIcon2}
        />
      </blockquote>
      <div className={styles.toB_toC_wrapper}>
        <div className={styles.content_wrapper}>
          <h3>2B經驗</h3>
          <hr />
          <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
        </div>
        <div className={styles.content_wrapper}>
          <h3>2C經驗</h3>
          <hr />
          <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
        </div>
      </div>
    </section>
  );
}