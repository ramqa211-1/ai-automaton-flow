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
                className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#25D366]/90 hover:to-[#128C7E]/90 text-white font-bold text-lg px-8 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 border-2 border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-300 overflow-hidden group"
                onClick={() => window.open('https://wa.me/972548010190', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 ml-2 relative z-10" />
                <span className="relative z-10">בוואטסאפ שלי</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg px-8 font-bold backdrop-blur-sm"
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
