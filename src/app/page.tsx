"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ChevronDown,
  Briefcase,
  TrendingUp,
  Globe,
  Package,
  MapPin,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

/* ─── Reusable fade-up wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Gold divider ─── */
function GoldLine({ className = "" }: { className?: string }) {
  return (
    <div className={`gold-line h-px w-full max-w-xs mx-auto my-6 ${className}`} />
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-3">
      {children}
    </p>
  );
}

/* ─── Service card ─── */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}
function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="card-hover border border-white/10 rounded-xl p-7 bg-[#0f1220] h-full">
        <div className="text-[#d4a843] mb-5">{icon}</div>
        <h3 className="font-playfair text-xl text-white mb-3 font-semibold">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </FadeIn>
  );
}

/* ─── Country card ─── */
interface CountryCardProps {
  flag: string;
  country: string;
  detail: string;
  delay?: number;
}
function CountryCard({ flag, country, detail, delay = 0 }: CountryCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="border border-white/10 rounded-xl p-6 bg-[#0f1220] text-center card-hover">
        <div className="text-4xl mb-3">{flag}</div>
        <h4 className="font-playfair text-lg text-white font-semibold mb-1">{country}</h4>
        <p className="text-white/50 text-xs tracking-wide">{detail}</p>
      </div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5 bg-[#0a0c14]/80 backdrop-blur-md">
        <div className="font-playfair text-[#d4a843] text-lg font-bold tracking-wide">
          TAJ GROUP
        </div>
        <a
          href="https://tajgroup.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/60 hover:text-[#d4a843] transition-colors text-sm"
        >
          tajgroup.in <ExternalLink size={12} />
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #d4a843 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4a843 0%, transparent 40%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#d4a843] text-xs tracking-[0.4em] uppercase mb-8"
          >
            TAJ Group of Companies
          </motion.p>

          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-none tracking-tight">
            Faizal Taj
          </h1>

          <div className="gold-line h-px w-32 mx-auto my-6" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/70 text-lg md:text-xl mb-3 tracking-wide"
          >
            Director — TAJ Group of Companies
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-playfair text-[#d4a843] text-2xl md:text-3xl italic font-light"
          >
            Third Generation. Global Vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="px-8 py-3 bg-[#d4a843] text-[#0a0c14] font-semibold rounded-full text-sm tracking-wide hover:bg-[#e8c470] transition-colors"
            >
              Discover Our Story
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#d4a843]/40 text-[#d4a843] font-semibold rounded-full text-sm tracking-wide hover:border-[#d4a843] hover:bg-[#d4a843]/5 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#d4a843] transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.a>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-28 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <FadeIn>
              <SectionLabel>About Faizal</SectionLabel>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
                A Life Built on{" "}
                <span className="gold-gradient">Purpose & People</span>
              </h2>
              <GoldLine className="mx-0" />
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Faizal Taj is more than a businessman — he is a global coach, a conscious
                  leader, and a bridge between cultures. With decades of entrepreneurial
                  experience rooted in a family legacy spanning three generations, he has built
                  an empire grounded in values, trust, and vision.
                </p>
                <p>
                  A passionate traveller and influencer, Faizal works at the intersection of
                  body, mind, and soul — believing that true success is measured not just by
                  enterprise, but by the lives transformed along the way. His coaching
                  philosophy integrates personal growth with professional mastery, creating
                  leaders who are as human as they are effective.
                </p>
                <p>
                  As an intensive intention specialist, he has guided organisations and
                  individuals across Asia, the Middle East, and beyond — aligning vision with
                  execution in markets that others find complex.
                </p>
              </div>
            </FadeIn>

            {/* Right column */}
            <FadeIn delay={0.2}>
              <div className="border border-[#d4a843]/20 rounded-2xl p-8 bg-[#0f1220]">
                <SectionLabel>The TAJ Group Legacy</SectionLabel>
                <h3 className="font-playfair text-2xl text-white font-bold mb-4">
                  Three Generations of Trust
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  TAJ Group of Companies was not built overnight. It is the culmination of a
                  third-generational family business — a journey of many decades shaped by
                  integrity, adaptability, and an unrelenting drive to pioneer. From trading
                  roots to international ventures, the Group today operates across four
                  countries with a portfolio spanning consulting, investments, logistics, and
                  cross-border commerce.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["3rd Gen", "Family Business"],
                    ["4 Countries", "Active Operations"],
                    ["Decades", "Of Experience"],
                    ["Global", "Mission & Reach"],
                  ].map(([stat, label]) => (
                    <div key={stat} className="border border-white/10 rounded-lg p-4">
                      <div className="font-playfair text-[#d4a843] text-xl font-bold">{stat}</div>
                      <div className="text-white/50 text-xs mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Our Verticals
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-xl mx-auto text-sm leading-relaxed">
              Four pillars. One integrated vision. Each vertical of the TAJ Group is built
              to create lasting value across industries and borders.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Briefcase size={28} />}
              title="Advisory Consulting & Coaching"
              description="Strategic advisory across business verticals, paired with transformational coaching that develops leaders at the intersection of purpose and performance."
              delay={0}
            />
            <ServiceCard
              icon={<TrendingUp size={28} />}
              title="Fund Management & Investments"
              description="Disciplined capital allocation and fund stewardship guided by decades of market experience and a cross-border perspective on risk and return."
              delay={0.1}
            />
            <ServiceCard
              icon={<Globe size={28} />}
              title="International Logistics & Trading"
              description="End-to-end trade facilitation and logistics solutions connecting Asia, the Gulf, and global markets — efficiently, reliably, at scale."
              delay={0.2}
            />
            <ServiceCard
              icon={<Package size={28} />}
              title="Products, Projects & Properties"
              description="Curated product ventures, landmark projects, and property portfolios across strategic geographies — built on research, relationships, and results."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ═══ COMPANIES ═══ */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0c14] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>Our Companies</SectionLabel>
            <h2 className="font-playfair text-3xl text-white font-bold">
              The TAJ Ecosystem
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                name: "Al Ayan Business Consulting & Development",
                location: "Malaysia",
                description:
                  "Anchoring TAJ Group's consulting and development capabilities across Southeast Asia with deep regional expertise.",
              },
              {
                name: "Chennai Dubai Hub",
                location: "India & UAE",
                description:
                  "A strategic corridor bridging South Asian enterprise with Gulf market opportunities across trade and commerce.",
              },
              {
                name: "Taj Business HUB",
                location: "ARAB & Asia",
                description:
                  "Pioneering cross-country brands, concepts, products, and ventures between the Arab world and Asian markets.",
              },
            ].map((co, i) => (
              <FadeIn key={co.name} delay={i * 0.1}>
                <div className="border border-white/10 rounded-xl p-7 bg-[#0f1220] h-full card-hover">
                  <div className="flex items-center justify-center gap-2 text-[#d4a843] mb-4">
                    <MapPin size={14} />
                    <span className="text-xs tracking-widest uppercase">{co.location}</span>
                  </div>
                  <h4 className="font-playfair text-lg text-white font-semibold mb-3">
                    {co.name}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">{co.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL PRESENCE ═══ */}
      <section id="presence" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Global Presence</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Operating Across 4 Countries
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-lg mx-auto text-sm leading-relaxed">
              Rooted in values. Reaching across borders. TAJ Group maintains active operations
              across four strategic markets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            <CountryCard flag="🇲🇾" country="Malaysia" detail="Southeast Asia HQ" delay={0} />
            <CountryCard flag="🇸🇬" country="Singapore" detail="Financial Gateway" delay={0.1} />
            <CountryCard flag="🇦🇪" country="Dubai, UAE" detail="Arab World Hub" delay={0.2} />
            <CountryCard flag="🇮🇳" country="Chennai, India" detail="South Asia Base" delay={0.3} />
          </div>

          <FadeIn>
            <div className="border border-[#d4a843]/20 rounded-2xl p-8 md:p-12 bg-[#0a0c14] text-center">
              <p className="font-playfair text-xl md:text-2xl text-white/80 italic leading-relaxed mb-4">
                &ldquo;Pioneering business in cross-country brands, concepts, products,
                projects, trade, and ventures — globally.&rdquo;
              </p>
              <div className="text-[#d4a843] text-sm tracking-widest uppercase">
                — Mission, TAJ Group of Companies
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ═══ */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "◎",
                title: "Body",
                text: "Physical vitality and disciplined presence are the foundation of every high-performing leader. We believe health is wealth in its truest form.",
              },
              {
                icon: "◈",
                title: "Mind",
                text: "A clear, intentional mind unlocks strategic insight. Faizal's coaching methodology sharpens focus, dissolves limiting beliefs, and amplifies decision-making.",
              },
              {
                icon: "◇",
                title: "Soul",
                text: "Authentic success is aligned with one's deepest values. Soul-centred leadership creates legacies that endure beyond balance sheets.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="text-center p-6">
                  <div className="text-[#d4a843] text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-playfair text-2xl text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Let&apos;s Build Something Together
            </h2>
            <GoldLine />
            <p className="text-white/60 mb-10 leading-relaxed">
              Whether you are seeking strategic advisory, investment partnerships,
              logistics solutions, or simply a conversation with a global coach — we would
              be glad to connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:info@tajgroup.in"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#d4a843] text-[#0a0c14] font-semibold rounded-full hover:bg-[#e8c470] transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
              <a
                href="https://wa.me/601234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#d4a843]/40 text-[#d4a843] font-semibold rounded-full hover:border-[#d4a843] hover:bg-[#d4a843]/5 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <a
              href="https://tajgroup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#d4a843] transition-colors text-sm"
            >
              Visit tajgroup.in <ExternalLink size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10 px-6 md:px-12 border-t border-white/5 bg-[#0a0c14]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <div className="font-playfair text-[#d4a843]/60 text-sm">TAJ Group of Companies</div>
          <div>
            Malaysia &bull; Singapore &bull; Dubai &bull; Chennai
          </div>
          <div>
            &copy; {new Date().getFullYear()} Faizal Taj. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
