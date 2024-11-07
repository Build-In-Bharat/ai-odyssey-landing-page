import Hero from "@/components/Hero";
import Second from "@/components/Second";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Second />
      <Footer />
    </div>
  );
}
