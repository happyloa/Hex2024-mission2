import styles from "./BlogPost.module.css";

import PostList from "./Posts/PostList";
import BlogSideBar from "./BlogSideBar";

export default function BlogPosts({ activeCategory }) {
  return (
    <section className={styles.container}>
      <div>
        <PostList activeCategory={activeCategory} />
      </div>
      <BlogSideBar activeCategory={activeCategory} />
    </section>
  );
}
