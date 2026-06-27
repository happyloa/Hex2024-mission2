"use client";

import { useRouter } from "next/navigation";
import { BLOG_CATEGORIES, getCategoryUrl } from "@/lib/blogCategories";
import styles from "./BlogSideBar.module.css";

export default function BlogSideBar({ activeCategory = "全部文章" }) {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(getCategoryUrl(category));
  };

  return (
    <aside className={styles.categories_container}>
      <nav className={styles.nav}>
        <ul>
          {BLOG_CATEGORIES.map((category) => (
            <li
              key={category}
              className={activeCategory === category ? styles.active : ""}
              onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
