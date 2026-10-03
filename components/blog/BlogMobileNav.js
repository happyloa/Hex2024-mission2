import Link from "next/link";
import { BLOG_CATEGORIES, getCategoryUrl } from "@/lib/blogCategories";
import styles from "./BlogMobileNav.module.css";

export default function BlogMobileNav({ activeCategory = "全部文章" }) {
  return (
    <nav className={styles.container}>
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
  );
}
