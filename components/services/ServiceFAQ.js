import styles from "./ServiceFAQ.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

export default function ServiceFAQ() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="常見問題" />
    </section>
  );
}
