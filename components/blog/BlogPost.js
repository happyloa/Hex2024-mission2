import styles from "./BlogPost.module.css";

import PostList from "./Posts/PostList";
import BlogSideBar from "./BlogSideBar";

export default function BlogPosts({ activeCategory, onCategoryChange }) {
  // 部落格主要內容：左側列表與右側分類側欄
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
