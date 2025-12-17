import styles from "./DesktopNav.module.css";

import NavLists from "./NavLists";

export default function DesktopNav() {
  // 桌機版導覽列：直接渲染水平選單
  return (
    <nav className={styles.desktop_nav}>
      <ul className={styles.lists_wrapper}>
        <NavLists />
      </ul>
    </nav>
  );
}
