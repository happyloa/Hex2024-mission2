import styles from "./MobilePosts.module.css";

import PostSliderCard from "@/components/ui/PostSliderCard";

import posts from "@/lib/posts.json";

export default function MobilePosts() {
  return (
    <div className={styles.mobile_posts}>
      {posts.slice(0, 3).map((post, index) => (
        <PostSliderCard key={index} post={post} />
      ))}
    </div>
  );
}
