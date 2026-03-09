import LiquidOrbs from "../components/landing/LiquidOrbs";
import CyberEffects from "../components/landing/CyberEffects";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ComparisonSection from "../components/landing/ComparisonSection";
import AudienceSection from "../components/landing/AudienceSection";
import PricingSection from "../components/landing/PricingSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";
import { LangProvider } from "../components/landing/LangContext";

const Divider = () => (
  <div className="max-w-xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-[#050505] text-white noise-overlay overflow-x-hidden">
        <LiquidOrbs />
        <CyberEffects />
        <NavBar />
        <HeroSection />
        <Divider />
        <StatsSection />
        <Divider />
        <HowItWorksSection />
        <Divider />
        <FeaturesSection />
        <Divider />
        <ComparisonSection />
        <Divider />
        <AudienceSection />
        <Divider />
        <PricingSection />
        <Divider />
        <CTASection />
        <FooterSection />
      </div>
    </LangProvider>
  );
}