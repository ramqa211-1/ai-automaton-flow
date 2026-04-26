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
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <main className="relative">
      {/* Background grid pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <Navbar />
      <Hero />
      <VideoSection />
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
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Ram Walastal. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
