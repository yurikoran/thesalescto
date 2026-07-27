import Link from "next/link";

// ============================================================
// DATA
// ============================================================

const STATS = [
  { value: "80%", label: "Win rate on bids" },
  { value: "5x", label: "Service project growth" },
  { value: "100+", label: "Team managed" },
  { value: "10+", label: "Countries served" },
];

const PROBLEMS = [
  {
    icon: "🎯",
    title: "Your sales team can demo, but can't answer the buyer's CTO",
    description:
      "Demos close SMBs. Technical credibility closes enterprises. If your team goes silent when the buyer's CTO asks about architecture, you're losing deals.",
  },
  {
    icon: "💸",
    title: "You spend $500K on sales and $50K on pre-sales",
    description:
      "The budget is inverted. Pre-sales generates pipeline, increases ACV, and shortens sales cycles — but it's treated as support, not a revenue engine.",
  },
  {
    icon: "⏳",
    title: "Hiring a VP Sales takes 6-9 months — with a 67% failure rate",
    description:
      "Two out of three VP Sales hires fail within 18 months. That's a $500K+ gamble with a year of lost momentum.",
  },
  {
    icon: "🤝",
    title: "No one in the room has both technical depth and sales instinct",
    description:
      "Your engineers can't sell. Your sellers can't talk architecture. You need someone who does both — and loves it.",
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
      "Build your pre-sales function from zero — team, processes, materials, templates, training.",
    href: "/services/pre-sales-build-out",
  },
  {
    icon: "🔍",
    title: "Technical Due Diligence",
    description:
      "Evaluate technology companies for investors — architecture, team, scalability, risk.",
    href: "/services/technical-due-diligence",
  },
  {
    icon: "🚀",
    title: "CTO-as-a-Service",
    description:
      "Part-time CTO for startups — technical strategy, architecture decisions, team building.",
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
  { value: "14", suffix: " years", label: "As the vendor (Teradata, Ispirer)" },
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
      "I join your team. Attend calls. Support deals. Build process. Shared risk — retainer + success fee.",
  },
  {
    number: "03",
    title: "Measure & Decide",
    description:
      "Win rate, pipeline growth, deal velocity. Data, not promises. Continue, expand, or part ways — 30 days' notice.",
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
      "Engagements start at $3,000/month on a retainer + success fee model. If the deal doesn't close, I lose too. This isn't consulting — it's a partnership. Typical engagements run 3-6 months minimum.",
  },
  {
    question: "What's the first step?",
    answer:
      "Book a 30-minute discovery call. No pitch, no pressure. I'll listen to your situation and tell you honestly whether I can help — and if I'm not the right fit, I'll say so.",
  },
];

// ============================================================
// SCHEMA.ORG FAQ STRUCTURED DATA
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
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
            href="mailto:sales@thesalescto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-light transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">
          Fractional Sales CTO &amp; Pre-Sales Consulting
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight mb-6">
          Your Embedded Sales CTO
          <br />
          <span className="text-accent">Turning Technology Into Revenue</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Not a consultant who advises and leaves. Not a vendor who delivers and
          disappears. A partner who shares the risk, owns the result, and stays
          until the deal closes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:sales@thesalescto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
          >
            Book a Discovery Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary border-2 border-border rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Most B2B tech companies face the same revenue bottleneck — and don't
            realize it's a pre-sales problem, not a sales problem.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-4 block">{problem.icon}</span>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-muted leading-relaxed">{problem.description}</p>
            </div>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What is a Sales CTO?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A new category of technical leadership — built for revenue, not just
            architecture.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-border">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            A <strong>Sales CTO</strong> is a senior technical leader who sits at
            the intersection of technology and revenue. Not a fractional CTO who
            optimizes your architecture. Not a sales consultant who teaches
            methodology. A CTO who earns your buyer&apos;s trust, sits in your
            enterprise deals, and helps you close.
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
                  <th className="text-center py-3 px-3 font-semibold text-accent">
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
                  <td className="text-center py-3 px-3 text-accent font-bold">
                    ✅
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">Commercial</td>
                  <td className="text-center py-3 px-3">❌</td>
                  <td className="text-center py-3 px-3">✅</td>
                  <td className="text-center py-3 px-3">✅</td>
                  <td className="text-center py-3 px-3 text-accent font-bold">
                    ✅
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">Cost / Year</td>
                  <td className="text-center py-3 px-3">$90-250K</td>
                  <td className="text-center py-3 px-3">$50-150K</td>
                  <td className="text-center py-3 px-3">$250-450K</td>
                  <td className="text-center py-3 px-3 text-accent font-bold">
                    $36-96K
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">Time to start</td>
                  <td className="text-center py-3 px-3">1-2 weeks</td>
                  <td className="text-center py-3 px-3">2-4 weeks</td>
                  <td className="text-center py-3 px-3">6-9 months</td>
                  <td className="text-center py-3 px-3 text-accent font-bold">
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
                  <td className="text-center py-3 px-3 text-accent font-bold">
                    Low
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            How I Help
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Six ways to turn your technology into revenue. Each backed by 29
            years of doing it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all group"
            >
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Me?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            15 years as the customer. 14 years as the vendor. I&apos;ve sat on
            every side of the table.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CAREER_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-2xl p-6 border border-border flex items-center gap-4"
            >
              <span className="text-3xl font-bold text-accent whitespace-nowrap">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-muted text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-border">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-4">
                The Founder
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                CIO at A1 (100+ team) → Pre-Sales Manager at Teradata (Vienna)
                → Solution Architect (80% win rate) → Trusted Advisor (10+
                countries) → CTO at Ispirer (built pre-sales from scratch, 5x
                growth).
              </p>
              <p className="text-muted leading-relaxed mb-6">
                I&apos;m not an engineer who became a manager. I&apos;m a
                commercial leader who happens to have deep technical credibility.
                Pre-sales, sales, and account management bring me genuine
                pleasure — and that passion is what makes me effective in your
                deals.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Azure",
                  "Snowflake",
                  "Databricks",
                  "Teradata",
                  "Challenger Sales",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs font-medium bg-white border border-border rounded-full text-muted"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted">
            Three steps. No lock-in. Data-driven decisions.
          </p>
        </div>
        <div className="space-y-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 items-start bg-white rounded-2xl p-8 border border-border"
            >
              <span className="text-4xl font-bold text-accent/20 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6 mb-20">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="bg-surface rounded-2xl p-6 sm:p-8 border border-border"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-primary rounded-2xl p-10 sm:p-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to close more enterprise deals?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Book a 30-minute discovery call. No pitch, no pressure. I&apos;ll
            listen and tell you honestly if I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@thesalescto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:info@thesalescto.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
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
            href="mailto:sales@thesalescto.com"
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
