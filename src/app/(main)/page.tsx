import Navbar from "../../features/landing-page/components/Navbar";
import Hero from "../../features/landing-page/components/Hero";
import Solutions from "../../features/landing-page/components/Solutions";
import Impact from "../../features/landing-page/components/Impact";
import About from "../../features/landing-page/components/About";
import CollectiveImpact from "../../features/landing-page/components/CollectiveImpact";
import WatchOurStories from "../../features/landing-page/components/WatchOurStories";
import Partners from "../../features/landing-page/components/Partners";
import FeaturedIn from "../../features/landing-page/components/FeaturedIn";
import RealImpact from "../../features/landing-page/components/RealImpact";
import Testimonial from "../../features/landing-page/components/Testimonial";
import AwardsRecognition from "../../features/landing-page/components/AwardsRecognition";
import LatestFeatures from "../../features/landing-page/components/LatestFeatures";
import ContactForm from "../../features/landing-page/components/ContactForm"; // <--- IMPORT BARU
import Footer from "../../features/landing-page/components/Footer"; // <--- IMPORT BARU

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <Hero />
      <Solutions />
      <Impact />
      <About />
      <WatchOurStories />
      <CollectiveImpact />
      <Partners />
      <FeaturedIn />
      <RealImpact />
      <Testimonial />
      <AwardsRecognition />
      <LatestFeatures />
      <ContactForm />  {/* <--- POSISI DI SINI */}
      <Footer />       {/* <--- PENUTUP PAGE */}
    </main>
  );
}