"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ClipboardX,
  ArrowLeftRight,
  TrendingDown,
  Users,
  Briefcase,
  Building2,
  Rocket,
  Cloud,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

// ============================================================
// ANIMATED COMPONENTS
// ============================================================

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directionMap[direction].y,
              x: directionMap[direction].x,
            }
      }
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericPart = parseInt(target.replace(/[^0-9]/g, ""));
  const prefix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView || isNaN(numericPart)) return;
    let start = 0;
    const end = numericPart;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ============================================================
// DATA
// ============================================================

const STATS = [
  { value: "5", suffix: "x", label: "Services revenue growth in 1 year" },
  { value: "Pre-sales", suffix: "", label: "Built from scratch" },
  { value: "50/50", suffix: "", label: "Client & vendor side experience" },
  { value: "3", suffix: "x", label: "Field/Sales CTO demand since 2021" },
];

const PROBLEMS: { icon: React.ElementType; title: string; description: string }[] = [
  {
    icon: ClipboardX,
    title: "Your pre-sales shows up with no slides, no homework, no plan",
    description:
      "In 28 years on both sides - half buying, half selling - I've watched the same scene again and again. The pre-sales engineer opens a blank screen or a product overview deck. No research on the customer's industry. No understanding of their architecture. No presentation tailored to their problems. No plan for how the solution will be delivered. The customer asks about their project pain, their compliance, their legacy integration - and gets a feature walkthrough. The customer hears about the vendor and the solution - and nothing about their own pain, or how others in the market face the same challenge.",
  },
  {
    icon: ArrowLeftRight,
    title: "Your pre-sales sells from the vendor's point of view, not the customer's",
    description:
      "The default pre-sales mindset is: 'Here's what we built. Here's how it works. Buy it.' But an enterprise CTO or VP Engineering doesn't need to know how your product works. They need to know: does this solve my problem? Does it reduce my risk? Can my team maintain it after you leave? What if our requirements change in 6 months? Without someone who has actually been the buyer - who evaluated vendors, knew how the buying process works, wrote RFPs, and made purchase decisions - the conversation stays on the vendor's terms. The customer stays skeptical. The deal stalls.",
  },
  {
    icon: TrendingDown,
    title: "You invest 10x more in sales than in pre-sales - and lose because of it",
    description:
      "Most B2B tech companies spend $500K+ on sales headcount and $50K+ on pre-sales. But think about where a complex enterprise deal is actually won or lost: in the technical discovery. In the architecture review. In the security assessment. In the moment when the buyer's CTO asks a hard question and your person in the room either answers with credibility - or doesn't. The budget is inverted: you're paying for pipeline, not for trust. And in enterprise B2B, trust is what closes.",
  },
  {
    icon: Users,
    title: "Nobody in the room is building trust - they're just presenting features",
    description:
      "Your team can demo. They can explain functionality. But can they sit with a buyer's CTO and say honestly: 'I understand your migration concerns. I led a 100+ person IT team for years. I've managed 20+ projects with 1PB+ data volumes. Here's what we did in a similar situation. Here's what we'd recommend for you - and here's what we wouldn't do, and why.' That's not a sales conversation. That's a peer conversation. One that earns trust. One that changes how the buyer sees you - from vendor to advisor. And it's the moment when deals stop stalling and start closing.",
  },
];

const HERO_SERVICE: { icon: React.ElementType; title: string; description: string; href: string } = {
  icon: Briefcase,
  title: "The Embedded Sales CTO",
  description:
    "I join your team for 90 days or more. I sit in your calls, your deals, your architecture reviews. I help your sales team turn technical credibility into closed revenue - and I stay until the deal closes, not until the deck is done.",
  href: "/services/fractional-sales-cto",
};

const ADJACENT_SERVICES: { icon: React.ElementType; title: string; description: string; href: string }[] = [
  {
    icon: Building2,
    title: "Pre-Sales Build-Out",
    description:
      "Build your pre-sales function from zero: team, process, materials, training.",
    href: "/services/pre-sales-build-out",
  },
  {
    icon: Rocket,
    title: "CTO-as-a-Service",
    description:
      "Part-time CTO for early-stage startups: technical strategy, architecture, team-building.",
    href: "/services/cto-as-a-service",
  },
  {
    icon: Cloud,
    title: "Migration Advisory",
    description:
      "Database migration and application modernization advisory.",
    href: "/services/migration-advisory",
  },
];

const CAREER_STATS = [
  { value: "CIO", suffix: "", label: "Led a 100+ person IT division as customer" },
  { value: "Pre-Sales", suffix: "", label: "Manager & Solution Architect at vendor" },
  { value: "CTO", suffix: "", label: "Built the pre-sales function from scratch" },
  { value: "Trusted", suffix: "", label: "Advisor to enterprise clients in 10+ countries" },
];

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "30 minutes. I learn your sales challenges, your buyers, your deals. You learn if I'm the right fit.",
  },
  {
    number: "02",
    title: "90-Day Embed",
    description:
      "I join your team. Attend calls. Support deals. Build process. Shared risk - retainer + success fee.",
  },
  {
    number: "03",
    title: "Measure & Decide",
    description:
      "Win rate, pipeline growth, deal velocity. Data, not promises. Continue, expand, or part ways - 30 days' notice.",
  },
];

const FAQS = [
  {
    question: "What is a Sales CTO?",
    answer:
      "A Sales CTO is the established Field CTO role, delivered fractionally and on demand. Like a Field CTO, it's a senior technical leader who works externally with prospects and customers - but instead of being a full-time hire, I join your team part-time to sit in your enterprise deals, earn the buyer's trust, and help you close.",
  },
  {
    question: "How is a Sales CTO different from a fractional CTO?",
    answer:
      "A fractional CTO asks: 'Is your architecture scalable?' The Sales CTO asks: 'Is your pipeline closable?' A fractional CTO helps you build the right thing. The Sales CTO helps you sell the thing you built.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Engagements start at an agreed amount per month on a retainer. If the deal doesn't close, I lose too - this isn't consulting, it's a partnership. Typical engagements run 3-6 months minimum.",
  },
  {
    question: "What's the first step?",
    answer:
      "Book a 30-minute discovery call. No pitch, no pressure. I'll listen to your situation and tell you honestly whether I can help - and if I'm not the right fit, I'll say so.",
  },
];

// ============================================================
// SCHEMA.ORG
// ============================================================

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================
// SECTIONS
// ============================================================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary tracking-tight">
          The Sales CTO
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a
            href="https://calendly.com/thesalescto/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-light transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6">
            Fractional Field CTO &amp; Pre-Sales Consulting
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
            Your Embedded
            <br />
            <span className="gradient-text">Sales CTO</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Not a consultant who advises and leaves. Not a vendor who delivers
            and disappears. A partner who shares the risk, owns the result, and
            stays until the deal closes.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/thesalescto/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent rounded-full hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary border-2 border-border rounded-full hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl mx-auto border-t border-border pt-10">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
              <div className="text-center px-2">
                <p className="text-2xl sm:text-3xl font-bold text-primary leading-none">
                  {isNaN(Number(stat.value)) ? (
                    <span className="whitespace-nowrap">{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-xs text-muted mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-20 px-6 bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Does this sound like your pre-sales?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              After 28 years on both sides of the table - first buying from vendors as a CIO, then selling to
              customers as a Pre-Sales Manager and later as a CTO - I&apos;ve seen the same patterns destroy deals
              again and again. Pre-sales is where trust is built or broken. In many cases, teams don&apos;t fail
              because of the product. They fail because they show up unprepared, sell from the vendor side, and
              in many cases, never quite shift from presenting features to building trust.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center mb-5">
                  <problem.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsSalesCTO() {
  const roles = [
    { name: "Fractional CTO", note: "Builds the product", technical: "yes", commercial: "no", cost: "$90–250K", start: "1–2 weeks", risk: "Low" },
    { name: "Sales Consultant", note: "Teaches the method", technical: "no", commercial: "yes", cost: "$50–150K", start: "2–4 weeks", risk: "Low" },
    { name: "VP of Sales", note: "Owns the number", technical: "partial", commercial: "yes", cost: "$250–450K", start: "6–9 months", risk: "High" },
    { name: "The Sales CTO", note: "Owns the gap", technical: "yes", commercial: "yes", cost: "$60–120K", start: "1–2 weeks", risk: "Low", featured: true },
  ];

  const status = (value: string) => {
    if (value === "yes") return <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700"><Check className="size-4" strokeWidth={2.5} /> Yes</span>;
    if (value === "partial") return <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700"><AlertTriangle className="size-4" strokeWidth={2} /> Partial</span>;
    return <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400"><X className="size-4" strokeWidth={2.5} /> No</span>;
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-5">The missing role in your revenue team</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight text-balance">What is a Sales CTO?</h2>
            </div>
            <p className="text-lg text-muted leading-relaxed lg:pb-1">An established role, now available on demand — built for the moment when a technical buyer decides whether to trust you.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-14">
            <div className="rounded-3xl bg-dark-section p-8 sm:p-10 text-white shadow-xl">
              <p className="text-2xl sm:text-3xl font-semibold leading-tight text-balance mb-8">Your CTO builds the product. Your VP Sales sells it. Nobody owns the gap between them.</p>
              <div className="flex items-center gap-3 text-sm text-white/60 border-t border-white/15 pt-5">
                <span className="size-2 rounded-full bg-accent" />
                <span>The room where technical buyers make the decision</span>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
              <p className="text-lg text-foreground leading-relaxed mb-5">That gap needs its own role. In enterprise software, it&apos;s already a growing function — the <strong>Field CTO</strong>, a senior technical leader who translates complex capabilities into business value.</p>
              <p className="text-lg text-foreground leading-relaxed">My version is a <strong>Sales CTO</strong>: delivered fractionally, on demand, and present until the deal closes.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-3xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-6 sm:px-8 pt-7 pb-6 border-b border-border">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted mb-2">Role comparison</p><h3 className="text-2xl font-bold text-primary">Who owns the enterprise deal?</h3></div>
              <p className="text-sm text-muted max-w-xs sm:text-right">The Sales CTO is the only role designed to own both sides of the room.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-sm">
                <thead><tr className="bg-surface text-left"><th className="w-[22%] px-6 py-5 font-semibold text-muted">Capability</th>{roles.map((role) => <th key={role.name} className={`px-4 py-5 ${role.featured ? "bg-accent/10" : ""}`}><p className={`font-bold ${role.featured ? "text-accent" : "text-primary"}`}>{role.name}</p><p className="font-normal text-xs text-muted mt-1">{role.note}</p></th>)}</tr></thead>
                <tbody>
                  <tr><td colSpan={5} className="px-6 pt-6 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">What they own</td></tr>
                  <tr className="border-t border-border"><td className="px-6 py-5 font-medium text-primary">Technical credibility</td>{roles.map((role) => <td key={role.name} className={`px-4 py-5 ${role.featured ? "bg-accent/10" : ""}`}>{status(role.technical)}</td>)}</tr>
                  <tr className="border-t border-border"><td className="px-6 py-5 font-medium text-primary">Commercial ownership</td>{roles.map((role) => <td key={role.name} className={`px-4 py-5 ${role.featured ? "bg-accent/10" : ""}`}>{status(role.commercial)}</td>)}</tr>
                  <tr><td colSpan={5} className="px-6 pt-6 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Investment &amp; risk</td></tr>
                  {[["Cost / year", "cost"], ["Time to start", "start"], ["Failure rate", "risk"]].map(([label, key]) => <tr key={key} className="border-t border-border"><td className="px-6 py-5 font-medium text-primary">{label}</td>{roles.map((role) => <td key={role.name} className={`px-4 py-5 ${role.featured ? "bg-accent/10 font-bold text-accent" : "text-muted"}`}>{role[key as "cost" | "start" | "risk"]}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-3 border-t border-border bg-surface px-6 sm:px-8 py-5 text-xs text-muted leading-relaxed"><AlertTriangle className="size-4 shrink-0 text-amber-500 mt-0.5" /> <p>Failure rate means the share of hires who underperform or leave within their first 18 months. A full-time VP of Sales carries the highest risk of a costly hire that doesn&apos;t work out.</p></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              How I Help
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              One core engagement. A few adjacent ways to work together if
              that&apos;s a better fit.
            </p>
          </div>
        </FadeIn>

        {/* Hero service - the main offer */}
        <FadeIn>
          <div className="relative overflow-hidden bg-dark-section rounded-3xl p-8 sm:p-12 text-white mb-12 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-section via-dark-section-light to-dark-section opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                <HERO_SERVICE.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <p className="inline-block text-xs font-semibold tracking-widest uppercase bg-accent/25 text-white px-3 py-1 rounded-full mb-4">
                Main offer
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {HERO_SERVICE.title}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-8">
                {HERO_SERVICE.description}
              </p>
              <a
                href="https://calendly.com/thesalescto/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark-section bg-white rounded-full hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Adjacent services */}
        <FadeIn>
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">
            Also available, if your situation calls for it:
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADJACENT_SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300 group h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/12 transition-colors">
                  <service.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Me?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              14 years as the customer. 14 years as the vendor. I&apos;ve sat on
              every side of the table.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CAREER_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="bg-surface rounded-2xl p-6 border border-border flex items-center gap-4 hover:border-accent/20 transition-colors">
                <span className="text-3xl font-bold text-accent whitespace-nowrap">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-muted text-sm">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-border">
            <h3 className="text-xl font-bold text-primary mb-4">The Founder</h3>
            <p className="text-muted leading-relaxed mb-4">
              My career is split evenly between the two sides of the table. First
              I led a 100+ person IT division - the customer who evaluates
              vendors, writes RFPs, and makes the final call. Then I moved to the
              vendor side, worked as a Pre-Sales Manager and Solution Architect,
              and later became CTO. Every role taught me the same lesson from a
              different angle: technology sells when someone in the room can
              translate it into the buyer&apos;s business value.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m not an engineer who became a manager. I&apos;m a
              commercial leader who happens to have deep technical credibility.
              Pre-sales, sales, and account management bring me genuine pleasure
              - and that passion is what makes me effective in your deals.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted">
              Three steps. No lock-in.
            </p>
          </div>
        </FadeIn>
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15} direction="left">
              <div className="flex gap-6 items-start bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/20 transition-all duration-300 group">
                <span className="text-5xl font-bold text-accent/10 shrink-0 group-hover:text-accent/20 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQandCTA() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>
        <div className="space-y-6 mb-20">
          {FAQS.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.1}>
              <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border hover:border-accent/20 transition-colors">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Final CTA */}
        <FadeIn>
          <div className="relative text-center bg-dark-section rounded-2xl p-10 sm:p-16 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-section via-dark-section-light to-dark-section opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to close more enterprise deals?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Book a 30-minute discovery call. No pitch, no pressure. I&apos;ll
                listen and tell you honestly if I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/thesalescto/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark-section bg-white rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                </a>
                <a
                  href="mailto:info@thesalescto.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:border-white hover:bg-white/10 transition-all"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-primary">The Sales CTO</p>
          <p className="text-sm text-muted mt-1">
            © {new Date().getFullYear()} The Sales CTO. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="mailto:info@thesalescto.com"
            className="hover:text-accent transition-colors"
          >
            info@thesalescto.com
          </a>
          <a
            href="https://calendly.com/thesalescto/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhatIsSalesCTO />
        <Services />
        <WhyMe />
        <HowItWorks />
        <FAQandCTA />
      </main>
      <Footer />
    </>
  );
}
