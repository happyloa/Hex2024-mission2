import { useRouter } from "next/navigation";

import styles from "./BlogMobileNav.module.css";

import Link from "next/link";

export default function BlogMobileNav() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    if (category === "全部文章") {
      router.push("/blog");
    } else {
      router.push(`/blog?category=${category}`);
    }
  };

  return (
    <nav className={styles.container}>
      <ul>
        <li onClick={() => handleCategoryClick("全部文章")}>全部文章</li>
        <li onClick={() => handleCategoryClick("UI/UX 新知")}>UI/UX 新知</li>
        <li onClick={() => handleCategoryClick("數位產品設計")}>
          數位產品設計
        </li>
        <li onClick={() => handleCategoryClick("平面設計")}>平面設計</li>
        <li onClick={() => handleCategoryClick("前端開發")}>前端開發</li>
      </ul>
    </nav>
  );
}
