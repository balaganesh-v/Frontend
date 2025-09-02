import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/common/Hero";
import About from "@/components/common/About";
import Features from "@/components/common/Features";
import Pricing from "@/components/common/Pricing";
import Contact from "@/components/common/Contact";
import Login from "@/components/common/Login";
import Footer from "@/components/layout/Footer";


export default function Home() {
  const UserName = "yuhnie";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar username={UserName} />
      <main className="flex-1">
        <Hero username={UserName} />
        <About />
        <Features />
        <Pricing />
        <Login username={UserName}/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


