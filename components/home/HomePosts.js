import styles from "./HomePosts.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

export default function HomePosts() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="精選文章" />
    </section>
  );
}
