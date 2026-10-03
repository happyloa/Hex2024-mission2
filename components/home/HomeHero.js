import styles from "./HomeHero.module.css";
import { getImageProps } from "next/image";

const imageOptions = {
  alt: "Noel 的設計工作空間",
  loading: "eager",
  fetchPriority: "high",
};
const { props: desktopImage } = getImageProps({
  ...imageOptions,
  src: "/image/home/hero-lg.webp",
  width: 1154,
  height: 792,
  sizes: "(max-width: 1200px) 100vw, (max-width: 1920px) 70vw, 1154px",
});
const { props: mobileImage } = getImageProps({
  ...imageOptions,
  src: "/image/home/hero-sm.webp",
  width: 375,
  height: 285,
  sizes: "100vw",
});

export default function HomeHero() {
  // 首屏介紹區塊，集中展示自我介紹與社群連結
  return (
    <section className={styles.container}>
      <div className={styles.text_and_socials_wrapper}>
        <div className={styles.content}>
          <h1>Hi！我是 Noel</h1>
          <p>
            具有 10 年經驗的&nbsp;
            <strong>
              資深 UI 設計師
              <img src="/image/deco/mark.webp" alt="" width={148} height={8} />
            </strong>
            &nbsp;&nbsp;兼&nbsp;&nbsp;
            <strong>
              前端工程師
              <img src="/image/deco/mark.webp" alt="" width={148} height={8} />
            </strong>
            <br />
            技術雙修並行，熱衷於優化使用者的網頁體驗
          </p>
          <p className={styles.skills}>
            WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
          </p>
        </div>
        <ul className={styles.socials}>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/image/icon/instagram.svg" alt="Instagram 連結" width={56} height={56} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/image/icon/facebook.svg" alt="Facebook 連結" width={56} height={56} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/image/icon/youtube.svg" alt="YouTube 連結" width={56} height={56} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.img_wrapper}>
        <picture>
          <source media="(max-width: 1200px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} width={375} height={285} />
          <img {...desktopImage} />
        </picture>
      </div>
    </section>
  );
}
