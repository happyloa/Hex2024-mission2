import styles from "./BlogSideBar.module.css";

export default function BlogSideBar({ activeCategory, onCategoryChange }) {
  // 桌機側邊欄：使用相同分類按鈕切換文章列表
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <aside className={styles.categories_container}>
      <nav className={styles.nav}>
        <ul>
          <li
            className={activeCategory === "全部文章" ? styles.active : ""}
            onClick={() => handleCategoryClick("全部文章")}>
            全部文章
          </li>
          <li
            className={activeCategory === "UI/UX 新知" ? styles.active : ""}
            onClick={() => handleCategoryClick("UI/UX 新知")}>
            UI/UX 新知
          </li>
          <li
            className={activeCategory === "數位產品設計" ? styles.active : ""}
            onClick={() => handleCategoryClick("數位產品設計")}>
            數位產品設計
          </li>
          <li
            className={activeCategory === "平面設計" ? styles.active : ""}
            onClick={() => handleCategoryClick("平面設計")}>
            平面設計
          </li>
          <li
            className={activeCategory === "前端開發" ? styles.active : ""}
            onClick={() => handleCategoryClick("前端開發")}>
            前端開發
          </li>
        </ul>
      </nav>
    </aside>
  );
}
