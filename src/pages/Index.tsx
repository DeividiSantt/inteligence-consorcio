import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConsultantCTA from "@/components/ConsultantCTA";
import Simulator from "@/components/Simulator";
import About from "@/components/About";
import ContemplatedCards from "@/components/ContemplatedCards";
import Consultant from "@/components/Consultant";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ConsultantCTA />
        <Simulator />
        <About />
        <ContemplatedCards />
        <Consultant />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
