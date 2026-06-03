import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ServiceTracks from "@/components/ServiceTracks";
import Training from "@/components/Training";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import ContentHub from "@/components/ContentHub";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import VideoModal from "@/components/VideoModal";
import BrainRamLogo from "@/components/BrainRamLogo";
import CheetahMark from "@/components/CheetahMark";

const Index = () => {
  return (
    <main className="relative bg-background">
      <div className="fixed inset-0 -z-10 bg-background" />

      <VideoModal />
      <Navbar />
      <Hero />
      <TrustBar />
      <PainPoints />
      <About />
      <Solution />
      <HowItWorks />
      <ServiceTracks />
      <Training />
      <Portfolio />
      <ClientLogos />
      <ContentHub />
      <FAQ />
      <Contact />

      <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-emerald-500/20 py-16 px-8 overflow-hidden">
        {/* Gradient glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-yellow-400/5 rounded-full blur-3xl -z-0 opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-emerald-500/5 to-transparent rounded-full blur-3xl -z-0 opacity-30" />

        {/* Large cheetah watermark — center-right background */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none">
          <CheetahMark size={280} opacity={0.06} rounded="lg" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-emerald-500/20">
            {/* Branding Section */}
            <div className="flex flex-col gap-6">
              <BrainRamLogo size="xl" showText={true} />
              <p className="font-mono text-sm text-slate-400 leading-relaxed">
                שילוב של AI, אוטומציה ופיתוח חכם כדי לשנות את עולם העסקים.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-emerald-400 uppercase tracking-widest mb-6 text-sm">קישורים</h4>
              <ul className="space-y-3">
                {[
                  { label: "ראשי", to: "#home" },
                  { label: "אודות", to: "/about" },
                  { label: "שירותים", to: "#services" },
                  { label: "תיק עבודות", to: "#portfolio" },
                  { label: "צור קשר", to: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("/") ? (
                      <Link
                        to={link.to}
                        className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-inter"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.to}
                        className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-inter"
                      >
                        {link.label}
                      </a>
                    )}
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
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-inter"
                  >
                    {link.label} ←
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
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
