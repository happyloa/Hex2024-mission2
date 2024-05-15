import { CategoryProvider } from "@/components/blog/CategoryContext";

import "./globals.css";
import "./scrollBar.css";
import "./variables.css";

import { Noto_Sans_TC } from "next/font/google";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "2024 體驗營切版任務二",
  description: "2024 體驗營切版任務二 by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <CategoryProvider>
      <html lang="zh-Hant" className={notoSansTC.className}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </CategoryProvider>
  );
}
