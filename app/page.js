import styles from "./page.module.css";

import ServiceTypes from "@/components/services/ServiceTypes";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicePricing from "@/components/services/ServicePricing";
import ServiceExamples from "@/components/services/ServiceExamples";

export default function Home() {
  return (
    <>
      <ServiceTypes />
      <ServiceProcess />
      <ServicePricing />
      <ServiceExamples />
    </>
  );
}
