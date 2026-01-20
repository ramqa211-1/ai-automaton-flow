import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              רוצים להפוך רעיון למציאות או להכניס את ה-AI לארגון שלכם?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              בואו נדבר. בין אם אתם צריכים פיתוח של מוצר חדש, אוטומציה שתחסוך לכם שעות עבודה, 
              או הרצאה שתפתח לעובדים שלכם את הראש – אני כאן.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white glow-primary transition-all duration-300 text-lg px-8"
                onClick={() => window.open('https://wa.me/972544967709', '_blank')}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                בוואטסאפ שלי
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 ml-2" />
                קביעת שיחת ייעוץ
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
