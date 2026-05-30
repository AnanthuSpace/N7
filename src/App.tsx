import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { ScrollingTicker } from "@/components/sections/ScrollingTicker";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <DashboardShowcase />
        <CtaBanner />
        <ScrollingTicker />
        <MobileShowcase />
        <ServicesGrid />
        <CaseStudies />
        <CtaBanner transparent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
