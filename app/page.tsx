import CalculatorSection from "./components/Calculator/CalculatorSection";
import FAQ from "./components/FAQ/FAQ";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./services/Services";


export default function Home() {
  return (
    <>
          <Navbar />
      <Hero />
      <CalculatorSection />
      <WhyChooseUs />
      <Services />
      
      <FAQ />
    </>
  );
}