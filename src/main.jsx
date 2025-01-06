import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./Componen/heroSection.jsx";
import SectionHead from "./Componen/SectionHead.jsx";
import SectionTesti from "./Componen/testi.jsx";
import TeamSection from "./Componen/teamSection.jsx";
import Sponsor from "./Componen/sponsor.jsx";
import Footer from "./Componen/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroSection />
    <SectionHead />
    <SectionTesti />
    <TeamSection />
    <Sponsor />
    <Footer/>
  </StrictMode>
);
