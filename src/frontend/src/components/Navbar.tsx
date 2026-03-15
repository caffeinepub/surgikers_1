import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Bone,
  Building2,
  ChevronDown,
  Ear,
  Menu,
  Microscope,
  Package,
  Scissors,
  Stethoscope,
  Syringe,
  X,
} from "lucide-react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const CATEGORIES = [
  { label: "Dental Instruments", icon: Syringe },
  { label: "Orthopedic Instruments", icon: Bone },
  { label: "General Instruments", icon: Scissors },
  { label: "Laparoscopy Instruments", icon: Microscope },
  { label: "Hospital Furnitures", icon: Building2 },
  { label: "Medical Hollowwares", icon: Package },
  { label: "ENT Instruments", icon: Ear },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();

  const isLoggedIn = loginStatus === "success" && identity;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="flex items-center justify-center bg-white rounded-full shadow-md flex-shrink-0"
              style={{ width: "44px", height: "44px", padding: "4px" }}
            >
              <img
                src="/assets/uploads/Surgikers-logo-with-heraldic-shield-1.png"
                alt="Surgikers Logo"
                className="h-9 w-9 object-contain"
              />
            </div>
            <span className="font-display font-bold text-white text-xl tracking-wide">
              Surgikers
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/about"
              data-ocid="nav.link.1"
              className="text-white/80 hover:text-white text-sm font-body font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              About Us
            </Link>

            {/* Product Catalogue with dropdown */}
            <div
              className="relative group"
              data-ocid="nav.products_dropdown_menu"
            >
              <Link
                to="/products"
                data-ocid="nav.link.2"
                className="text-white/80 hover:text-white text-sm font-body font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors inline-flex items-center gap-1"
              >
                Product Catalogue
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div
                className="absolute top-full left-0 mt-1 w-60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 py-2"
                style={{ background: "rgba(10,22,40,0.97)" }}
              >
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.label}
                    to="/products"
                    className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 text-sm font-body transition-colors"
                  >
                    <cat.icon size={15} className="text-teal flex-shrink-0" />
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/blogs"
              data-ocid="nav.link.3"
              className="text-white/80 hover:text-white text-sm font-body font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              data-ocid="nav.link.4"
              className="text-white/80 hover:text-white text-sm font-body font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <span className="text-white/70 text-xs">
                  {identity.getPrincipal().toString().slice(0, 10)}...
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clear}
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent text-xs"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={login}
                  data-ocid="nav.signin_button"
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent text-xs"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  onClick={login}
                  data-ocid="nav.signup_button"
                  className="bg-teal hover:bg-teal/90 text-white text-xs border-0"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy/95 border-t border-white/10 px-4 pb-4">
          {[
            { label: "About Us", to: "/about" },
            { label: "Product Catalogue", to: "/products" },
            { label: "Blogs", to: "/blogs" },
            { label: "Contact Us", to: "/contact" },
          ].map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`nav.link.${i + 1}`}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white text-sm font-medium py-2.5 border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                login();
                setOpen(false);
              }}
              data-ocid="nav.signin_button"
              className="border-white/40 text-white hover:bg-white/10 bg-transparent flex-1"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => {
                login();
                setOpen(false);
              }}
              data-ocid="nav.signup_button"
              className="bg-teal text-white flex-1 border-0"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
