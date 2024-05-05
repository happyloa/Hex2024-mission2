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
