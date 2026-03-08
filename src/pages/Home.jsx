import AboutSection from "../components/AboutSection";
import ConsultSection from "../components/ConsultSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PubertySection from "../components/PubertySection";
import WhyReachOut from "../components/WhyReachOut";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <PubertySection />
      <AboutSection />
      <WhyReachOut />
      <ConsultSection />
      <Footer />
    </div>
  );
}
