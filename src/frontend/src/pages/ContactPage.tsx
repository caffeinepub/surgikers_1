import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const WEB3FORMS_ACCESS_KEY = "9d982519-6bb3-41b0-ac7d-5e9c3a92e8e1";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "2/C Regent Colony, Kolkata- 700040, West Bengal, IN",
    href: "https://www.google.com/maps?q=22.483540003445473,88.35353023518293",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6289916622",
    href: "tel:+916289916622",
  },
  {
    icon: Mail,
    label: "Email",
    value: "surgikerspvt.ltd@gmail.com",
    href: "mailto:surgikerspvt.ltd@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 6289916622",
    href: "https://wa.me/916289916622",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Surgikers Pvt. Ltd.",
    href: "https://linkedin.com/company/surgikers",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Sat, 9:00 AM – 6:00 PM (IST)",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const body = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.name,
        email: form.email,
        subject: form.subject || "Contact Form Submission – Surgikers",
        message: `Company/Organisation: ${form.company || "N/A"}\nPhone: ${form.phone || "N/A"}\n\n${form.message}`,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl leading-tight mb-6">
            Contact Us
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Have a query, need a quotation, or want to discuss a partnership?
            Our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 bg-white flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-slate-500 text-sm mb-8">
                Fill in the form and we'll get back to you within 1–2 business
                days.
              </p>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-6 p-4 rounded-xl border border-teal/30 text-sm font-body text-teal"
                  style={{ background: "oklch(0.52 0.12 210 / 0.06)" }}
                >
                  ✓ Message sent successfully! We'll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="mb-6 p-4 rounded-xl border border-red-200 text-sm font-body text-red-600 bg-red-50"
                >
                  Something went wrong. Please try again or email us directly at
                  surgikerspvt.ltd@gmail.com.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-body text-navy text-sm font-medium"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. Aisha Khan"
                      value={form.name}
                      onChange={handleChange}
                      data-ocid="contact.name_input"
                      className="font-body border-slate-200 focus-visible:ring-teal/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="company"
                      className="font-body text-navy text-sm font-medium"
                    >
                      Company / Organisation
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="City General Hospital"
                      value={form.company}
                      onChange={handleChange}
                      data-ocid="contact.company_input"
                      className="font-body border-slate-200 focus-visible:ring-teal/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="font-body text-navy text-sm font-medium"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      data-ocid="contact.phone_input"
                      className="font-body border-slate-200 focus-visible:ring-teal/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body text-navy text-sm font-medium"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@hospital.com"
                      value={form.email}
                      onChange={handleChange}
                      data-ocid="contact.email_input"
                      className="font-body border-slate-200 focus-visible:ring-teal/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="font-body text-navy text-sm font-medium"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Request for Quotation — Laparoscopic Instruments"
                    value={form.subject}
                    onChange={handleChange}
                    data-ocid="contact.subject_input"
                    className="font-body border-slate-200 focus-visible:ring-teal/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-body text-navy text-sm font-medium"
                  >
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your requirements, quantities, or any questions you have…"
                    value={form.message}
                    onChange={handleChange}
                    data-ocid="contact.message_textarea"
                    className="font-body border-slate-200 focus-visible:ring-teal/40 resize-none"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    data-ocid="contact.submit_button"
                    className="w-full sm:w-auto px-8 py-3 font-body font-semibold text-white border-0 rounded-xl transition-all disabled:opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.52 0.12 210), oklch(0.42 0.10 220))",
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.15 0.06 240) 0%, oklch(0.20 0.08 232) 100%)",
                }}
              >
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  Contact Information
                </h3>
                <p className="font-body text-white/50 text-sm mb-8">
                  Reach us through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        <item.icon size={17} className="text-teal" />
                      </div>
                      <div>
                        <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className="font-body text-white text-sm hover:text-teal transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-white text-sm">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-10 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <p className="font-body text-white/50 text-xs leading-relaxed">
                    We typically respond to enquiries within 1–2 business days.
                    For urgent matters, please reach out via WhatsApp or phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
