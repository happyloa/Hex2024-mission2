import styles from "./FintechAPP.module.css";

import CTABtn from "@/components/ui/CTABtn";

export default function FintechAPP() {
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.desktop_work_intro_wrapper}>
            <div className={styles.desktop_work_content}>
              <h3>理財APP</h3>
              <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
              <ul>
                <li>APP設計</li>
                <li>iOS</li>
                <li>React</li>
              </ul>
            </div>
            <CTABtn href="/portfolio" content="完整介紹" />
          </div>
        </div>
      </div>
      <div className={styles.mobile_work_intro_wrapper}>
        <h3>理財APP</h3>
        <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
        <ul>
          <li>APP設計</li>
          <li>iOS</li>
          <li>React</li>
        </ul>
        <CTABtn href="/portfolio" content="完整介紹" />
      </div>
    </article>
  );
}
