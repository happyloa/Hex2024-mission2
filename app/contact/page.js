export const metadata = {
  title: "聯絡我",
  description: "留下需求或合作意向，快速與 2024 體驗營切版任務二 by Aaron 聯繫。",
};

import ContactMap from "@/components/contact/ContactMap";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <ContactMap />
      <ContactInfo />
    </>
  );
}
