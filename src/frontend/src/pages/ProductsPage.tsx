import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Activity,
  ArrowDownAZ,
  ArrowUpAZ,
  Bone,
  Building2,
  ChevronDown,
  ChevronUp,
  Download,
  Ear,
  ExternalLink,
  FileText,
  FilterX,
  MessageCircle,
  Microscope,
  Package,
  Scissors,
  Search,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Product = {
  name: string;
  description: string;
};

type Category = {
  id: number;
  name: string;
  icon: React.ElementType;
  shortDesc: string;
  products: Product[];
  pdfUrl?: string;
};

function PdfPanel({
  pdfUrl,
  categoryName,
}: { pdfUrl?: string; categoryName: string }) {
  const [hovered, setHovered] = useState(false);

  if (pdfUrl) {
    return (
      <div className="w-44 shrink-0 flex flex-col rounded-xl border border-white/20 bg-white/5 overflow-hidden">
        <button
          type="button"
          className="relative cursor-pointer flex-1 w-full text-left bg-transparent border-0 p-0"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.open(pdfUrl, "_blank")}
        >
          <iframe
            src={`${pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${categoryName} catalogue`}
            className="w-full h-44 rounded-t-xl"
            style={{ pointerEvents: "none" }}
          />
          {hovered && (
            <div className="absolute inset-0 bg-teal/60 rounded-t-xl flex flex-col items-center justify-center gap-1.5 transition-all">
              <ExternalLink size={20} className="text-white" />
              <span className="text-white text-xs font-semibold">Open PDF</span>
            </div>
          )}
        </button>
        <a
          href={pdfUrl}
          download
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 text-teal text-xs font-semibold border-t border-white/10 hover:bg-teal/10 transition-colors"
        >
          <Download size={12} />
          Download
        </a>
      </div>
    );
  }

  return (
    <div className="w-44 shrink-0 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 min-h-[200px] gap-2 p-4">
      <FileText size={32} className="text-white/30" />
      <span className="text-white/30 text-xs font-semibold">Catalogue</span>
      <span className="text-white/20 text-xs">Coming Soon</span>
    </div>
  );
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Dental Instruments",
    icon: Syringe,
    shortDesc: "Precision tools for oral surgery and dental procedures",
    pdfUrl:
      "/assets/uploads/dental_front_back-019d356a-15fd-701a-8b6b-3d3a4610e083-1.pdf",
    products: [
      {
        name: "Dental Scalers",
        description: "Removes tartar and plaque effectively",
      },
      {
        name: "Dental Extraction Forceps",
        description: "Precision grip for safe tooth extraction",
      },
      {
        name: "Dental Mirrors",
        description: "Angled mirrors for full oral cavity visibility",
      },
      {
        name: "Periodontal Probes",
        description: "Accurate gum pocket measurement",
      },
      {
        name: "Dental Elevators",
        description: "Luxation of teeth prior to extraction",
      },
      {
        name: "Mouth Gags",
        description: "Maintains mouth opening during procedures",
      },
    ],
  },
  {
    id: 2,
    name: "Orthopedic Instruments",
    icon: Bone,
    shortDesc: "Durable instruments engineered for bone and joint surgery",
    products: [
      {
        name: "Bone Chisels & Gouges",
        description: "Precision bone shaping and cutting",
      },
      {
        name: "Orthopedic Mallets",
        description: "Controlled force application in bone surgery",
      },
      {
        name: "Bone Holding Forceps",
        description: "Secure bone fragment stabilisation",
      },
      {
        name: "Periosteal Elevators",
        description: "Separates periosteum from bone surface",
      },
      {
        name: "Bone Curettes",
        description: "Removal of bone tissue and debris",
      },
      {
        name: "Hip Retractors",
        description: "Optimal surgical field exposure in hip surgery",
      },
    ],
  },
  {
    id: 3,
    name: "General Instruments",
    icon: Scissors,
    shortDesc:
      "Essential stainless steel instruments for everyday surgical use",
    products: [
      {
        name: "Surgical Scissors",
        description: "Sharp, durable cutting in all procedures",
      },
      {
        name: "Tissue Forceps",
        description: "Secure tissue handling and manipulation",
      },
      {
        name: "Scalpel Handles",
        description: "Ergonomic handles for precise incisions",
      },
      {
        name: "Needle Holders",
        description: "Firm grip for suture needle control",
      },
      {
        name: "Haemostatic Clamps",
        description: "Controls bleeding during surgery",
      },
      {
        name: "Towel Clips",
        description: "Secures sterile drapes in position",
      },
    ],
  },
  {
    id: 4,
    name: "Laparoscopy Instruments",
    icon: Microscope,
    shortDesc: "Cutting-edge tools for minimally invasive surgery",
    products: [
      {
        name: "Trocars & Cannulas",
        description: "Safe entry ports for laparoscopic access",
      },
      {
        name: "Laparoscopic Graspers",
        description: "Tissue grasping in minimally invasive surgery",
      },
      {
        name: "Laparoscopic Dissectors",
        description: "Precise dissection in confined spaces",
      },
      {
        name: "Clip Appliers",
        description: "Vessel and duct ligation without sutures",
      },
      {
        name: "Suction-Irrigation Cannulas",
        description: "Maintains clear operative field",
      },
      {
        name: "Maryland Dissectors",
        description: "Versatile dissection and grasping tool",
      },
    ],
  },
  {
    id: 5,
    name: "Hospital Furnitures",
    icon: Building2,
    shortDesc:
      "Robust and ergonomic furniture for modern healthcare facilities",
    products: [
      {
        name: "Motorised OT Tables",
        description: "Fully adjustable for all surgical positions",
      },
      {
        name: "IV Infusion Stands",
        description: "Stable, height-adjustable drip stands",
      },
      {
        name: "Hospital Beds",
        description: "Comfortable, adjustable beds for patient care",
      },
      {
        name: "Instrument Trolleys",
        description: "Mobile storage for sterile instruments",
      },
      {
        name: "Mayo Instrument Trays",
        description: "Portable tray for bedside instrument setup",
      },
      {
        name: "Overbed Tables",
        description: "Adjustable tables for patient convenience",
      },
    ],
  },
  {
    id: 6,
    name: "Medical Hollowwares",
    icon: Package,
    shortDesc: "Premium stainless steel utility ware for clinical environments",
    products: [
      {
        name: "Kidney Trays",
        description: "Standard trays for instrument and waste collection",
      },
      {
        name: "Dressing Drums",
        description: "Sterilisation and storage of dressings",
      },
      {
        name: "Stainless Steel Bowls",
        description: "Multipurpose utility bowls",
      },
      {
        name: "Measure Jugs",
        description: "Calibrated fluid measurement jugs",
      },
      { name: "Dressing Jars", description: "Storage for cotton and gauze" },
      {
        name: "Lotion Bowls",
        description: "Holding antiseptics and solutions",
      },
    ],
  },
  {
    id: 7,
    name: "ENT Instruments",
    icon: Ear,
    shortDesc: "Specialised instruments for ear, nose, and throat procedures",
    products: [
      {
        name: "Nasal Specula",
        description: "Widens nasal passages for examination",
      },
      {
        name: "Ear Hooks & Curettes",
        description: "Removal of foreign bodies from the ear",
      },
      {
        name: "Laryngoscopes",
        description: "Examination and intubation of the larynx",
      },
      {
        name: "Tongue Depressors",
        description: "Suppresses tongue during oral examination",
      },
      {
        name: "Tuning Forks",
        description: "Hearing and vibration sensitivity testing",
      },
      {
        name: "Nasal Forceps",
        description: "Grasping tissue within the nasal cavity",
      },
    ],
  },
];

const PROMOS = [
  "🎉 Monsoon Sale – Up to 20% off on General Instruments",
  "🏥 Bulk Order Discounts Available – Contact us today",
  "⭐ New Arrivals: Laparoscopy Instruments – Request a Quote",
  "📦 Free Shipping on orders above ₹50,000",
  "✅ ISO 13485 Certified Products – Trusted by 200+ Hospitals",
];

// doubled for seamless loop, use stable keys
const PROMOS_DOUBLED = [
  ...PROMOS.map((p, i) => ({ text: p, key: `a${i}` })),
  ...PROMOS.map((p, i) => ({ text: p, key: `b${i}` })),
];

const USP_BADGES = [
  "ISO Certified",
  "CE & FDA Approved",
  "Pan-Asia Distribution",
  "1000+ Products",
  "Quality Guaranteed",
  "Direct Manufacturer",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortAZ, setSortAZ] = useState<"asc" | "desc">("asc");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const toggleExpand = (id: number) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSortAZ("asc");
  };

  const filteredCategories = useMemo(() => {
    let cats = CATEGORIES.filter((cat) => {
      const matchesSearch =
        search === "" ||
        cat.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.products.some(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase()),
        );
      const matchesFilter =
        selectedCategories.length === 0 || selectedCategories.includes(cat.id);
      return matchesSearch && matchesFilter;
    });
    cats = [...cats].sort((a, b) =>
      sortAZ === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    return cats;
  }, [search, selectedCategories, sortAZ]);

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />

      {/* ===== INTRO SECTION ===== */}
      <section className="pt-24 pb-10 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase bg-teal/20 text-teal border border-teal/30 rounded-full px-4 py-1 mb-5">
              Our Products
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight">
              Precision Instruments.
              <br />
              <span className="text-teal">Proven Quality.</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Surgikers Pvt. Ltd. supplies a comprehensive range of surgical and
              medical instruments to hospitals, diagnostic centres, and
              wholesale distributors across India and major Asian markets. Every
              product in our catalogue meets international quality standards
              including ISO 9001:2015 and ISO 13485 certification. From
              cutting-edge laparoscopic tools to durable hospital furniture, our
              portfolio is built for clinical excellence and long-term
              reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {USP_BADGES.map((usp) => (
                <span
                  key={usp}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-teal/30 text-teal text-xs font-semibold px-3.5 py-1.5 rounded-full"
                >
                  <Activity size={11} />
                  {usp}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROMOTIONS BANNER ===== */}
      <div className="bg-teal/90 overflow-hidden py-2.5 border-y border-teal">
        <div className="flex whitespace-nowrap promo-marquee">
          {PROMOS_DOUBLED.map((item) => (
            <span
              key={item.key}
              className="inline-block text-white text-sm font-semibold px-10 shrink-0"
            >
              {item.text}
              <span className="ml-10 text-white/40">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-10">
        <div className="flex gap-8 items-start">
          {/* ===== LEFT FILTER PANEL ===== */}
          <aside className="hidden lg:block w-[280px] shrink-0">
            <div
              className="sticky top-20 rounded-2xl border border-white/10 p-5"
              style={{
                background: "rgba(15,25,50,0.85)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h2 className="text-white font-display font-bold text-lg mb-5 flex items-center gap-2">
                <Stethoscope size={16} className="text-teal" />
                Filter &amp; Sort
              </h2>

              {/* Search */}
              <div className="relative mb-5">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                />
                <Input
                  id="sidebar-search"
                  data-ocid="products.search_input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products…"
                  className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal text-sm"
                />
              </div>

              {/* Sort */}
              <div className="mb-5">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                  Sort A–Z
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    data-ocid="products.sort_toggle"
                    onClick={() => setSortAZ("asc")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      sortAZ === "asc"
                        ? "bg-teal text-white border-teal"
                        : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <ArrowDownAZ size={13} /> A → Z
                  </button>
                  <button
                    type="button"
                    onClick={() => setSortAZ("desc")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      sortAZ === "desc"
                        ? "bg-teal text-white border-teal"
                        : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <ArrowUpAZ size={13} /> Z → A
                  </button>
                </div>
              </div>

              {/* Category checkboxes */}
              <div className="mb-5">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                  Categories
                </p>
                <div className="space-y-2.5">
                  {CATEGORIES.map((cat, idx) => (
                    <div key={cat.id} className="flex items-center gap-2.5">
                      <Checkbox
                        id={`filter-cat-${cat.id}`}
                        data-ocid={`products.category_filter.checkbox.${idx + 1}`}
                        checked={selectedCategories.includes(cat.id)}
                        onCheckedChange={() => toggleCategory(cat.id)}
                        className="border-white/30 data-[state=checked]:bg-teal data-[state=checked]:border-teal"
                      />
                      <label
                        htmlFor={`filter-cat-${cat.id}`}
                        className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                      >
                        {cat.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                data-ocid="products.clear_filters_button"
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="w-full border-white/20 text-white/70 hover:bg-white/10 hover:text-white bg-transparent gap-2 text-xs"
              >
                <FilterX size={13} />
                Clear Filters
              </Button>
            </div>
          </aside>

          {/* ===== CATEGORY GRID ===== */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter bar */}
            <div className="lg:hidden mb-4 flex gap-2 flex-wrap">
              <div className="relative flex-1">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                />
                <Input
                  data-ocid="products.search_input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products…"
                  className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm"
                />
              </div>
              <button
                type="button"
                data-ocid="products.sort_toggle"
                onClick={() => setSortAZ(sortAZ === "asc" ? "desc" : "asc")}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 text-xs font-semibold hover:bg-white/10"
              >
                {sortAZ === "asc" ? (
                  <ArrowDownAZ size={14} />
                ) : (
                  <ArrowUpAZ size={14} />
                )}
                Sort
              </button>
            </div>

            {filteredCategories.length === 0 ? (
              <div
                className="text-center py-20 text-white/40"
                data-ocid="products.empty_state"
              >
                <Package size={40} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">No categories match your search.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-3 text-teal text-xs hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredCategories.map((cat, catIdx) => {
                  const Icon = cat.icon;
                  const isExpanded = expandedCategories.includes(cat.id);
                  const originalIndex = CATEGORIES.findIndex(
                    (c) => c.id === cat.id,
                  );
                  return (
                    <motion.div
                      key={cat.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIdx * 0.07, duration: 0.4 }}
                      data-ocid={`products.category.card.${originalIndex + 1}`}
                      className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "border-teal/60 shadow-[0_0_24px_rgba(82,188,210,0.2)]"
                          : "border-white/10 hover:border-teal/40 hover:shadow-[0_0_20px_rgba(82,188,210,0.12)]"
                      }`}
                      style={{ background: "rgba(15,25,50,0.7)" }}
                    >
                      {/* Card top: left content + right PDF panel */}
                      <div className="p-6 flex gap-5 items-stretch">
                        {/* Left column */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/25 flex items-center justify-center shrink-0 group-hover:bg-teal/25 transition-colors">
                                <Icon size={22} className="text-teal" />
                              </div>
                              <div>
                                <h3 className="font-display font-bold text-white text-xl leading-tight">
                                  {cat.name}
                                </h3>
                                <p className="text-white/50 text-sm mt-0.5">
                                  {cat.shortDesc}
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-teal/20 text-teal border border-teal/30 text-xs shrink-0 mt-1">
                              {cat.products.length} products
                            </Badge>
                          </div>

                          <button
                            type="button"
                            data-ocid={`products.category.view_button.${originalIndex + 1}`}
                            onClick={() => toggleExpand(cat.id)}
                            className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-teal/30 text-teal text-sm font-semibold hover:bg-teal/10 transition-all duration-200"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp size={15} /> Hide Products
                              </>
                            ) : (
                              <>
                                <ChevronDown size={15} /> View Products
                              </>
                            )}
                          </button>
                        </div>

                        {/* Right column: PDF panel */}
                        <div className="hidden sm:flex">
                          <PdfPanel
                            pdfUrl={cat.pdfUrl}
                            categoryName={cat.name}
                          />
                        </div>
                      </div>

                      {/* Expanded product sub-grid */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            key="products"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/10 px-6 pb-6 pt-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {cat.products.map((product, pIdx) => (
                                  <div
                                    key={product.name}
                                    className="rounded-xl border border-white/10 bg-white/5 p-3.5 hover:border-teal/30 transition-all"
                                  >
                                    <p className="text-white font-semibold text-sm leading-snug mb-1">
                                      {product.name}
                                    </p>
                                    <p className="text-white/45 text-xs leading-relaxed mb-3">
                                      {product.description}
                                    </p>
                                    <button
                                      type="button"
                                      data-ocid={
                                        cat.id === 1
                                          ? `products.product.enquire_button.${pIdx + 1}`
                                          : undefined
                                      }
                                      onClick={() =>
                                        window.open(
                                          `https://wa.me/916289916622?text=${encodeURIComponent(`Hi Surgikers, I'd like to enquire about: ${product.name}`)}`,
                                          "_blank",
                                        )
                                      }
                                      className="flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-white hover:bg-teal transition-all rounded-lg px-3 py-1.5 border border-teal/40 hover:border-teal w-full justify-center"
                                    >
                                      <MessageCircle size={11} />
                                      Enquire
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes promo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .promo-marquee {
          animation: promo-scroll 22s linear infinite;
        }
      `}</style>
    </div>
  );
}
