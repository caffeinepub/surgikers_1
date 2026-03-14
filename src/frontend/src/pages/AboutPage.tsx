import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center py-20 px-4">
          <span className="inline-block text-teal font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Who We Are
          </span>
          <h1 className="font-display font-bold text-navy text-4xl md:text-5xl mb-6">
            About Us
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Full About Us page coming soon — our story, mission, team, and
            commitment to surgical excellence.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
