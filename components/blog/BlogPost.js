import styles from "./BlogPost.module.css";

import PostList from "./Posts/PostList";
import BlogSideBar from "./BlogSideBar";

export default function BlogPosts() {
  return (
    <section className={styles.container}>
      <main>
        <PostList />
      </main>
      <BlogSideBar />
    </section>
  );
}
