import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactSection from "../components/Contact/ContactSection";
import GoogleMap from "../components/Contact/GoogleMap";
import ContactCTA from "../components/Contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactSection />

      <GoogleMap />
       
       <ContactCTA />

      <Footer />
    </>
  );
}