import LiquidOrbs from "../components/landing/LiquidOrbs";
import CyberEffects from "../components/landing/CyberEffects";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ComparisonSection from "../components/landing/ComparisonSection";
import AudienceSection from "../components/landing/AudienceSection";
import ComplianceSection from "../components/landing/ComplianceSection";
import CTASection from "../components/landing/CTASection";
import ResourcesSection from "../components/landing/ResourcesSection";
import FooterSection from "../components/landing/FooterSection";
import { ThemeProvider } from "../components/landing/ThemeContext";

const Divider = () => (
  <div className="max-w-xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white noise-overlay overflow-x-hidden">
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
        <ComplianceSection />
        <Divider />
        <CTASection />
        <Divider />
        <ResourcesSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
}