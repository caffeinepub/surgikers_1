import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Globe,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PRODUCTS = [
  {
    name: "Scalpel Handle No. 4",
    img: "/assets/generated/product-scalpel.dim_300x300.jpg",
    category: "Cutting Instruments",
    desc: "Precision stainless steel handle, compatible with standard blades. CE & ISO certified.",
  },
  {
    name: "Surgical Scissors (Mayo)",
    img: "/assets/generated/product-scissors.dim_300x300.jpg",
    category: "Scissors",
    desc: "Heavy-duty Mayo scissors for cutting tough tissue. Available straight & curved.",
  },
  {
    name: "Needle Holder (Hegar)",
    img: "/assets/generated/product-needle-holder.dim_300x300.jpg",
    category: "Needle Holders",
    desc: "Tungsten carbide jaw insert for secure needle grip. Autoclavable.",
  },
  {
    name: "Tissue Forceps",
    img: "/assets/generated/product-forceps.dim_300x300.jpg",
    category: "Forceps",
    desc: "Fine-tipped tissue forceps for delicate surgical procedures. ISO 13485 certified.",
  },
  {
    name: "Bone Rongeur",
    img: "/assets/generated/product-bone-rongeur.dim_300x300.jpg",
    category: "Bone Instruments",
    desc: "Double-action rongeur for efficient bone removal in orthopedic procedures.",
  },
  {
    name: "Retractor (Langenbeck)",
    img: "/assets/generated/product-retractor.dim_300x300.jpg",
    category: "Retractors",
    desc: "Widely used retractor for exposing wound sites. Available in multiple sizes.",
  },
  {
    name: "Artery Forceps (Mosquito)",
    img: "/assets/generated/product-artery-forceps.dim_300x300.jpg",
    category: "Forceps",
    desc: "Fine mosquito forceps for clamping small blood vessels. Curved & straight variants.",
  },
  {
    name: "Trocar & Cannula",
    img: "/assets/generated/product-trocar.dim_300x300.jpg",
    category: "Laparoscopic",
    desc: "Sharp-tip trocar with matching cannula for minimally invasive procedures.",
  },
  {
    name: "Towel Clamp",
    img: "/assets/generated/product-towel-clamp.dim_300x300.jpg",
    category: "Clamps",
    desc: "Backhaus towel clamp to secure surgical drapes. Sharp points, spring-action.",
  },
  {
    name: "Thumb Forceps",
    img: "/assets/generated/product-forceps.dim_300x300.jpg",
    category: "Forceps",
    desc: "Standard thumb forceps for general tissue handling. Serrated tip for grip.",
  },
  {
    name: "Surgical Curette",
    img: "/assets/generated/product-scalpel.dim_300x300.jpg",
    category: "Curettes",
    desc: "Stainless steel curette for scraping and debriding tissue. Multiple cup sizes.",
  },
  {
    name: "Bone Cutter",
    img: "/assets/generated/product-bone-rongeur.dim_300x300.jpg",
    category: "Bone Instruments",
    desc: "Heavy-duty bone cutter with compound action. Ideal for orthopedic surgery.",
  },
  {
    name: "Probe & Director",
    img: "/assets/generated/product-retractor.dim_300x300.jpg",
    category: "Probes",
    desc: "Malleable probe and director for exploring cavities and guiding incisions.",
  },
  {
    name: "Speculum (Vaginal)",
    img: "/assets/generated/product-scissors.dim_300x300.jpg",
    category: "Specula",
    desc: "Cusco-type bivalve speculum, polished stainless steel. Multiple sizes available.",
  },
  {
    name: "Suction Cannula",
    img: "/assets/generated/product-trocar.dim_300x300.jpg",
    category: "Suction Instruments",
    desc: "Yankauer-style suction cannula for clearing surgical fields. Autoclavable.",
  },
];

const CERTS = [
  {
    label: "CE",
    logo: "/assets/generated/cert-ce-transparent.dim_160x120.png",
  },
  {
    label: "FDA",
    logo: "/assets/generated/cert-fda-transparent.dim_160x120.png",
  },
  {
    label: "ISO 9001:2015",
    logo: "/assets/generated/cert-iso9001-transparent.dim_160x120.png",
  },
  {
    label: "ISO 7153-1:2016",
    logo: "/assets/generated/cert-iso7153-transparent.dim_160x120.png",
  },
  {
    label: "ISO 13485",
    logo: "/assets/generated/cert-iso13485-transparent.dim_160x120.png",
  },
];

const TESTIMONIALS = [
  {
    text: "Surgikers has been our trusted supplier for 3 years. Consistent quality and on-time delivery every time.",
    author: "Dr. Rajesh Sharma",
    role: "Chief Surgeon, Apollo Hospital, Delhi",
    initials: "RS",
  },
  {
    text: "Best wholesale rates in the market. Our distribution network across Bangladesh relies entirely on Surgikers instruments.",
    author: "Mr. Karim Ahmed",
    role: "Medical Distributor, Dhaka",
    initials: "KA",
  },
  {
    text: "ISO certified products with excellent after-sales support. Highly recommend to all diagnostic centres.",
    author: "Ms. Priya Nair",
    role: "Operations Manager, LifeCare Diagnostics, Mumbai",
    initials: "PN",
  },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Certified Quality",
    desc: "All instruments are CE, FDA, and ISO certified",
  },
  {
    icon: Award,
    title: "Competitive Pricing",
    desc: "Best rates for wholesale and bulk orders",
  },
  {
    icon: Truck,
    title: "Pan-Asian Delivery",
    desc: "Fast shipping across India, Bangladesh, Nepal and Asia",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    desc: "Dedicated B2B support team for distributors and hospitals",
  },
];

const STARS = [1, 2, 3, 4, 5];

const tripled = [
  ...PRODUCTS.map((p, i) => ({ ...p, key: `a${i}` })),
  ...PRODUCTS.map((p, i) => ({ ...p, key: `b${i}` })),
  ...PRODUCTS.map((p, i) => ({ ...p, key: `c${i}` })),
];

export default function HomePage() {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const stripPaused = hoveredProduct !== null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);
  const stripPausedRef = useRef(stripPaused);

  useEffect(() => {
    stripPausedRef.current = stripPaused;
  }, [stripPaused]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;

    const step = () => {
      if (!isDragging.current && !stripPausedRef.current && el) {
        el.scrollLeft += 0.6;
        const third = el.scrollWidth / 3;
        if (el.scrollLeft >= third * 2) {
          el.scrollLeft -= third;
        }
        if (el.scrollLeft <= 0) {
          el.scrollLeft += third;
        }
      }
      animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0.65) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.97) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-6">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle, rgba(10,22,40,0.55) 60%, transparent 100%)",
                borderRadius: "50%",
                padding: "20px",
                width: "320px",
                height: "320px",
                boxShadow:
                  "0 0 80px rgba(59,130,246,0.18), 0 0 160px rgba(59,130,246,0.08)",
              }}
            >
              <img
                src="/assets/uploads/Surgikers_logo_with_heraldic_shield-removebg-preview-1.png"
                alt="Surgikers Logo"
                className="h-72 w-72 object-contain"
              />
            </div>
          </div>
          <h1 className="font-display font-bold text-white text-6xl md:text-8xl tracking-tight leading-none mb-4">
            Surgikers
          </h1>
          <p className="text-teal-light font-body font-semibold text-lg md:text-xl tracking-[0.25em] uppercase mb-3">
            Precision Instruments. Trusted Globally.
          </p>
          <p className="text-white/65 font-body text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Premium Surgical Instruments for Hospitals, Diagnostic Centres &amp;
            Wholesale Distributors
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/products" })}
            data-ocid="hero.primary_button"
            className="hero-cta inline-flex items-center gap-2 text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 cursor-pointer border-0 outline-none"
          >
            View Products
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="arrow right"
            >
              <title>Arrow right</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* ABOUT / USP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-teal font-body font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              About Surgikers
            </span>
            <h2 className="font-display font-bold text-navy text-3xl md:text-5xl leading-tight mb-6">
              Engineering Excellence
              <br />
              for Every Procedure
            </h2>
            <p className="text-muted-foreground font-body text-base max-w-2xl mx-auto leading-relaxed">
              Surgikers Pvt. Ltd. is a leading manufacturer and supplier of
              surgical instruments, serving hospitals, diagnostic centres, and
              wholesale distributors across South and Southeast Asia. Our
              instruments meet international quality standards and are trusted
              by medical professionals nationwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Global Quality Standards",
                desc: "ISO, CE, and FDA certified instruments engineered to the highest international benchmarks for precision and safety.",
                color: "text-teal",
                bg: "bg-teal/8",
              },
              {
                icon: Award,
                title: "Wholesale-First Approach",
                desc: "Competitive pricing structures designed specifically for bulk orders, distributors, and institutional procurement.",
                color: "text-navy",
                bg: "bg-navy/8",
              },
              {
                icon: Globe,
                title: "Pan-Asian Reach",
                desc: "Trusted supply chains serving India, Bangladesh, Nepal, and across Asia with reliable, timely delivery.",
                color: "text-teal",
                bg: "bg-teal/8",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${item.bg} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <div className={`${item.color} flex justify-center mb-4`}>
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS + PRODUCTS STRIP */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2a3a 40%, #0a3d3d 70%, #0a2a1e 100%)",
        }}
      >
        {/* Radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20,184,166,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <p className="text-center text-xs font-body font-semibold tracking-[0.15em] uppercase text-white mb-6">
              International Certifications
            </p>
          </div>

          {/* Cert strip — static, centered, all 5 fit in one view, animated */}
          <div className="flex justify-center items-center gap-4 px-4 mb-10 flex-nowrap">
            {CERTS.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-2xl shadow-sm flex-shrink-0"
                style={{
                  width: "140px",
                  height: "110px",
                  padding: "10px 8px",
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  opacity: 0,
                  animation: `certFadeUp 0.6s ease forwards, certFloat 3s ease-in-out ${0.6 + index * 0.12}s infinite`,
                  animationDelay: `${index * 0.12}s, ${0.6 + index * 0.12}s`,
                }}
              >
                <img
                  src={item.logo}
                  alt={item.label}
                  className="object-contain mb-2"
                  style={{ width: "64px", height: "48px" }}
                />
                <span className="font-body font-bold text-white text-sm whitespace-nowrap text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 mb-5">
            <p className="text-center text-xs font-body font-semibold tracking-[0.15em] uppercase text-white">
              Our Products
            </p>
          </div>

          {/* Product strip — JS-driven infinite scroll + manual drag + arrow keys */}
          <div
            className="relative"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft")
                scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
              if (e.key === "ArrowRight")
                scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
            }}
          >
            {/* Left arrow button */}
            <button
              type="button"
              onClick={scrollLeft}
              data-ocid="products.scroll_left_button"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur border border-white/30 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            {/* Right arrow button */}
            <button
              type="button"
              onClick={scrollRight}
              data-ocid="products.scroll_right_button"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur border border-white/30 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-white" />
            </button>

            {/* Scrollable strip */}
            <div
              ref={scrollRef}
              style={{
                overflowX: "scroll",
                overflowY: "visible",
                scrollbarWidth: "none",
                paddingTop: "32px",
                paddingBottom: "32px",
                cursor: isDragging.current ? "grabbing" : "grab",
                outline: "none",
              }}
              onMouseDown={(e) => {
                isDragging.current = true;
                dragStartX.current = e.pageX;
                dragScrollStart.current = scrollRef.current?.scrollLeft ?? 0;
              }}
              onMouseMove={(e) => {
                if (!isDragging.current) return;
                const dx = e.pageX - dragStartX.current;
                if (scrollRef.current)
                  scrollRef.current.scrollLeft = dragScrollStart.current - dx;
              }}
              onMouseUp={() => {
                isDragging.current = false;
              }}
              onMouseLeave={() => {
                isDragging.current = false;
                setHoveredProduct(null);
              }}
            >
              <div
                className="flex items-stretch"
                style={{ width: "max-content" }}
              >
                {tripled.map((product) => {
                  const isHovered = hoveredProduct === product.key;
                  return (
                    <div
                      key={product.key}
                      onMouseEnter={() => setHoveredProduct(product.key)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className="flex-shrink-0 w-52 bg-white rounded-2xl shadow-sm mx-3 cursor-pointer"
                      style={{
                        height: "220px",
                        position: "relative",
                        transition:
                          "transform 0.45s cubic-bezier(0.34, 1.3, 0.64, 1), box-shadow 0.4s ease, border-color 0.4s ease",
                        transform: isHovered ? "scale(1.18)" : "scale(1)",
                        border: isHovered
                          ? "2px solid rgba(59,130,246,0.7)"
                          : "1.5px solid rgba(148,163,184,0.5)",
                        boxShadow: isHovered
                          ? "0 24px 52px rgba(0,0,0,0.25), 0 4px 16px rgba(59,130,246,0.2)"
                          : "0 1px 4px rgba(0,0,0,0.07)",
                        zIndex: isHovered ? 50 : 1,
                      }}
                    >
                      <div
                        className="w-full bg-gray-50 overflow-hidden rounded-t-2xl"
                        style={{ height: "136px" }}
                      >
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          style={{
                            transition:
                              "transform 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)",
                            transform: isHovered ? "scale(1.06)" : "scale(1)",
                          }}
                        />
                      </div>

                      <div className="px-3 pt-2 pb-1">
                        <p className="font-body text-xs font-bold text-navy leading-tight mb-0.5 truncate">
                          {product.name}
                        </p>
                        <span className="font-body text-[10px] text-teal font-semibold uppercase tracking-wide">
                          {product.category}
                        </span>
                      </div>

                      <div
                        className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-3 pb-3 pt-2"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,1) 40%)",
                          opacity: isHovered ? 1 : 0,
                          transition: "opacity 0.3s ease",
                          pointerEvents: isHovered ? "auto" : "none",
                          borderTop: "1px solid rgba(226,232,240,0.8)",
                        }}
                      >
                        <p className="font-body text-[11px] text-gray-500 leading-snug">
                          {product.desc}
                        </p>
                        <span className="inline-block mt-1.5 text-[10px] font-semibold text-blue-500">
                          View Details →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* View Product Categories button — animated shimmer + glow */}
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => navigate({ to: "/products" })}
              data-ocid="products.categories_button"
              className="categories-btn group inline-flex items-center gap-2 text-white font-body font-semibold text-base px-8 py-3 rounded-full cursor-pointer border-0 outline-none transition-transform hover:scale-105"
            >
              View Product Categories
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1.5"
              />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="relative py-20"
        style={{
          backgroundImage:
            "url('/assets/generated/testimonials-bg.dim_1600x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-teal-light font-body font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Client Reviews
            </span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {STARS.map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-body text-white/90 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal/30 border border-teal/50 flex items-center justify-center flex-shrink-0">
                    <span className="font-body font-bold text-white text-xs">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-white text-sm">
                      {t.author}
                    </p>
                    <p className="font-body text-white/55 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/testimonials" })}
              data-ocid="testimonials.view_all_button"
              className="border-white/40 text-white hover:bg-white/10 bg-transparent px-8"
            >
              View All Testimonies
            </Button>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-teal font-body font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Contact Us
            </span>
            <h2 className="font-display font-bold text-navy text-3xl md:text-4xl">
              Get In Touch
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "123 Medical Hub, Sector 7, New Delhi - 110001, India",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98765 43210  |  +91 11 2345 6789",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@surgikers.com",
                  href: "mailto:info@surgikers.com",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+91 98765 43210",
                  href: "https://wa.me/919876543210",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/company/surgikers",
                  href: "https://linkedin.com/company/surgikers",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy text-sm mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-muted-foreground text-sm hover:text-teal transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-muted-foreground text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-md border border-steel"
              data-ocid="contact.map_marker"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.1490%2C28.5739%2C77.2690%2C28.6539&layer=mapnik&marker=28.6139%2C77.2090"
                width="100%"
                height="350"
                style={{ border: 0 }}
                title="Surgikers Office Location"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="relative py-16"
        style={{
          backgroundImage:
            "url('/assets/generated/why-choose-us-clean-bg.dim_1600x500.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl">
              Why Choose Surgikers?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={22} className="text-teal-light" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1.5">
                  {item.title}
                </h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
