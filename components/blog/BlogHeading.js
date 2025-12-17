import styles from "./BlogHeading.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

export default function BlogHeading() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="部落格" isH1 />
      <p>不定期分享技術文章</p>
    </section>
  );
}
