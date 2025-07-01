import HeroSection from "./components/HeroSection";
import Legacy from "./components/Legacy";
import DianoApart from "./components/DinoApart";
import Collections from "./components/Collections";
import Commitment from "./components/Commitment";
import Testimonial from "./components/Testimonial";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <HeroSection />
      <Legacy />
      <DianoApart />
      <Collections />
      <Commitment />
      <Testimonial />
      <Connect />
    </div>
  );
}