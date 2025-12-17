export const metadata = {
  title: "服務項目",
  description: "提供品牌設計、UI/UX、前端切版等服務，協助客戶打造專業數位體驗。",
};

import ServiceTypes from "@/components/services/ServiceTypes";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicePricing from "@/components/services/ServicePricing";
import ServiceExamples from "@/components/services/ServiceExamples";
import ServiceFAQ from "@/components/services/ServiceFAQ";

export default function Services() {
  return (
    <>
      <ServiceTypes />
      <ServiceProcess />
      <ServicePricing />
      <ServiceExamples />
      <ServiceFAQ />
    </>
  );
}
