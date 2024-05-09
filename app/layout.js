import "./globals.css";
import "./scrollBar.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "2024 體驗營切版任務二",
  description: "2024 體驗營切版任務二 by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
