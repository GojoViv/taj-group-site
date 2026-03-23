"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Anchor,
  Building2,
  ShoppingBag,
  Rocket,
  ArrowRightLeft,
  Store,
  Mail,
  MessageCircle,
  ExternalLink,
  Star,
  Heart,
  Shield,
  Phone,
  MapPin,
  TrendingUp,
  Package,
  HandHeart,
  Briefcase,
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

/* ─── Business platform card ─── */
interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}
function PlatformCard({ icon, title, description, delay = 0 }: PlatformCardProps) {
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

/* ─── Generation card ─── */
interface GenerationCardProps {
  generation: string;
  name: string;
  title: string;
  role: string;
  description: string;
  delay?: number;
}
function GenerationCard({ generation, name, title, role, description, delay = 0 }: GenerationCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full card-hover">
        <div className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-4">{generation}</div>
        <h3 className="font-playfair text-2xl text-white font-bold mb-1">{name}</h3>
        <p className="text-[#d4a843]/80 text-sm mb-1">{title}</p>
        <p className="text-white/40 text-xs tracking-wide uppercase mb-5">{role}</p>
        <div className="gold-line h-px w-16 my-4 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
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
          TAJ CORPORATION
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
        {/* Background radial glows */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #d4a843 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4a843 0%, transparent 40%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#d4a843] text-xs tracking-[0.4em] uppercase mb-8"
          >
            Three Generations &bull; Eleven Platforms &bull; One Vision
          </motion.p>

          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-none tracking-tight">
            TAJ Corporation
          </h1>

          <div className="gold-line h-px w-32 mx-auto my-6" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-playfair text-[#d4a843] text-2xl md:text-3xl italic font-light mb-6"
          >
            Enduring Legacy. Institutional Leadership. Global Enterprise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/60 text-lg md:text-xl tracking-wide"
          >
            Mohamed Faizal Taj &mdash; Director, Brand Ambassador &amp; Family Representative
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#legacy"
              className="px-8 py-3 bg-[#d4a843] text-[#0a0c14] font-semibold rounded-full text-sm tracking-wide hover:bg-[#e8c470] transition-colors"
            >
              Our Story
            </a>
            <a
              href="#platforms"
              className="px-8 py-3 border border-[#d4a843]/40 text-[#d4a843] font-semibold rounded-full text-sm tracking-wide hover:border-[#d4a843] hover:bg-[#d4a843]/5 transition-colors"
            >
              Business Platforms
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#legacy"
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

      {/* ═══ LEGACY / OUR STORY ═══ */}
      <section id="legacy" className="py-28 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Three Generations of{" "}
              <span className="gold-gradient">Trust &amp; Vision</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
              The TAJ name shares resonance with the Taj Mahal — a symbol of excellence,
              heritage, trust and timeless value. Built across decades and continents,
              this is a story of integrity, evolution, and ambition.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <GenerationCard
              generation="First Generation — The Vision"
              name="K. Tajudeen"
              title="Late Founder &amp; Chairman"
              role="The Foundation"
              description="Late Mr. K. Tajudeen laid the foundation of TAJ Corporation with an unwavering belief in integrity, responsibility, and respect. His vision, values and principles became the moral compass that has guided every subsequent generation. His founding declaration — that every individual is to be treated with dignity, responsibility, and respect — remains the cornerstone of the enterprise to this day."
              delay={0}
            />
            <GenerationCard
              generation="Second Generation — The Evolution"
              name="Dr. T. Saleem Basha"
              title="Managing Director"
              role="The Transformation"
              description="Dr. T. Saleem Basha transitioned the family enterprise into a professionally governed, globally oriented organisation. Known for decisive, creative and forward-thinking leadership, he expanded the Group's footprint across international markets and built institutional frameworks that elevated TAJ from a family business to a respected global enterprise — preserving the founder's values while embracing modern excellence."
              delay={0.15}
            />
            <GenerationCard
              generation="Third Generation — The Future"
              name="Mohamed Faizal Taj"
              title="Director, Brand Ambassador &amp; Family Representative"
              role="The Momentum"
              description="A serial entrepreneur with a global outlook, Faizal Taj carries the family legacy into new frontiers. His focus spans strategic diversification, ecosystem creation, venture incubation, international market integration, and brand-led global expansion. He is an unofficial cultural and commercial ambassador of Indian enterprise — passionate global coach, consultant and traveller who lives by the ethos: Body. Mind. Soul."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ═══ FAIZAL TAJ PROFILE ═══ */}
      <section id="faizal" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Philosophy */}
            <FadeIn>
              <SectionLabel>Personal Profile</SectionLabel>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Faizal Taj &mdash;{" "}
                <span className="gold-gradient">The Philosophy</span>
              </h2>
              <GoldLine className="mx-0" />
              <p className="text-white/65 text-sm leading-relaxed mb-8">
                A serial entrepreneur and global citizen, Faizal Taj embodies a philosophy
                rooted in acceptance, intention and forward momentum. His personal writings
                and coaching practice reveal a leader who has turned challenges into
                philosophy and failure into fuel.
              </p>

              <div className="space-y-5">
                {[
                  "Past is past, present is today from now",
                  "Acceptance, no expectations",
                  "Create &amp; lead future",
                  "Challenges cherished",
                  "Embrace failure",
                ].map((quote, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-4 border-l-2 border-[#d4a843]/40 pl-5">
                      <p className="font-playfair text-white/80 text-lg italic leading-snug"
                        dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }}
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            {/* Right: Focus Areas + Ethos */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div className="border border-[#d4a843]/20 rounded-2xl p-8 bg-[#0a0c14]">
                  <SectionLabel>Strategic Focus Areas</SectionLabel>
                  <ul className="space-y-4">
                    {[
                      "Strategic diversification across markets and sectors",
                      "Ecosystem creation and venture incubation",
                      "International market integration",
                      "Brand-led global expansion",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                        <span className="text-[#d4a843] mt-0.5 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="border border-white/10 rounded-2xl p-8 bg-[#0a0c14]">
                  <SectionLabel>Ethos &amp; Identity</SectionLabel>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { label: "Body", desc: "Physical vitality as the foundation of performance" },
                      { label: "Mind", desc: "Intentional clarity that drives strategic insight" },
                      { label: "Soul", desc: "Values-driven leadership that creates lasting legacies" },
                    ].map((item) => (
                      <div key={item.label} className="p-4">
                        <div className="font-playfair text-[#d4a843] text-xl font-bold mb-2">{item.label}</div>
                        <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/50 text-xs tracking-widest uppercase">
                      Passionate Global Coach &bull; Consultant &bull; Traveller
                    </p>
                    <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
                      Intensive Intention Specialist
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS PLATFORMS ═══ */}
      <section id="platforms" className="py-28 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Business Platforms</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Eleven Verticals.{" "}
              <span className="gold-gradient">One Integrated Vision.</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
              Each platform of TAJ Corporation is built to create lasting value — across
              industries, geographies and generations. Together they form a diversified
              global enterprise ecosystem.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <PlatformCard
              icon={<Rocket size={28} />}
              title="Taj Business Hub"
              description="Venture incubation and acceleration platform for startups, scale enterprises, and innovation-driven growth. The engine room for TAJ Corporation's next generation of businesses."
              delay={0}
            />
            <PlatformCard
              icon={<ArrowRightLeft size={28} />}
              title="AABCD — Asia–Africa Business Corridor"
              description="Global entrepreneur grooming platform connecting leaders, capital and investments across Asia and Africa. Building the bridge between two of the world's fastest-growing economic regions."
              delay={0.1}
            />
            <PlatformCard
              icon={<Globe size={28} />}
              title="Taj Global Village"
              description="Cross-border business and lifestyle ecosystem where trade, culture, investment and entrepreneurship converge. A platform for the globally minded individual and institution."
              delay={0.2}
            />
            <PlatformCard
              icon={<Anchor size={28} />}
              title="South India Shipping"
              description="Logistics and maritime services spanning coastal shipping, port-linked logistics and regional trade. The operational backbone connecting India to global supply chains."
              delay={0.3}
            />
            <PlatformCard
              icon={<Building2 size={28} />}
              title="Taj Realtors"
              description="Real estate platform focused on asset acquisition, management, maintenance and disposition for institutional investors and family offices. Precision in property across strategic markets."
              delay={0.4}
            />
            <PlatformCard
              icon={<ShoppingBag size={28} />}
              title="Globe Locks"
              description="Consumer retail brand with active operations in India. Bringing quality, trust and the TAJ heritage directly to everyday consumers through a strong retail presence."
              delay={0.5}
            />
            <PlatformCard
              icon={<Store size={28} />}
              title="DFO — Direct Factory Outlet"
              description="International retail operations in Singapore and Malaysia, offering premium products at accessible price points. TAJ Corporation's consumer-facing bridge to Southeast Asian markets."
              delay={0.6}
            />
            <PlatformCard
              icon={<TrendingUp size={28} />}
              title="Al Faizal Trading Pvt. Ltd."
              description="Trading operations spanning domestic and international markets. A dedicated trading arm that drives commercial exchange across industries and geographies under the TAJ banner."
              delay={0.7}
            />
            <PlatformCard
              icon={<Package size={28} />}
              title="All Port Logistics"
              description="Port and logistics services providing end-to-end supply chain solutions. Connecting trade networks through efficient port operations and freight management across key maritime corridors."
              delay={0.8}
            />
            <PlatformCard
              icon={<HandHeart size={28} />}
              title="Taj Charitable"
              description="Social responsibility and charitable initiatives that give back to communities. Embodying the founder's values of dignity, responsibility and respect through meaningful social impact."
              delay={0.9}
            />
            <PlatformCard
              icon={<Briefcase size={28} />}
              title="Taj Holding &amp; Investment"
              description="Holdings and investment vehicle overseeing the Group's capital allocation, asset management and long-term investment strategy across sectors and geographies."
              delay={1.0}
            />
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL PRESENCE ═══ */}
      <section id="presence" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Global Presence</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Rooted in India.{" "}
              <span className="gold-gradient">Built for the World.</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-lg mx-auto text-sm leading-relaxed">
              TAJ Corporation maintains active operations across seven strategic markets —
              each chosen for its role in the global economy and TAJ&apos;s long-term enterprise vision.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-16">
            <CountryCard flag="🇮🇳" country="India" detail="Headquarters &amp; Origin" delay={0} />
            <CountryCard flag="🇲🇾" country="Malaysia" detail="Southeast Asia Hub" delay={0.1} />
            <CountryCard flag="🇸🇬" country="Singapore" detail="DFO Retail &amp; Finance" delay={0.2} />
            <CountryCard flag="🇦🇪" country="UAE" detail="Global Trade Gateway" delay={0.3} />
            <CountryCard flag="🇬🇧" country="United Kingdom" detail="European Operations" delay={0.4} />
            <CountryCard flag="🇦🇺" country="Australia" detail="Asia-Pacific Presence" delay={0.5} />
            <CountryCard flag="🇨🇳" country="China" detail="East Asia Corridor" delay={0.6} />
          </div>

          <FadeIn>
            <div className="border border-[#d4a843]/20 rounded-2xl p-8 md:p-12 bg-[#0a0c14] text-center">
              <p className="font-playfair text-xl md:text-2xl text-white/80 italic leading-relaxed mb-4">
                &ldquo;Taj Corporation stands as a long-term, values-driven global enterprise,
                combining generational wisdom with modern execution to build enduring
                institutions across markets.&rdquo;
              </p>
              <div className="text-[#d4a843] text-sm tracking-widest uppercase">
                — TAJ Corporation Positioning Statement
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              The Three Pillars
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-xl mx-auto text-sm leading-relaxed">
              Enshrined by our founder, Late Mr. K. Tajudeen: &ldquo;Every individual is to be
              treated with dignity, responsibility, and respect.&rdquo;
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star size={32} />,
                title: "Dignity",
                text: "Every person — partner, client, colleague or stranger — is met with honour and grace. Dignity is not earned in our organisation; it is given unconditionally, as our founder mandated.",
              },
              {
                icon: <Shield size={32} />,
                title: "Responsibility",
                text: "We own our commitments, our actions and their consequences. From the boardroom to the warehouse, responsibility flows through every layer of the TAJ Corporation enterprise.",
              },
              {
                icon: <Heart size={32} />,
                title: "Respect",
                text: "Respect for people, for cultures, for markets and for the trust placed in us drives every decision we make. It is the invisible currency that has sustained three generations of growth.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="text-center p-8 border border-white/10 rounded-2xl bg-[#0f1220] card-hover">
                  <div className="text-[#d4a843] flex justify-center mb-5">{item.icon}</div>
                  <h3 className="font-playfair text-2xl text-white font-bold mb-4">{item.title}</h3>
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
              Whether you are seeking to partner, invest, explore a venture, or connect with
              a global leader — TAJ Corporation is open to meaningful conversations that create
              lasting value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:faiztaj@mail.com"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#d4a843] text-[#0a0c14] font-semibold rounded-full hover:bg-[#e8c470] transition-colors"
              >
                <Mail size={18} />
                faiztaj@mail.com
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

            <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
              <FadeIn delay={0.1}>
                <div className="border border-white/10 rounded-xl p-6 bg-[#0a0c14]">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={16} className="text-[#d4a843] flex-shrink-0" />
                    <span className="text-[#d4a843] text-xs tracking-widest uppercase">Phone</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">+91 44 2345 4044</p>
                  <p className="text-white/70 text-sm leading-relaxed">+91 95 4333 4444</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="border border-white/10 rounded-xl p-6 bg-[#0a0c14]">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-[#d4a843] flex-shrink-0" />
                    <span className="text-[#d4a843] text-xs tracking-widest uppercase">Address</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    55-A, Santhome High Road<br />Chennai, India
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="border border-white/10 rounded-xl p-6 bg-[#0a0c14]">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe size={16} className="text-[#d4a843] flex-shrink-0" />
                    <span className="text-[#d4a843] text-xs tracking-widest uppercase">Website</span>
                  </div>
                  <a
                    href="https://tajgroup.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-[#d4a843] transition-colors inline-flex items-center gap-1.5"
                  >
                    tajgroup.in <ExternalLink size={12} />
                  </a>
                </div>
              </FadeIn>
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
          <div className="font-playfair text-[#d4a843]/60 text-sm font-bold tracking-wide">
            TAJ CORPORATION
          </div>
          <div className="text-center">
            <span className="text-[#d4a843]/50 italic text-xs">
              Enduring Legacy. Institutional Leadership. Global Enterprise.
            </span>
          </div>
          <div className="text-center md:text-right">
            <div className="mb-1">India &bull; Malaysia &bull; Singapore &bull; UAE &bull; UK &bull; Australia &bull; China</div>
            <div>&copy; {new Date().getFullYear()} TAJ Corporation. All rights reserved.</div>
          </div>
        </div>
      </footer>

    </main>
  );
}
