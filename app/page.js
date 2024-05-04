import styles from "./page.module.css";

import ServiceTypes from "@/components/services/ServicesTypes";
import ServiceProcess from "@/components/services/ServicesProcess";

export default function Home() {
  return (
    <>
      <ServiceTypes />
      <ServiceProcess />
    </>
  );
}
