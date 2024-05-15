import styles from "./BlogMobileNav.module.css";

export default function BlogMobileNav({ activeCategory, onCategoryChange }) {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <nav className={styles.container}>
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
  );
}
