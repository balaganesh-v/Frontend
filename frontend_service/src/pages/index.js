import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/common/Hero";
import About from "@/components/common/About";
import Features from "@/components/common/Features";
import Pricing from "@/components/common/Pricing";
import Contact from "@/components/common/Contact";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* 🔥 Debug Tailwind */}
        <div className="bg-green-500 text-white text-center p-4">
          If you see a green box, Tailwind is working ✅
        </div>

        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

