import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Training from "@/components/Training";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import WhatIBring from "@/components/WhatIBring";
import Expertise from "@/components/Expertise";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import VideoModal from "@/components/VideoModal";

const Index = () => {
  return (
    <main className="relative bg-background">
      <div className="fixed inset-0 -z-10 bg-background" />

      <VideoModal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Training />
      <TechStack />
      <WhatIBring />
      <Expertise />
      <Capabilities />
      <Portfolio />
      <CTA />
      <Contact />

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-inter font-black text-sm uppercase tracking-widest text-foreground">Ram Walastal</span>
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
            © 2025 Ram Walastal. AI-Driven Automation.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "GitHub", "Linktree"].map((link) => (
              <span key={link} className="font-mono text-xs text-foreground/40 hover:text-primary cursor-pointer transition-colors uppercase tracking-wider">
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
