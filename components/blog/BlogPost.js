import styles from "./BlogPost.module.css";

import PostCard from "./Posts/PostCard";
import BlogSideBar from "./BlogSideBar";

export default function BlogPosts() {
  return (
    <section className={styles.container}>
      <main>
        <PostCard />
      </main>
      <BlogSideBar />
    </section>
  );
}
