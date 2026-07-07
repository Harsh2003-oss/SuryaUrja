import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./services/Services";


export default function Home() {
  return (
    <>
          <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
    </>
  );
}