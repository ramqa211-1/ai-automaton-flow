import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import ServiceTracks from "@/components/ServiceTracks";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Training from "@/components/Training";
import TechStack from "@/components/TechStack";
import WhatIBring from "@/components/WhatIBring";
import Expertise from "@/components/Expertise";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import ContentHub from "@/components/ContentHub";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import VideoModal from "@/components/VideoModal";
import BrainRamLogo from "@/components/BrainRamLogo";

const Index = () => {
  return (
    <main className="relative bg-background">
      <div className="fixed inset-0 -z-10 bg-background" />

      <VideoModal />
      <Navbar />
      <Hero />
      <TrustBar />
      <PainPoints />
      <ServiceTracks />
      <About />
      <Services />
      <HowItWorks />
      <Training />
      <TechStack />
      <WhatIBring />
      <Expertise />
      <Capabilities />
      <Portfolio />
      <ClientLogos />
      <ContentHub />
      <CTA />
      <Contact />

      <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-emerald-500/20 py-16 px-8 overflow-hidden">
        {/* Gradient glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-yellow-400/5 rounded-full blur-3xl -z-0 opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-emerald-500/5 to-transparent rounded-full blur-3xl -z-0 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-emerald-500/20">
            {/* Branding Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <BrainRamLogo size="lg" showText={true} />
              </div>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                שילוב של AI, אוטומציה ופיתוח חכם כדי לשנות את עולם העסקים.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-emerald-400 uppercase tracking-widest mb-6 text-sm">קישורים</h4>
              <ul className="space-y-3">
                {[
                  { label: "ראשי", href: "#home" },
                  { label: "שירותים", href: "#services" },
                  { label: "תיק עבודות", href: "#portfolio" },
                  { label: "צור קשר", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-emerald-400 transition-colors text-sm font-inter"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-bold text-yellow-400 uppercase tracking-widest mb-6 text-sm">חברו איתי</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/ram-walas-tal-b1830770" },
                  { label: "GitHub", href: "https://github.com/ramqa211-1?tab=repositories" },
                  { label: "Linktree", href: "https://linktr.ee/ram7walas" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-emerald-400 transition-colors text-sm font-inter"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
              © 2025 Ram Walastal. Powered by Brain Ram Services.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-yellow-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">AI-Driven Automation</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
