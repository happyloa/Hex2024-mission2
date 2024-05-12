import styles from "./MobilePosts.module.css";

import PostCard from "@/components/ui/PostCard";

import posts from "@/lib/posts.json";

export default function MobilePosts() {
  return (
    <div className={styles.mobile_posts}>
      {posts.slice(0, 3).map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
