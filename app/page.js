import styles from "./page.module.css";

import ServiceTypes from "@/components/services/ServicesTypes";
import ServiceProcess from "@/components/services/ServicesProcess";
import ServicesPricing from "@/components/services/ServicesPricing";
import ServicesExamples from "@/components/services/ServicesExamples";

export default function Home() {
  return (
    <>
      <ServiceTypes />
      <ServiceProcess />
      <ServicesPricing />
      <ServicesExamples />
    </>
  );
}
