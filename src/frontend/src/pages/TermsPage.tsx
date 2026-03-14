import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center py-20 px-4">
          <span className="inline-block text-teal font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Legal
          </span>
          <h1 className="font-display font-bold text-navy text-4xl md:text-5xl mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Full terms and conditions governing the use of Surgikers services
            and products — coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
