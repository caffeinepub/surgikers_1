import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund & Return Policy", to: "/policy" },
  { label: "Delivery Policy", to: "/policy" },
  { label: "Payment Policy", to: "/policy" },
  { label: "Privacy Policy", to: "/policy" },
  { label: "FAQs", to: "/faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.12_0.04_240)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/40 font-body">
            &copy; {year} Surgikers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {footerLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                data-ocid={`footer.link.${i + 1}`}
                className="text-[11px] text-white/35 hover:text-white/60 font-body transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-3 text-center">
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white/25 hover:text-white/45 font-body transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
