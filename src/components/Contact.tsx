import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Link as LinkIcon, Phone, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:ramqaveles@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ram-walas-tal-b1830770" },
  { icon: Github, label: "GitHub", href: "https://github.com/ramqa211-1?tab=repositories" },
  { icon: LinkIcon, label: "Linktree", href: "https://linktr.ee/ram7walas" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "הודעה נשלחה בהצלחה!", description: "אחזור אליך בהקדם" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-8 surface-alt relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter mb-2">בוא נדבר</h2>
          <div className="kinetic-line max-w-xs mx-auto" />
          <p className="font-mono text-sm text-foreground/50 mt-4">
            יש לך פרויקט? רעיון? או סתם רוצה לשוחח? אשמח לשמוע
          </p>
        </motion.div>

        {/* WhatsApp + Phone CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.a
            href="https://wa.me/972548010190"
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
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4 mb-10"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 glass-bento rounded-xl border border-white/30 text-foreground/60 hover:text-primary hover:border-primary/40 transition-all duration-200"
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-bento rounded-3xl p-8 gradient-border"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="text"
              placeholder="שם מלא"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/60 border-border focus:border-primary text-right font-mono text-sm rounded-xl h-12"
            />
            <Input
              type="email"
              placeholder="אימייל"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/60 border-border focus:border-primary text-right font-mono text-sm rounded-xl h-12"
            />
            <Textarea
              placeholder="ההודעה שלך..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-white/60 border-border focus:border-primary text-right font-mono text-sm rounded-xl resize-none"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white py-4 rounded-xl font-inter font-semibold text-sm hover:bg-accent transition-colors duration-200 electric-glow"
            >
              שלח הודעה
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
