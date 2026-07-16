import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ProjectsHero from "../components/Projects/ProjectsHero";
import Gallery from "../components/Projects/Gallery";
import WorkProcess from "../components/Projects/WorkProcess";
import ProjectsCTA from "../components/Projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <ProjectsHero />

      <Gallery />

      <WorkProcess />

      <ProjectsCTA />

      <Footer />
    </>
  );
}