import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import MissionVision from "../components/About/MissionVission";
import WhyUs from "../components/About/WhyUs";
import AboutCTA from "../components/About/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <AboutHero />
<OurStory />
<MissionVision />
<WhyUs />
<AboutCTA />
      <Footer />
    </>
  );
}