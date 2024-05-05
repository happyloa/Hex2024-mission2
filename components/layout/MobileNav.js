import styles from "./MobileNav.module.css";

export default function MobileNav() {
  return (
    <button className={styles.mobile_nav}>
      <img src="/menu.svg" />
    </button>
  );
}
