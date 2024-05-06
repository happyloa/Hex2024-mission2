import styles from "./HomeWorks.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

import StarTravel from "./works/StarTravel";

export default function HomeWorks() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="作品介紹" />
      <main>
        <StarTravel />
      </main>
    </section>
  );
}