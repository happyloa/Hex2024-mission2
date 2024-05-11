import styles from "./HomePosts.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import PostSliderCard from "../ui/PostSliderCard";

export default function HomePosts() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="精選文章" />
      <PostSliderCard />
    </section>
  );
}
