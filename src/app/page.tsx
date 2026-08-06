"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
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

const PROBLEMS = [
  {
    icon: "📋",
    title: "Your pre-sales shows up with no slides, no homework, no plan",
    description:
      "In 28 years on both sides - spending half my career buying from vendors and half selling to customers - I've watched this scene play out over and over again. The pre-sales engineer opens a blank screen or a product overview deck. No research on the customer's industry. No understanding of their architecture. No presentation tailored to their problems. No written plan for how the solution will be delivered. The customer asks about their specific project pain, their compliance requirements, their integration with legacy systems - and the response is a feature walkthrough. The customer hears a lot about the vendor and the solution - and nothing about his own pain, or how others on the market face the same challenge. Each call should be an educational call - one that leaves the customer knowing more about their own problem than before we arrived. Too often, it's not.",
  },
  {
    icon: "🔄",
    title: "Your pre-sales sells from the vendor's point of view, not the customer's",
    description:
      "The default pre-sales mindset is: 'Here's what we built. Here's how it works. Buy it.' But an enterprise CTO or VP Engineering doesn't need to know how your product works. They need to know: does this solve my problem? Does it reduce my risk? Can my team maintain it after you leave? What if our requirements change in 6 months? Without someone who has actually been the buyer - who evaluated vendors, knew how the buying process works, wrote RFPs, and made purchase decisions - the conversation stays on the vendor's terms. The customer stays skeptical. The deal stalls.",
  },
  {
    icon: "💸",
    title: "You invest 10x more in sales than in pre-sales - and lose because of it",
    description:
      "Most B2B tech companies spend $500K on sales headcount and $50K on pre-sales. But think about where a complex enterprise deal is actually won or lost: in the technical discovery. In the architecture review. In the security assessment. In the moment when the buyer's CTO asks a hard question and your person in the room either answers with credibility - or doesn't. The budget is inverted: you're paying for pipeline, not for trust. And in enterprise B2B, trust is what closes.",
  },
  {
    icon: "🤝",
    title: "Nobody in the room is building trust - they're just presenting features",
    description:
      "Your team can demo. They can explain functionality. But can they sit with a buyer's CTO and say honestly: 'I understand your migration concerns. I led a 100+ person IT team for years. I've managed 20+ projects with 1PB+ data volumes. Here's what we did in a similar situation. Here's what we'd recommend for you - and here's what we wouldn't do, and why.' That's not a sales conversation. That's a peer conversation. One that earns trust. One that changes how the buyer sees you - from vendor to advisor. And it's the moment when deals stop stalling and start closing.",
  },
];

const SERVICES = [
  {
    icon: "👔",
    title: "Fractional Sales CTO",
    description:
      "Your embedded partner in turning technology into revenue. I sit in your calls, your deals, your team.",
    href: "/services/fractional-sales-cto",
  },
  {
    icon: "🏗️",
    title: "Pre-Sales Build-Out",
    description:
      "Build your pre-sales function from zero - team, processes, materials, templates, training.",
    href: "/services/pre-sales-build-out",
  },
  {
    icon: "🔍",
    title: "Technical Due Diligence",
    description:
      "Evaluate technology companies for investors - architecture, team, scalability, risk.",
    href: "/services/technical-due-diligence",
  },
  {
    icon: "🚀",
    title: "CTO-as-a-Service",
    description:
      "Part-time CTO for startups - technical strategy, architecture decisions, team building.",
    href: "/services/cto-as-a-service",
  },
  {
    icon: "☁️",
    title: "Data & Cloud Migration",
    description:
      "Advisory on database migration, cloud transformation, data platform strategy.",
    href: "/services/migration-advisory",
  },
  {
    icon: "🎓",
    title: "Sales Team Training",
    description:
      "Train your team on technical selling, C-level conversations, and closing enterprise deals.",
    href: "/services/sales-training",
  },
];

const CAREER_STATS = [
  { value: "15", suffix: " years", label: "As the customer (CIO, 100+ team)" },
  { value: "14", suffix: " years", label: "As the vendor (enterprise tech)" },
  { value: "20+", suffix: "", label: "DWH projects ($10K–$1M+)" },
  { value: "1PB+", suffix: "", label: "Data volumes managed" },
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
      "A Sales CTO is a senior technical leader who sits at the intersection of technology and revenue. Not a fractional CTO who optimizes your architecture. Not a sales consultant who teaches methodology. A CTO who earns your buyer's trust, sits in your enterprise deals, and helps you close.",
  },
  {
    question: "How is a Sales CTO different from a fractional CTO?",
    answer:
      "A fractional CTO asks: 'Is your architecture scalable?' The Sales CTO asks: 'Is your pipeline closable?' A fractional CTO helps you build the right thing. The Sales CTO helps you sell the thing you built.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Engagements start at $3,000/month on a retainer + success fee model. If the deal doesn't close, I lose too. This isn't consulting - it's a partnership. Typical engagements run 3-6 months minimum.",
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
            Fractional Sales CTO &amp; Pre-Sales Consulting
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {isNaN(Number(stat.value)) ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-xs sm:text-sm text-muted mt-2">
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
                <span className="text-3xl mb-4 block">{problem.icon}</span>
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
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              What is a Sales CTO?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A new category of technical leadership - built for revenue, not
              just architecture.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-border glow">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              A <strong>Sales CTO </strong>is a senior technical leader who sits
              at the intersection of technology and revenue. Not a fractional
              CTO who optimizes your architecture. Not a sales consultant who
              teaches methodology. A CTO who earns your buyer&apos;s trust, sits
              in your enterprise deals, and helps you close.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-muted"></th>
                    <th className="text-center py-3 px-3 font-semibold text-muted">
                      Fractional CTO
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-muted">
                      Sales Consultant
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-muted">
                      VP of Sales
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-accent bg-accent/5 rounded-t-lg">
                      The Sales CTO
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Technical</td>
                    <td className="text-center py-3 px-3">✅</td>
                    <td className="text-center py-3 px-3">❌</td>
                    <td className="text-center py-3 px-3">⚠️</td>
                    <td className="text-center py-3 px-3 text-accent font-bold bg-accent/5">
                      ✅
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Commercial</td>
                    <td className="text-center py-3 px-3">❌</td>
                    <td className="text-center py-3 px-3">✅</td>
                    <td className="text-center py-3 px-3">✅</td>
                    <td className="text-center py-3 px-3 text-accent font-bold bg-accent/5">
                      ✅
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Cost / Year</td>
                    <td className="text-center py-3 px-3">$90-250K</td>
                    <td className="text-center py-3 px-3">$50-150K</td>
                    <td className="text-center py-3 px-3">$250-450K</td>
                    <td className="text-center py-3 px-3 text-accent font-bold bg-accent/5">
                      $36-96K
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Time to start</td>
                    <td className="text-center py-3 px-3">1-2 weeks</td>
                    <td className="text-center py-3 px-3">2-4 weeks</td>
                    <td className="text-center py-3 px-3">6-9 months</td>
                    <td className="text-center py-3 px-3 text-accent font-bold bg-accent/5">
                      1 week
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Failure rate</td>
                    <td className="text-center py-3 px-3">Low</td>
                    <td className="text-center py-3 px-3">Low</td>
                    <td className="text-center py-3 px-3 text-red-500 font-semibold">
                      67%
                    </td>
                    <td className="text-center py-3 px-3 text-accent font-bold bg-accent/5 rounded-b-lg">
                      Low
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              Six ways to turn your technology into revenue. Each backed by 29
              years of doing it.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300 group h-full">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
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
              15 years as the customer. 14 years as the vendor. I&apos;ve sat on
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
              From managing 100+ person IT teams to leading pre-sales and sales
              across 10+ countries. 80% win rate on enterprise bids. Built
              pre-sales functions from scratch. Drove 5x revenue growth. Every
              step taught me one thing: technology sells when someone in the room
              can translate it into business value.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m not an engineer who became a manager. I&apos;m a
              commercial leader who happens to have deep technical credibility.
              Pre-sales, sales, and account management bring me genuine pleasure
              - and that passion is what makes me effective in your deals.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "Azure",
                "Snowflake",
                "Databricks",
                "Challenger Sales",
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-xs font-medium bg-white border border-border rounded-full text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
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
              Three steps. No lock-in. Data-driven decisions.
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
          <div className="relative text-center bg-primary rounded-2xl p-10 sm:p-16 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-50" />
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
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
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
