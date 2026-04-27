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
import ContentHub from "@/components/ContentHub";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import VideoModal from "@/components/VideoModal";

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
      <ContentHub />
      <CTA />
      <Contact />

      <footer className="bg-foreground/5 border-t border-border py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-inter font-black text-sm uppercase tracking-widest text-foreground">Ram Walastal</span>
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
            © 2025 Ram Walastal. AI-Driven Automation.
          </p>
          <div className="flex gap-6">
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
                className="font-mono text-xs text-foreground/40 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
