import Link from "next/link";
import { BLOG_CATEGORIES, getCategoryUrl } from "@/lib/blogCategories";
import styles from "./BlogSideBar.module.css";

export default function BlogSideBar({ activeCategory = "全部文章" }) {
  return (
    <aside className={styles.categories_container}>
      <nav className={styles.nav}>
        <ul>
          {BLOG_CATEGORIES.map((category) => (
            <li
              key={category}
              className={activeCategory === category ? styles.active : ""}>
              <Link href={getCategoryUrl(category)} aria-current={activeCategory === category ? "page" : undefined}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
