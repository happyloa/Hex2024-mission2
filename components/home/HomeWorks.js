import styles from "./HomeWorks.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

import StarTravel from "./works/StarTravel";
import FintechAPP from "./works/FintechAPP";
import AestheticClinic from "./works/AestheticClinic";

export default function HomeWorks() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="作品介紹" />
      <main>
        <StarTravel />
        <FintechAPP />
        <AestheticClinic />
      </main>
    </section>
  );
}
