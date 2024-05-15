import styles from "./RelatedPosts.module.css";

import PostSlider from "@/components/home/posts/PostSlider";
import MobilePosts from "@/components/home/posts/MobilePosts";

export default function RelatedPosts() {
  return (
    <section className={styles.container}>
      <div className={styles.content_wrapper}>
        <h3>最新文章</h3>
        <PostSlider />
        <MobilePosts />
      </div>
    </section>
  );
}
