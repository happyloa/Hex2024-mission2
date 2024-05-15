import styles from "./BlogPost.module.css";

import PostList from "./Posts/PostList";
import BlogSideBar from "./BlogSideBar";

export default function BlogPosts({ activeCategory, onCategoryChange }) {
  return (
    <section className={styles.container}>
      <main>
        <PostList activeCategory={activeCategory} />
      </main>
      <BlogSideBar
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </section>
  );
}
