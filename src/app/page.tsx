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
  Car,
  Container,
  Zap,
  Leaf,
  Armchair,
  Smartphone,
  Wrench,
  Users,
  Award,
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
            {/* First Generation */}
            <FadeIn delay={0}>
              <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full card-hover">
                <div className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-4">First Generation — The Vision</div>
                <h3 className="font-playfair text-2xl text-white font-bold mb-1">Janab K. Tajudeen</h3>
                <p className="text-[#d4a843]/80 text-sm mb-1">Late Founder &amp; Chairman</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mb-5">The Foundation</p>
                <div className="gold-line h-px w-16 my-4 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Starting as a small transport operator serving Madras Port Trust in the early 1960s, Janab K. Tajudeen built his fleet from nothing to over 100 lorries — becoming a major force in Madras Port logistics. He founded the <span className="text-[#d4a843]/80">Chennai Harbour Lorry Owners&apos; Association</span> and was later appointed as a <span className="text-[#d4a843]/80">Customs Clearing Agent by Madras Customs House</span>, laying the foundation for what would become a multi-generational enterprise.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Madras Port Trust", "100+ Lorries", "Customs Clearing", "CHLO Association"].map((badge) => (
                    <span key={badge} className="px-3 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-[10px] font-inter tracking-wide">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Second Generation */}
            <FadeIn delay={0.15}>
              <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full card-hover">
                <div className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-4">Second Generation — The Evolution</div>
                <h3 className="font-playfair text-2xl text-white font-bold mb-1">Dr. T. Saleem Basha</h3>
                <p className="text-[#d4a843]/80 text-sm mb-1">Managing Director</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mb-5">The Transformation</p>
                <div className="gold-line h-px w-16 my-4 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Holding a Doctorate in Customs Clearing &amp; Forwarding and an MBA from Amity University, Singapore, Dr. Saleem Basha served as <span className="text-[#d4a843]/80">President of the Chennai Harbour Lorry Owners&apos; Association for 30 years</span>. He expanded TAJ globally — establishing offices in Australia, Dubai, Malaysia and Singapore — while building <span className="text-[#d4a843]/80">SISECO (South Indian Shipping &amp; Export Co.)</span>, customs clearing agents for 30+ years serving top Government of India undertakings.
                </p>
                <p className="text-[#d4a843] text-xs tracking-[0.2em] uppercase font-inter mb-2">Major Clients</p>
                <div className="flex flex-wrap gap-2">
                  {["Indian Oil Corp (IOC)", "Bharat Petroleum", "Royal Enfield", "State Trading Corp", "MMTC", "Project Equipment Corp"].map((client) => (
                    <span key={client} className="px-3 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-[10px] font-inter tracking-wide">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Third Generation */}
            <FadeIn delay={0.3}>
              <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full card-hover">
                <div className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-4">Third Generation — The Future</div>
                <h3 className="font-playfair text-2xl text-white font-bold mb-1">Mohamed Faizal Taj</h3>
                <p className="text-[#d4a843]/80 text-sm mb-1">Director, Brand Ambassador &amp; Family Representative</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mb-5">The Momentum</p>
                <div className="gold-line h-px w-16 my-4 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Holding an MBA from <span className="text-[#d4a843]/80">London South Bank University, London, UK</span>, Faizal Taj leads the digital transformation and international diversification of TAJ Group. A serial entrepreneur with a global outlook, he carries the family legacy into new frontiers spanning venture incubation, international market integration, and brand-led global expansion.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MBA, London South Bank University", "Digital Transformation", "Global Diversification"].map((badge) => (
                    <span key={badge} className="px-3 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-[10px] font-inter tracking-wide">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
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
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-2 leading-tight">
                Faizal Taj &mdash;{" "}
                <span className="gold-gradient">The Philosophy</span>
              </h2>
              <p className="font-playfair text-[#d4a843] text-xl italic mb-5">Global Prosperity Coach</p>

              {/* Academic credentials */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-1.5 rounded-full bg-[#d4a843]/20 border border-[#d4a843]/60 text-[#d4a843] text-xs font-inter font-semibold tracking-wide">
                  MBA — London South Bank University, UK
                </span>
              </div>

              {/* 5 Focus Pillars */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Health", "Wealth", "Peace", "Unity", "Happiness"].map((pillar) => (
                  <span
                    key={pillar}
                    className="px-4 py-1.5 rounded-full bg-[#d4a843]/15 border border-[#d4a843]/40 text-[#d4a843] text-xs font-inter font-semibold tracking-widest uppercase"
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              <GoldLine className="mx-0" />
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                A serial entrepreneur and global citizen, Faizal Taj embodies a philosophy
                rooted in acceptance, intention and forward momentum. His personal writings
                and coaching practice reveal a leader who has turned challenges into
                philosophy and failure into fuel.
              </p>

              {/* Philanthropy */}
              <div className="border-l-2 border-[#d4a843]/50 pl-5 mb-7">
                <p className="text-[#d4a843] text-xs tracking-[0.25em] uppercase font-inter mb-1">Philanthropist</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Adopting orphans and transforming lives — doing a 180&deg; transformation
                  in the lives of thousands of fellow human beings regardless of their differences.
                </p>
              </div>

              {/* Mantra quote */}
              <div className="rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-6 mb-8">
                <p className="font-playfair text-white/85 text-lg italic leading-relaxed">
                  &ldquo;Future is always nice to be wise in our own hands in the habit of
                  diversified investments&rdquo;
                </p>
                <p className="text-[#d4a843]/60 text-xs tracking-widest uppercase mt-3">— Faizal Taj</p>
              </div>

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

      {/* ═══ AABCD SECTION ═══ */}
      <section id="aabcd" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <FadeIn className="text-center mb-6">
            <SectionLabel>Business Platform</SectionLabel>
            <h2 className="font-playfair text-5xl md:text-7xl text-[#d4a843] font-bold mb-3 tracking-tight">
              AABCD
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-4 font-inter tracking-wide">
              Asia Africa Business Community Development
            </p>
            <div className="flex justify-center mb-4">
              <span className="px-4 py-1.5 rounded-full border border-[#d4a843]/40 text-[#d4a843] text-xs tracking-[0.25em] uppercase">
                Launched 2016 &bull; Malaysia
              </span>
            </div>
            <GoldLine />
          </FadeIn>

          {/* Mission Statement */}
          <FadeIn delay={0.1} className="text-center mb-20">
            <p className="font-playfair text-2xl md:text-4xl text-white/90 italic leading-relaxed max-w-4xl mx-auto">
              &ldquo;Nurturing 1,000 SMEs into globalisation.
              <br className="hidden md:block" /> One community at a time.&rdquo;
            </p>
            <p className="text-white/45 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
              Founded by Mr. Mohamed Faizal — 3rd generation TAJ Group entrepreneur — AABCD is an
              international wealth management &amp; consulting company built to uplift the Indian
              Business Community on a global stage. Focus markets span India, Malaysia, Singapore,
              the Middle East and Africa.
            </p>
          </FadeIn>

          {/* ABCD Cards */}
          <FadeIn delay={0.15} className="mb-20">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-8 text-center">
              What ABCD Stands For
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { letter: "A", label: "Assets", desc: "Wealth structuring, asset management & capital growth strategies." },
                { letter: "B", label: "Business", desc: "Business development, franchising, consulting & cross-border expansion." },
                { letter: "C", label: "Charity", desc: "Social responsibility, community uplifting & ethical finance principles." },
                { letter: "D", label: "Design", desc: "Branding, identity, creative direction & professional image building." },
              ].map((item, i) => (
                <FadeIn key={item.letter} delay={0.1 + i * 0.1}>
                  <div className="border border-[#d4a843]/25 rounded-2xl p-7 bg-[#0a0c14] text-center card-hover h-full">
                    <div className="font-playfair text-5xl text-[#d4a843] font-bold mb-2 leading-none">
                      {item.letter}
                    </div>
                    <h4 className="font-playfair text-white text-lg font-semibold mb-3">{item.label}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Who We Serve */}
          <FadeIn delay={0.2} className="mb-20 text-center">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-6">
              Who We Serve
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Startups", "Entrepreneurs", "SMEs", "Corporates", "CEOs", "HNIs", "Franchise Owners"].map((tag, i) => (
                <FadeIn key={tag} delay={0.05 * i}>
                  <span className="px-5 py-2 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-sm font-inter tracking-wide">
                    {tag}
                  </span>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Services Grid */}
          <FadeIn delay={0.25} className="mb-16">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-8 text-center">
              Services
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Consulting & Coaching",
                  desc: "Expert mentoring and strategic coaching programs that transform business leaders into global changemakers.",
                },
                {
                  title: "Business Development",
                  desc: "Franchising, expansions, bouquet services, launch pads and structured business bridging across markets.",
                },
                {
                  title: "Islamic Finance & Ethical Funding",
                  desc: "Ethical Etiquette Funding rooted in Islamic Finance principles — responsible capital for sustainable growth.",
                },
                {
                  title: "Cross-Border Expansion",
                  desc: "Enabling SMEs and corporates to expand internationally through structured cross-country strategy and fund raising.",
                },
                {
                  title: "Branding & Training",
                  desc: "Professional branding programs and training curricula designed to position businesses for global markets.",
                },
                {
                  title: "Events & Launch Pads",
                  desc: "High-impact networking events, entrepreneur summits and curated launch platforms across Asia and Africa.",
                },
              ].map((service, i) => (
                <FadeIn key={service.title} delay={0.08 * i}>
                  <div className="border border-white/10 rounded-xl p-6 bg-[#0a0c14] h-full card-hover">
                    <h4 className="font-playfair text-white text-base font-semibold mb-2">{service.title}</h4>
                    <div className="gold-line h-px w-10 mb-3 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                    <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Revenue & Values strip */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Revenue Streams */}
              <div className="border border-[#d4a843]/20 rounded-2xl p-8 bg-[#0a0c14]">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-5">Revenue Streams</p>
                <ul className="space-y-3">
                  {[
                    "Memberships — Premium / Mastermind / Business Connect",
                    "Consulting & Coaching Programs",
                    "Branding & Training Programs",
                    "Entrepreneur Incubation & Fund Raising",
                    "Events, Launch Pads & Networking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                      <span className="text-[#d4a843] mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Values */}
              <div className="border border-white/10 rounded-2xl p-8 bg-[#0a0c14]">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-5">Core Values</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Process Driven", desc: "Systematic, repeatable frameworks that scale." },
                    { label: "Human Development", desc: "People first — leaders who uplift communities." },
                    { label: "Collaboration", desc: "Partnerships and ecosystems over competition." },
                    { label: "Customisation", desc: "Tailored solutions for every SME and leader." },
                  ].map((v) => (
                    <div key={v.label} className="p-4 border border-white/5 rounded-xl">
                      <div className="font-playfair text-[#d4a843] text-sm font-semibold mb-1">{v.label}</div>
                      <p className="text-white/45 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ═══ TRADING VERTICALS ═══ */}
      <section id="trading" className="py-28 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Al-Ayan — Trading Verticals</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Seven Categories.{" "}
              <span className="gold-gradient">One Trading Vision.</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
              Faizal&apos;s trading portfolio spans seven high-impact categories, backed by international
              cargo logistics connecting Chennai, Kuala Lumpur, and beyond.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Car size={28} />,
                emoji: "🚗",
                title: "Automotive",
                desc: "Accessories & Components — quality parts and peripherals serving regional automotive markets.",
                delay: 0,
              },
              {
                icon: <Container size={28} />,
                emoji: "📦",
                title: "Container Systems",
                desc: "Expandable & Housing Systems — modular container solutions for residential and commercial use.",
                delay: 0.1,
              },
              {
                icon: <Zap size={28} />,
                emoji: "⚡",
                title: "Electronics & Electricals",
                desc: "Consumer and industrial electronics, electrical equipment, and Electric Vehicles (EVs).",
                delay: 0.2,
              },
              {
                icon: <Leaf size={28} />,
                emoji: "🌿",
                title: "Sunnah Foods",
                desc: "Dates, Honey & Olives — ethically sourced natural foods under the Oruspoon™ brand.",
                delay: 0.3,
              },
              {
                icon: <Armchair size={28} />,
                emoji: "🪑",
                title: "Furniture",
                desc: "Concept Living — curated furniture collections designed for modern, elegant living spaces.",
                delay: 0.4,
              },
              {
                icon: <Smartphone size={28} />,
                emoji: "📱",
                title: "Gadgets & Mobiles",
                desc: "Consumer tech, mobile devices, and accessories for the digitally connected generation.",
                delay: 0.5,
              },
              {
                icon: <Wrench size={28} />,
                emoji: "🔧",
                title: "Hardware",
                desc: "Industrial and consumer hardware supply spanning regional and international trade corridors.",
                delay: 0.6,
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={item.delay}>
                <div className="card-hover border border-white/10 rounded-xl p-7 bg-[#0f1220] h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="text-[#d4a843]">{item.icon}</div>
                  </div>
                  <h3 className="font-playfair text-xl text-white mb-3 font-semibold">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Logistics strip */}
          <FadeIn delay={0.4}>
            <div className="border border-[#d4a843]/25 rounded-2xl p-8 bg-[#0f1220] text-center">
              <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-4">International Logistics</p>
              <p className="font-playfair text-white text-2xl md:text-3xl font-bold mb-2">
                Chennai &nbsp;↔&nbsp; Kuala Lumpur &nbsp;↔&nbsp; Chennai
              </p>
              <p className="text-white/50 text-sm mt-3">
                International Cargo routes connecting South India with Southeast Asia — enabling seamless cross-border trade across all seven verticals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SIGNATURE SERVICES — GENERATIONAL BRIDGING ═══ */}
      <section id="services" className="py-28 px-6 md:px-12 bg-[#0f1220]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Signature Services</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Coach. Mentor. Train.{" "}
              <span className="gold-gradient">Till Success.</span>
            </h2>
            <GoldLine />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* One-to-One */}
            <FadeIn delay={0.1}>
              <div className="border border-white/10 rounded-2xl p-8 bg-[#0a0c14] h-full card-hover">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-4">One-to-One</p>
                <h3 className="font-playfair text-2xl text-white font-bold mb-4">Business Consult, Coach &amp; Mentor</h3>
                <div className="gold-line h-px w-16 mb-5 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Personalised, intensive one-to-one engagement — consulting, coaching, mentoring, and
                  training until success is achieved. Designed for leaders who demand results.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["CEOs", "Business Owners", "HNIs"].map((tag) => (
                    <span key={tag} className="px-4 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-xs font-inter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Generational Bridging — featured */}
            <FadeIn delay={0.2}>
              <div className="relative border-2 border-[#d4a843]/60 rounded-2xl p-8 bg-gradient-to-br from-[#d4a843]/10 to-[#0a0c14] h-full card-hover overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, #d4a843, transparent 60%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter">Signature Offering</p>
                    <span className="px-3 py-0.5 rounded-full bg-[#d4a843] text-[#0a0c14] text-[10px] font-bold tracking-widest uppercase">Unique</span>
                  </div>
                  <h3 className="font-playfair text-3xl text-white font-bold mb-1">Generational Bridging</h3>
                  <p className="font-playfair text-[#d4a843] italic text-lg mb-5">
                    Father &amp; Son Combo Coaching
                  </p>
                  <div className="gold-line h-px w-16 mb-5 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    A first-of-its-kind two-generation coaching program — simultaneously developing the
                    established leader and the next-generation heir. Bridging legacy with next-generation
                    leadership so that nothing is lost in transition.
                  </p>
                  <div className="border border-[#d4a843]/30 rounded-xl p-5 bg-[#d4a843]/5">
                    <div className="flex items-start gap-4">
                      <Users size={20} className="text-[#d4a843] flex-shrink-0 mt-0.5" />
                      <p className="text-white/75 text-sm leading-relaxed italic font-playfair">
                        &ldquo;Bridging legacy with next-generation leadership.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC PARTNERS ═══ */}
      <section id="partners" className="py-28 px-6 md:px-12 bg-[#0a0c14]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Strategic Partners</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
              Excite{" "}
              <span className="gold-gradient">Growth Partner</span>
            </h2>
            <GoldLine />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-[#d4a843]/25 rounded-2xl p-10 bg-[#0f1220] card-hover max-w-3xl mx-auto">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full border border-[#d4a843]/40 bg-[#d4a843]/10 flex-shrink-0">
                  <Award size={28} className="text-[#d4a843]" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl text-white font-bold mb-1">Z Mohamed Nassar</h3>
                  <p className="text-[#d4a843]/80 text-sm mb-1">Co-Founder &amp; Director, Excite Marketing &amp; Training</p>
                  <p className="text-white/45 text-xs tracking-wide uppercase">Strategic Growth Partner</p>
                </div>
              </div>

              <div className="gold-line h-px w-full mb-6 mx-0" style={{ background: "linear-gradient(90deg, #d4a843, transparent 80%)" }} />

              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                {[
                  { label: "Programs Conducted", value: "6,000+" },
                  { label: "Years of Experience", value: "20+" },
                  { label: "BNI Role", value: "Exec. Director, BNI Coimbatore" },
                  { label: "Network", value: "750+ Entrepreneurs" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-white/10 rounded-xl p-4 bg-[#0a0c14]">
                    <p className="text-[#d4a843] font-playfair text-xl font-bold mb-1">{stat.value}</p>
                    <p className="text-white/50 text-xs tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="text-[#d4a843] text-xs tracking-[0.25em] uppercase font-inter mb-3">Credentials</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ICF Certified Coach (ACC)",
                    "Certified Thomas Profile Practitioner",
                    "BNI Executive Director",
                  ].map((cred) => (
                    <span key={cred} className="px-3 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/25 text-[#d4a843] text-xs font-inter">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#d4a843] text-xs tracking-[0.25em] uppercase font-inter mb-3">Notable Clients</p>
                <div className="flex flex-wrap gap-2">
                  {["Vodafone", "PepsiCo", "Hyundai", "Audi", "Bosch", "Nissan Renault", "Bank Muscat"].map((client) => (
                    <span key={client} className="px-3 py-1 rounded-full border border-white/15 text-white/60 text-xs font-inter">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
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

      {/* ═══ TAJ GLOBAL VILLAGE — INVESTMENT SECTION ═══ */}
      <section id="tgv" className="py-28 px-6 md:px-12 bg-[#0a0c14] relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #d4a843 0%, transparent 55%), radial-gradient(circle at 75% 20%, #d4a843 0%, transparent 40%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <FadeIn className="text-center mb-16">
            <SectionLabel>Investment Opportunity</SectionLabel>
            <h2 className="font-playfair text-4xl md:text-6xl text-white font-bold mb-3 leading-tight">
              Invest in India&apos;s Next{" "}
              <span className="gold-gradient">Free Trade Zone</span>
            </h2>
            <p className="text-[#d4a843] font-inter text-sm tracking-[0.25em] uppercase mb-4">
              Taj Global Village Pvt. Ltd. &nbsp;&bull;&nbsp; www.tajglobalvillage.com
            </p>
            <GoldLine />
            <p className="text-white/55 max-w-3xl mx-auto text-sm leading-relaxed">
              Modelled after the Jebel Ali Free Trade Zone in Dubai, Taj Global Village (TGV) is
              developing a world-class Free Trade Warehousing Zone (FTWZ) / Special Economic Zone (SEZ)
              in Tamil Nadu — creating an international hub for warehousing, export manufacturing, and
              SME incubation under Make in India / Made in Tamil Nadu.
            </p>
          </FadeIn>

          {/* Project Overview */}
          <FadeIn delay={0.1} className="mb-14">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-[#d4a843]/40 rounded-2xl p-7 bg-[#0f1220] text-center card-hover">
                <div className="font-playfair text-4xl text-[#d4a843] font-bold mb-2">310</div>
                <div className="text-white/70 text-sm tracking-wide uppercase font-inter">Acres Total</div>
                <div className="text-white/40 text-xs mt-1">40% already acquired</div>
              </div>
              <div className="border-2 border-[#d4a843]/40 rounded-2xl p-7 bg-[#0f1220] text-center card-hover">
                <div className="font-playfair text-2xl text-[#d4a843] font-bold mb-2 leading-tight">Kancheepuram</div>
                <div className="text-white/70 text-sm tracking-wide uppercase font-inter">Tamil Nadu</div>
                <div className="text-white/40 text-xs mt-1">Chennai–Bangalore National Highway</div>
              </div>
              <div className="border-2 border-[#d4a843]/40 rounded-2xl p-7 bg-[#0f1220] text-center card-hover">
                <div className="font-playfair text-4xl text-[#d4a843] font-bold mb-2">SEZ</div>
                <div className="text-white/70 text-sm tracking-wide uppercase font-inter">Free Trade Zone</div>
                <div className="text-white/40 text-xs mt-1">FTWZ / Special Economic Zone</div>
              </div>
            </div>
          </FadeIn>

          {/* Investment Highlights */}
          <FadeIn delay={0.15} className="mb-14">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-8 text-center">
              Investment Highlights
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  label: "Total ROI",
                  value: "13% p.a.",
                  sub: "vs 5.5% bank FD",
                  highlight: true,
                },
                {
                  label: "Price Per Acre",
                  value: "₹58 Lakhs",
                  sub: "All-in: land + registration + development",
                  highlight: false,
                },
                {
                  label: "Title Deed",
                  value: "Your Name",
                  sub: "Land registered directly in investor's name",
                  highlight: false,
                },
                {
                  label: "Buy-Back Guarantee",
                  value: "After 5 Yrs",
                  sub: "Min. 25% capital appreciation guaranteed",
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-7 text-center card-hover ${
                    item.highlight
                      ? "border-2 border-[#d4a843] bg-gradient-to-br from-[#d4a843]/15 to-[#0f1220]"
                      : "border border-white/10 bg-[#0f1220]"
                  }`}
                >
                  <div className={`font-playfair text-3xl font-bold mb-2 ${item.highlight ? "text-[#d4a843]" : "text-white"}`}>
                    {item.value}
                  </div>
                  <div className="text-white/70 text-xs tracking-widest uppercase font-inter mb-1">{item.label}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{item.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ROI Table */}
          <FadeIn delay={0.2} className="mb-14">
            <div className="border border-[#d4a843]/30 rounded-2xl overflow-hidden bg-[#0f1220]">
              <div className="px-8 py-5 border-b border-[#d4a843]/20 bg-[#d4a843]/5">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter">Returns Breakdown — Per Acre (₹58L Investment)</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-8 py-4 text-white/40 text-xs tracking-widest uppercase font-inter">Return Type</th>
                      <th className="text-right px-6 py-4 text-white/40 text-xs tracking-widest uppercase font-inter">Rate</th>
                      <th className="text-right px-8 py-4 text-white/40 text-xs tracking-widest uppercase font-inter">Amount / Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Lease Rental (half-yearly)", rate: "7% p.a.", amount: "₹4,06,000", note: "" },
                      { type: "Incentive (every 5 years)", rate: "1% p.a.", amount: "₹58,000", note: "" },
                      { type: "Capital Appreciation (Buy Back)", rate: "5% p.a.", amount: "₹2,90,000", note: "" },
                    ].map((row) => (
                      <tr key={row.type} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-4 text-white/70 text-sm">{row.type}</td>
                        <td className="px-6 py-4 text-[#d4a843] text-sm text-right font-inter">{row.rate}</td>
                        <td className="px-8 py-4 text-white/70 text-sm text-right font-inter">{row.amount}</td>
                      </tr>
                    ))}
                    {/* Total row */}
                    <tr className="bg-[#d4a843]/10 border-t-2 border-[#d4a843]/40">
                      <td className="px-8 py-5 text-white font-playfair font-bold text-base">Total ROI</td>
                      <td className="px-6 py-5 text-[#d4a843] font-bold text-lg text-right font-playfair">13% p.a.</td>
                      <td className="px-8 py-5 text-[#d4a843] font-bold text-lg text-right font-playfair">₹7,54,000</td>
                    </tr>
                    {/* Comparison row */}
                    <tr className="border-t border-white/5">
                      <td className="px-8 py-4 text-white/40 text-sm italic">Bank FD (for comparison)</td>
                      <td className="px-6 py-4 text-white/40 text-sm text-right font-inter">5.5%</td>
                      <td className="px-8 py-4 text-white/40 text-sm text-right font-inter">₹3,19,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Infrastructure & Terms */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <FadeIn delay={0.25}>
              <div className="border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-5">Infrastructure Included</p>
                <ul className="space-y-3">
                  {[
                    "60-ft road access from National Highway",
                    "Land levelling & compound wall",
                    "Internal cement roads",
                    "Solar power installation",
                    "Water & electricity connections",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                      <span className="text-[#d4a843] mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border border-white/10 rounded-2xl p-8 bg-[#0f1220] h-full">
                <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase font-inter mb-5">Investment Terms</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/55 text-sm">Minimum Investment</span>
                    <span className="text-white font-inter font-semibold">1 Acre</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/55 text-sm">Maximum Investment</span>
                    <span className="text-white font-inter font-semibold">10 Acres</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/55 text-sm">Price Per Acre</span>
                    <span className="text-[#d4a843] font-playfair font-bold text-lg">₹58 Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/55 text-sm">Lease Rental</span>
                    <span className="text-white font-inter font-semibold">Half-yearly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/55 text-sm">Buy-Back Option</span>
                    <span className="text-white font-inter font-semibold">After 5 years</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={0.35} className="text-center">
            <div className="border-2 border-[#d4a843]/60 rounded-2xl p-10 bg-gradient-to-br from-[#d4a843]/10 to-[#0a0c14] max-w-2xl mx-auto">
              <p className="font-playfair text-white text-2xl font-bold mb-2">
                Secure Your Acre in India&apos;s Next SEZ
              </p>
              <p className="text-white/55 text-sm mb-8 leading-relaxed">
                Land registered in your name. Title deeds handed over. 13% p.a. returns.
                A nation-building investment with institutional-grade security.
              </p>
              <a
                href="mailto:faiztaj@mail.com?subject=TGV Investment Inquiry — Taj Global Village"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#d4a843] text-[#0a0c14] font-bold rounded-full text-sm tracking-wide hover:bg-[#e8c470] transition-colors"
              >
                <Mail size={18} />
                Inquire About Investment
              </a>
              <p className="text-white/30 text-xs mt-4">
                www.tajglobalvillage.com &nbsp;&bull;&nbsp; faiztaj@mail.com
              </p>
            </div>
          </FadeIn>

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
