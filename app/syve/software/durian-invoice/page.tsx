import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export const metadata = {
  title: "Durian Invoice System",
  description: "Landing page for Durian Invoice System",
};

export default function DurianInvoicePage() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
