import FAQsThree from "@/components/faqs-3";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntegrationsSection />
      <StatsSection />
      <FAQsThree />
    </div>
  );
}
