import styles from "./ServiceFAQ.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const faqData = [
  {
    question: "時程很趕的話可以加快作業嗎？",
    ans: "每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！",
  },
  {
    question: "白天可以開會討論嗎？",
    ans: "每週一三五的白天，可以約定開會時間！",
  },
  {
    question: "有實際開發的網站可以參考嗎？",
    ans: "請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。",
  },
  {
    question: "提供比稿服務嗎？",
    ans: "只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。",
  },
];

export default function ServiceFAQ() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="常見問題" />
      <ul className={styles.faq_wrapper}>
        {faqData.map((val, idx) => (
          <li className={styles.faq_card} key={idx}>
            <article>
              <h3>{val.question}</h3>
              <p>{val.ans}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
