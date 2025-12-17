export const metadata = {
  title: "作品集",
  description: "精選品牌與產品設計案例，呈現 2024 體驗營切版任務二的實作成果。",
};

import PortfolioQuote from "@/components/portfolio/PortfolioQuote";
import PortfolioWorks from "@/components/portfolio/PortfolioWorks";

export default function Portfolio() {
  return (
    <>
      <PortfolioQuote />
      <PortfolioWorks />
    </>
  );
}
