import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const timelineEvents = [
  {
    year: "2005",
    title: "Founded",
    description:
      "Founded in Sialkot, the global hub of surgical instrument manufacturing, with a vision to serve Asian healthcare markets.",
  },
  {
    year: "2009",
    title: "ISO 9001 Certified",
    description:
      "Achieved ISO 9001 certification, marking our unwavering commitment to quality management systems.",
  },
  {
    year: "2013",
    title: "International Expansion",
    description:
      "Expanded distribution to Bangladesh and Nepal, establishing our first international partnerships across South Asia.",
  },
  {
    year: "2016",
    title: "CE Marking & Southeast Asia",
    description:
      "Obtained CE marking for European standards compliance; began exporting to Southeast Asian markets.",
  },
  {
    year: "2019",
    title: "ISO 13485 Certified",
    description:
      "Achieved ISO 13485 certification specific to medical device quality management — reinforcing our global standing.",
  },
  {
    year: "2023",
    title: "New Product Line & Growth",
    description:
      "Launched a new product line of laparoscopic instruments and expanded our team to 200+ dedicated professionals.",
  },
  {
    year: "2025",
    title: "500+ Institutions Served",
    description:
      "Now serving 500+ healthcare institutions across Asia with a catalogue exceeding 1,000 surgical instruments.",
  },
];

const values = [
  {
    icon: "⚙️",
    title: "Precision & Quality",
    desc: "Every instrument meets stringent international standards before it reaches a healthcare professional.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "Honest, transparent business practices form the foundation of every relationship we build.",
  },
  {
    icon: "❤️",
    title: "Customer Focus",
    desc: "Long-term partnerships built on trust, responsiveness, and a deep understanding of our clients' needs.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Continuously improving instrument designs and manufacturing processes to stay ahead of clinical demands.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    desc: "Patient and practitioner safety is at the core of every design decision and quality check we undertake.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.06 240) 0%, oklch(0.18 0.08 235) 50%, oklch(0.15 0.07 225) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase mb-5 px-4 py-1.5 rounded-full border border-teal/40 text-teal">
            About Us
          </span>
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl leading-tight mb-6">
            Surgikers Pvt. Ltd.
          </h1>
          <p className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Precision-engineered surgical instruments, trusted by healthcare
            professionals across Asia.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
                A Trusted Name in Surgical Excellence
              </h2>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-5">
                Surgikers Pvt. Ltd. is a trusted manufacturer and supplier of
                high-quality surgical instruments, serving hospitals, diagnostic
                centres, and wholesale distributors across India, Bangladesh,
                Nepal, and other major Asian countries.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed">
                The company is committed to precision engineering, international
                quality standards, and reliable supply chains that support
                healthcare professionals on the front lines — ensuring that
                every instrument that reaches an operating theatre is safe,
                reliable, and built to perform.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-72">
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.15 0.06 240) 0%, oklch(0.20 0.08 235) 100%)",
                }}
              >
                <img
                  src="/assets/uploads/Surgikers-logo-with-heraldic-shield-1.png"
                  alt="Surgikers"
                  className="w-28 h-28 object-contain mx-auto mb-5"
                />
                <p className="font-display text-white font-semibold text-lg mb-1">
                  Surgikers Pvt. Ltd.
                </p>
                <p className="font-body text-white/50 text-sm">
                  Est. 2005 · Sialkot, Pakistan
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { num: "1000+", label: "Instruments" },
                    { num: "500+", label: "Institutions" },
                    { num: "200+", label: "Team Members" },
                    { num: "5+", label: "Countries" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display font-bold text-teal-light text-xl">
                        {stat.num}
                      </p>
                      <p className="font-body text-white/50 text-xs mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.96 0.008 220) 0%, oklch(0.93 0.015 220) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Our Purpose
            </span>
            <h2 className="font-display font-bold text-navy text-3xl md:text-4xl">
              Mission, Vision &amp; Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{
                  background: "oklch(0.52 0.12 210 / 0.1)",
                }}
              >
                🎯
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-3">
                Our Mission
              </h3>
              <p className="font-body text-slate-600 text-sm leading-relaxed flex-1">
                To provide world-class, precision-engineered surgical
                instruments that empower healthcare professionals to deliver
                safer, better patient outcomes — every time, without compromise.
              </p>
            </div>

            {/* Vision */}
            <div
              className="rounded-2xl p-8 shadow-lg flex flex-col"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.07 240) 0%, oklch(0.22 0.09 230) 100%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                🔭
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                Our Vision
              </h3>
              <p className="font-body text-white/65 text-sm leading-relaxed flex-1">
                To become the most trusted surgical instrument brand across
                Asia, recognised for quality, reliability, and innovation in
                medical device manufacturing.
              </p>
            </div>

            {/* Values card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: "oklch(0.52 0.12 210 / 0.1)" }}
              >
                ⭐
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-4">
                Organisational Values
              </h3>
              <ul className="space-y-3 flex-1">
                {values.map((v) => (
                  <li key={v.title} className="flex items-start gap-2">
                    <span className="text-teal mt-0.5 flex-shrink-0">▸</span>
                    <div>
                      <span className="font-body font-semibold text-navy text-sm">
                        {v.title}
                      </span>
                      <span className="font-body text-slate-500 text-sm">
                        {" "}
                        &mdash; {v.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values grid (icons) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-100"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <p className="font-body font-semibold text-navy text-xs">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.06 240) 0%, oklch(0.16 0.07 235) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Company History
            </span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl">
              Our Journey
            </h2>
            <p className="font-body text-white/50 text-base mt-3 max-w-xl mx-auto">
              Two decades of growth, certifications, and expanding our reach
              across Asia's healthcare landscape.
            </p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

            <div className="space-y-8">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row items-center gap-4 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content box */}
                    <div
                      className={`flex-1 ${
                        isLeft
                          ? "md:text-right md:pr-10"
                          : "md:text-left md:pl-10"
                      }`}
                    >
                      <div
                        className="inline-block rounded-xl p-5 shadow-lg"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <p className="font-body font-semibold text-teal text-sm mb-1">
                          {event.title}
                        </p>
                        <p className="font-body text-white/65 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Year badge */}
                    <div
                      className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-white text-sm shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.52 0.12 210), oklch(0.42 0.10 220))",
                        boxShadow: "0 0 0 4px rgba(255,255,255,0.08)",
                      }}
                    >
                      {event.year}
                    </div>

                    {/* Spacer for alternating side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
