import SmoothScrolling from '@/components/SmoothScrolling';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStatsStrip from '@/components/TrustStatsStrip';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import ProjectShowcase from '@/components/ProjectShowcase';
import SavingsCalculator from '@/components/SavingsCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { WhatsAppButton } from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="flex min-h-screen flex-col bg-zippy-dark overflow-x-hidden">
        <Navbar />
        <Hero />
        <TrustStatsStrip />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <ProjectShowcase />
        <SavingsCalculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <WhatsAppButton />
        <Footer />
      </main>
    </SmoothScrolling>
  );
}
