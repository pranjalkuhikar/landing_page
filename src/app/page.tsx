import { ReactNode } from "react";
import Footer from "./_components/footer/page";
import HeroSection from "./_components/herosection/page";
import MainSection from "./_components/mainsection/page";

export default function Home() {
  const title =
    "FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation";

  const description =
    "FanCloud pioneers a new era of connectivity with its decentralized content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralized architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud&apos;s dCDN network and experience the future of seamless, secure and community-driven consumption.";

  return (
    <>
      <HeroSection />
      <MainSection title={title} description={description} />
      <Footer />
    </>
  );
}
