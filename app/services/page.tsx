import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ServicesHero from "../components/ServicesPage/ServicesHero";
import ServicesList from "../components/ServicesPage/ServicesList";
import Maintenance from "../components/ServicesPage/Maintenance";
import WhyServices from "../components/ServicesPage/WhyServices";
import ServicesCTA from "../components/ServicesPage/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServicesList />

      <Maintenance />

      <WhyServices />

      <ServicesCTA />

      <Footer />
    </>
  );
}