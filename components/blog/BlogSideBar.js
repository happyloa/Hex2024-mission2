import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "./BlogSideBar.module.css";

export default function BlogSideBar() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "全部文章";
    setActiveCategory(category);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "全部文章") {
      router.push("/blog");
    } else {
      router.push(`/blog?category=${category}`);
    }
  };

  return (
    <aside className={styles.categories_container}>
      <nav className={styles.nav}>
        <ul>
          <li
            className={activeCategory === "全部文章" ? styles.active : ""}
            onClick={() => handleCategoryClick("全部文章")}
          >
            全部文章
          </li>
          <li
            className={activeCategory === "UI/UX 新知" ? styles.active : ""}
            onClick={() => handleCategoryClick("UI/UX 新知")}
          >
            UI/UX 新知
          </li>
          <li
            className={activeCategory === "數位產品設計" ? styles.active : ""}
            onClick={() => handleCategoryClick("數位產品設計")}
          >
            數位產品設計
          </li>
          <li
            className={activeCategory === "平面設計" ? styles.active : ""}
            onClick={() => handleCategoryClick("平面設計")}
          >
            平面設計
          </li>
          <li
            className={activeCategory === "前端開發" ? styles.active : ""}
            onClick={() => handleCategoryClick("前端開發")}
          >
            前端開發
          </li>
        </ul>
      </nav>
    </aside>
  );
}