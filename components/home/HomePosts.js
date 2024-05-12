import styles from "./HomePosts.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";
import PostSlider from "./posts/PostSlider";
import MobilePosts from "./posts/MobilePosts";
import CTABtn from "../ui/CTABtn";

export default function HomePosts() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="精選文章" />
      <PostSlider />
      <MobilePosts />
      <CTABtn href="/blog" content="更多文章" />
    </section>
  );
}
