import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { PainBlock } from "@/components/sections/PainBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { ContentTypes } from "@/components/sections/ContentTypes";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { CtaFunnel } from "@/components/sections/CtaFunnel";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <PainBlock />
        <HowItWorks />
        <UseCases />
        <ContentTypes />
        <Pricing />
        <Guarantee />
        <Faq />
        <CtaFunnel />
      </main>
      <Footer />
    </>
  );
}
