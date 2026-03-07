import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Solutions />
      <Benefits />
      <Contact />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
