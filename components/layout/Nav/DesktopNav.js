import styles from "./DesktopNav.module.css";

import NavLists from "./NavLists";

export default function DesktopNav() {
  return (
    <nav className={styles.desktop_nav}>
      <ul className={styles.lists_wrapper}>
        <NavLists />
      </ul>
    </nav>
  );
}
