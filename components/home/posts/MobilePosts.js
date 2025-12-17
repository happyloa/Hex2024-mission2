import styles from "./MobilePosts.module.css";

import PostCard from "@/components/ui/PostCard";

import posts from "@/lib/posts.json";

export default function MobilePosts() {
  // 手機版文章列表：僅取前三篇文章以維持版面簡潔
  return (
    <div className={styles.mobile_posts}>
      {posts.slice(0, 3).map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
