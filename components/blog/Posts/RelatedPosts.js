import styles from "./RelatedPosts.module.css";

import PostSlider from "@/components/home/posts/PostSlider";
import MobilePosts from "@/components/home/posts/MobilePosts";

export default function RelatedPosts() {
  return (
    <section className={styles.container}>
      <div className={styles.content_wrapper}>
        <h2 className={styles.related_posts_heading}>最新文章</h2>
        <PostSlider />
        <MobilePosts />
      </div>
    </section>
  );
}
