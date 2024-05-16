import styles from "./ServiceProcess.module.css";

import HeadingWithLine from "../ui/HeadingWithLine";

const processesInfo = [
  {
    processStep: "1",
    title: "初步接洽",
    content: `透過表單或其他社群軟體與我聯絡<br/>根據難易度與複雜度，後續可能需要電話/線上討論`,
    arrow: true,
  },
  {
    processStep: "2",
    title: "需求釐清",
    content: `透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議`,
    arrow: true,
  },
  {
    processStep: "3",
    title: "委託簽約",
    content: `合約雙方用印後，即正式開始合作<br/>可提供發票或勞務報酬單，須支付 20% 訂金`,
    arrow: true,
  },
  {
    processStep: "4",
    title: "版本呈現",
    content: `根據合約內容進行設計或開發`,
    arrow: true,
  },
  {
    processStep: "5",
    title: "來回修正",
    content: `依據合約規定之修正次數進行，次數計算以 mail 為準`,
    arrow: true,
  },
  {
    processStep: "6",
    title: "終版確認",
    content: `雙方同意後即為最終版`,
    arrow: true,
  },
  {
    processStep: "7",
    title: "結案",
    content: `客戶簽署驗收單，並於約定日期支付尾款`,
    arrow: false,
  },
];

export default function ServiceProcess() {
  return (
    <section className={styles.container} id="process">
      <HeadingWithLine headingContent="服務流程" light />
      <ol className={styles.processes_container}>
        {processesInfo.map((val, idx) => (
          <li className={styles.card_and_arrow_container} key={idx}>
            <article className={styles.process_card}>
              <span className={styles.process_number}>{val.processStep}</span>
              <div className={styles.process_content}>
                <h3>{val.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: val.content }} />
              </div>
            </article>
            {val.arrow && (
              <img
                src="/image/icon/arrow_downward.svg"
                alt="Arrow Downward"
                className={styles.arrow_downward}
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
