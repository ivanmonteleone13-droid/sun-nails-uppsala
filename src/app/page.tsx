import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Gallery />
      <ReviewsCarousel />
      <AboutSection />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
