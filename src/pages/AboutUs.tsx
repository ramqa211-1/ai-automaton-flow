import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Bot,
  Workflow,
  ScanEye,
  GraduationCap,
  Building2,
  Code2,
  Sparkles,
  Target,
  Compass,
  HandshakeIcon,
  MessageCircle,
  Phone,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import BrainRamLogo from "@/components/BrainRamLogo";
import LogoAccent from "@/components/LogoAccent";
import CheetahMark from "@/components/CheetahMark";
import { useSeo } from "@/lib/useSeo";

const WHATSAPP = "https://wa.me/972548010190";
const CANONICAL = "https://ramqa211-1.github.io/ai-automaton-flow/about";

const META_DESCRIPTION =
  "Brain RAM של רם ולסטל — מהנדס QA Automation עם 10+ שנות ניסיון, בונה סוכני AI, אוטומציה חכמה ב-n8n והטמעת LLM לעסקים. הכירו את החזון, הניסיון והשירותים שלנו.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "אודות Brain RAM",
  url: CANONICAL,
  inLanguage: "he",
  mainEntity: {
    "@type": "Organization",
    name: "Brain RAM Services",
    alternateName: "בריין רם",
    url: "https://ramqa211-1.github.io/ai-automaton-flow/",
    email: "ramvt2@gmail.com",
    telephone: "+972548010190",
    founder: {
      "@type": "Person",
      name: "Ram Walastal",
      alternateName: "רם ולסטל",
      jobTitle: "AI Automation & LLM Integration Engineer",
    },
    description: META_DESCRIPTION,
    sameAs: [
      "https://www.linkedin.com/in/ram-walas-tal-b1830770",
      "https://github.com/ramqa211-1",
      "https://linktr.ee/ram7walas",
    ],
    knowsAbout: ["AI Agents", "n8n", "LLM Integration", "QA Automation", "Playwright", "Vision AI"],
  },
};

/** כרטיס H3 בתוך מקטע — אייקון + כותרת + טקסט */
function FeatureCard({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: typeof Bot;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55 }}
      className="glass-bento rounded-3xl p-7 gradient-border electric-glow-hover text-right flex flex-col gap-4"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center self-end shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground font-inter">{title}</h3>
      <p className="font-mono text-sm text-foreground/65 leading-relaxed">{children}</p>
    </motion.div>
  );
}

/** כותרת מקטע H2 ממורכזת עם קו קינטי */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-black text-foreground font-inter mb-3">{children}</h2>
      <div className="kinetic-line max-w-xs mx-auto" />
    </motion.div>
  );
}

const stats = [
  { value: "+10", label: "שנות ניסיון ב-QA Automation" },
  { value: "AI", label: "סוכנים אוטונומיים בפרודקשן" },
  { value: "n8n", label: "אוטומציה, Claude & Playwright" },
  { value: "ROI", label: "תוצאות מדידות לעסק" },
];

const AboutUs = () => {
  const navigate = useNavigate();

  useSeo({
    title: "אודות Brain RAM | רם ולסטל — אוטומציה, סוכני AI והטמעת LLM",
    description: META_DESCRIPTION,
    canonical: CANONICAL,
    jsonLd: JSON_LD,
  });

  // ניווט חזרה לעמוד הבית ואז גלילה לעוגן (העוגנים חיים רק ב-Index)
  const goToHomeAnchor = (id: string) => {
    navigate("/");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <main className="relative bg-background min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <Navbar />

      {/* ===== Hero / H1 ===== */}
      <section className="relative px-6 md:px-8 pt-36 md:pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 cyber-grid opacity-50" />
        <LogoAccent position="top-left" size="md" opacity={0.05} animated />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[-50px] bottom-[-30px] pointer-events-none z-0"
        >
          <CheetahMark size={300} opacity={0.06} rounded="lg" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-mono text-xs font-medium tracking-widest uppercase">אודות</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl md:text-5xl font-black gradient-text leading-tight font-inter mb-5"
          >
            אודות Brain RAM — הופכים טכנולוגיה מורכבת לפתרונות AI חכמים
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-mono text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            אנחנו ב-Brain RAM ממירים תהליכים ידניים לאוטומציה חכמה — סוכני AI, אינטגרציות LLM
            ובדיקות מונחות-AI שמחזירים לעסק שלכם את הדבר היקר ביותר: זמן.
          </motion.p>
        </div>
      </section>

      {/* ===== H2: מי עומד מאחורי Brain RAM ===== */}
      <section className="px-6 md:px-8 py-16 surface-alt relative overflow-hidden">
        <LogoAccent position="bottom-right" size="md" opacity={0.04} animated />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading>מי עומד מאחורי Brain RAM</SectionHeading>

          <div className="flex flex-col items-center mb-10">
            <BrainRamLogo size="xl" showText />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon={Code2} title="הרקע המקצועי">
              רם ולסטל — מהנדס QA Automation עם למעלה מ-10 שנות ניסיון. מומחה ב-Playwright,
              TypeScript, Selenium ו-CI/CD, וכיום מוביל בדיקות מונחות-AI ו-Vision AI UI Validation.
            </FeatureCard>
            <FeatureCard icon={Target} title="הפילוסופיה — יעילות לפני הכל" delay={0.1}>
              "פריק של טכנולוגיה ו-AI, אבל לפני הכל — מאמין ביעילות." אני רותם את הכלים החזקים
              ביותר (Claude Code, Cursor, n8n, Loveable) לטובת עסקים, אנשים ומשפחות.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ===== H2: מה אנחנו עושים ===== */}
      <section className="px-6 md:px-8 py-16 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>מה אנחנו עושים</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={Bot} title="אוטומציה וסוכני AI">
              בניית סוכני AI אוטונומיים ו-flows חכמים ב-n8n שמטפלים בלקוחות, לידים ותהליכים
              חוזרים — מסביב לשעון, בלי טעויות אנוש.
            </FeatureCard>
            <FeatureCard icon={Workflow} title="הטמעת LLM ופיתוח חכם" delay={0.1}>
              אינטגרציות LLM מתקדמות ופיתוח אפליקציות מואץ — מחברים את ה-AI ישירות לכלים ולמערכות
              שכבר עובדים אצלכם בעסק.
            </FeatureCard>
            <FeatureCard icon={ScanEye} title="בדיקות מונחות AI (QA Automation)" delay={0.2}>
              Vision AI UI Validation ובדיקות אוטומציה ב-CI/CD — מבטיחים שהמוצר עובד מושלם בכל
              גרסה, מבלי לבדוק ידנית.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ===== H2: הדרכות, הרצאות ומנטורינג ===== */}
      <section className="px-6 md:px-8 py-16 surface-alt relative overflow-hidden">
        <LogoAccent position="top-right" size="md" opacity={0.04} animated />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading>הדרכות, הרצאות ומנטורינג</SectionHeading>
          <p className="text-center font-mono text-sm text-foreground/55 -mt-6 mb-10">
            אני לא רק בונה — אני גם מלמד. הניסיון שלי כולל:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={Building2} title="ארגונים (Enterprise)">
              הטמעת Loveable ו-n8n בחברות ביטוח גדולות לייעול תהליכי עבודה — מ-Discovery ועד
              פרודקשן, כולל העברת ידע לצוות הפנימי.
            </FeatureCard>
            <FeatureCard icon={GraduationCap} title="קהילת המפתחים" delay={0.1}>
              הרצאות וסדנאות על ה-Edge של הטכנולוגיה (כמו MCP Playwright) למפתחים ולאנשי טכנולוגיה
              — תיאוריה שמתורגמת מיד למעשה.
            </FeatureCard>
            <FeatureCard icon={Sparkles} title="הדור הבא" delay={0.2}>
              סדנאות והרצאות לבני נוער על עתיד ה-AI ואיך לרתום אותו ליצירה — כי החדשנות מתחילה
              בהשראה.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ===== H2: למה לעבוד עם Brain RAM ===== */}
      <section className="px-6 md:px-8 py-16 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>למה לעבוד עם Brain RAM</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={Target} title="ROI מדיד">
              כל פרויקט מתחיל במיפוי כאבים ו-ROI מחושב. אנחנו מודדים הצלחה בשעות שנחסכות
              ובכסף שנשאר אצלכם.
            </FeatureCard>
            <FeatureCard icon={Compass} title="ידע מהשטח" delay={0.1}>
              לא תיאוריה — פתרונות שנבנו ורצים בפרודקשן בארגונים אמיתיים. אנחנו יודעים מה עובד
              כי כבר בנינו את זה.
            </FeatureCard>
            <FeatureCard icon={HandshakeIcon} title="ליווי מלא והעברת ידע" delay={0.2}>
              מהרעיון ועד ההטמעה — עם תיעוד, תמיכה לאחר השקה והעצמת הצוות שלכם להמשיך לבד.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ===== H2: המספרים מאחורי Brain RAM ===== */}
      <section className="px-6 md:px-8 py-16 surface-alt relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading>המספרים מאחורי Brain RAM</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-bento rounded-3xl p-6 gradient-border text-center flex flex-col items-center gap-2"
              >
                <span className="text-3xl md:text-4xl font-black gradient-text font-inter">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-foreground/60 leading-relaxed">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== H2: CTA ===== */}
      <section className="px-6 md:px-8 py-20 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-bento rounded-3xl p-8 md:p-12 gradient-border electric-glow text-center"
          >
            <h2 className="text-2xl md:text-3xl font-black text-foreground font-inter mb-3">
              בואו נבנה את האוטומציה הבאה שלכם
            </h2>
            <p className="font-mono text-sm text-foreground/60 mb-8 max-w-lg mx-auto">
              שיחת ייעוץ ראשונית חינמית, ללא התחייבות. נמפה יחד את ההזדמנויות בעסק שלכם.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-inter font-bold text-base shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5d] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                שלח הודעה בוואטסאפ
              </motion.a>
              <motion.a
                href="tel:0548010190"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 glass-bento border-2 border-primary/40 text-primary px-8 py-4 rounded-2xl font-inter font-bold text-base hover:border-primary/70 hover:bg-primary/5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                054-8010190
              </motion.a>
            </div>
            <button
              onClick={() => goToHomeAnchor("contact")}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-foreground/50 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              לטופס יצירת קשר בעמוד הבית
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-emerald-500/20 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <BrainRamLogo size="lg" showText />
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest text-center">
            © 2025 Ram Walastal. Powered by Brain Ram Services.
          </p>
          <button
            onClick={() => navigate("/")}
            className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← חזרה לעמוד הבית
          </button>
        </div>
      </footer>
    </main>
  );
};

export default AboutUs;
