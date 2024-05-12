import styles from "./HomePosts.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import PostSlider from "../blog/Posts/PostSlider";

export default function HomePosts() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="精選文章" />
      <PostSlider />
    </section>
  );
}
