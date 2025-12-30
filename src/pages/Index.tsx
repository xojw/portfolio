import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-20">
        <Hero />
        <SocialLinks />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
