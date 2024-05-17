import styles from "./ContactInfo.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

export default function ContactInfo() {
  return (
    <section className={styles.container}>
      <HeadingWithLine headingContent="歡迎來信聯絡" isH1 />
      <div className={styles.info_and_form_wrapper}>
        <div className={styles.info}>
          <h2>讓我們建立聯繫</h2>
          <a
            href="mailto:service@hexschool.com?subject=您好，我想與您合作。&body=如果您看到這封 Email，請回覆我，期待與您合作，謝謝！"
            className={styles.email}>
            Email：service@hexschool.com
          </a>
          <a href="tel:0911111111" className={styles.tel}>
            電話：0911111111
          </a>
          <p>
            歡迎隨時透過表單、Email 或電話來聯絡我！
            <br />
            期待能夠與您一同完成一份獨一無二且精緻的作品
          </p>
        </div>
        <div className={styles.form_wrapper}>
          <form className={styles.form}>
            <div className={styles.name_field}>
              <input
                type="text"
                name="name"
                placeholder="輸入您的姓名"
                required
              />
            </div>
            <div className={styles.email_field}>
              <input
                type="email"
                name="email"
                placeholder="輸入您的 Email"
                required
              />
            </div>
            <div className={styles.message_field}>
              <textarea
                name="message"
                placeholder="您想傳給我的訊息"
                rows={8}></textarea>
            </div>
            <div className={styles.submit}>
              <button type="submit">填好送出</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
