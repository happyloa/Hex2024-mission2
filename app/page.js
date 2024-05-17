export const metadata = {
  title: "首頁 - 2024 體驗營切版任務二",
};

import HomeHero from "@/components/home/HomeHero";
import HomeWorks from "@/components/home/HomeWorks";
import HomeServiceTypes from "@/components/home/HomeServiceTypes";
import HomePosts from "@/components/home/HomePosts";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWorks />
      <HomeServiceTypes />
      <HomePosts />
    </>
  );
}
