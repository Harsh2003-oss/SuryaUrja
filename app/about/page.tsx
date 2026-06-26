import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../projects/page";
import SolarStory from "../components/SolarAnimation/SolarStory";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
<Navbar />
<Hero />
<SolarStory />
<WhyChooseUs />
<Projects />
    </main>
  );
}