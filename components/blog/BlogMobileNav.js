import styles from "./BlogMobileNav.module.css";

import Link from "next/link";

export default function BlogMobileNav() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="#">全部文章</Link>
        </li>
        <li>
          <Link href="#">UI/UX 新知</Link>
        </li>
        <li>
          <Link href="#">數位產品設計</Link>
        </li>
        <li>
          <Link href="#">平面設計</Link>
        </li>
        <li>
          <Link href="#">前端開發</Link>
        </li>
      </ul>
    </nav>
  );
}
