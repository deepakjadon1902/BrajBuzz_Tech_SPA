import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OurStorySection } from "@/components/OurStorySection";
import { UnboxingSection } from "@/components/UnboxingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <UnboxingSection />
      <PartnersSection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
