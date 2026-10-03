import "./globals.css";
import "./scrollBar.css";
import "./variables.css";

import { Noto_Sans_TC } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["PingFang TC", "Microsoft JhengHei", "sans-serif"],
});

const siteTitle = "2024 體驗營切版任務二 by Aaron";
const siteDescription = "個人品牌網站，展示作品集、服務項目與部落格文章。";

export const metadata = {
  metadataBase: new URL("https://hex2024.worksbyaaron.com"),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://hex2024.worksbyaaron.com",
    siteName: siteTitle,
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={notoSansTC.className}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
