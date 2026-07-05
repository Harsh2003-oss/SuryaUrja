import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (
    <>
          <Navbar />
      <Hero />
      <WhyChooseUs />
    </>
  );
}