import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
