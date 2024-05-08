import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.container}>
      <div className={styles.text_and_socials_wrapper}>
        <div className={styles.content}>
          <h1>Hi！我是 Noel</h1>
          <p>
            具有 10 年經驗的&nbsp;
            <span>
              資深 UI 設計師
              <img src="/image/deco/mark.webp" />
            </span>
            &nbsp;&nbsp;兼&nbsp;&nbsp;
            <span>
              前端工程師
              <img src="/image/deco/mark.webp" />
            </span>
            <br />
            技術雙修並行，熱衷於優化使用者的網頁體驗
          </p>
          <p className={styles.skills}>
            WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
          </p>
        </div>
        <ul className={styles.socials}>
          <li>
            <a href="#" target="_blank">
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/instagram.svg"
                alt="instagram 連結"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/facebook.svg"
                alt="facebook 連結"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/list.svg"
                alt="YouTube 連結"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.img_wrapper}>
        <img alt="Hero 圖片" />
      </div>
    </section>
  );
}
