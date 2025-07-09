import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Qualifications />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
