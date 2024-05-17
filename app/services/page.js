export const metadata = {
  title: "服務項目 - 2024 體驗營切版任務二",
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
