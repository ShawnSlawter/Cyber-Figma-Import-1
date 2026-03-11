import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Logos } from "./sections/Logos";
import { AboutStats } from "./sections/AboutStats";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export const SecureOps = (): JSX.Element => {
  return (
    <div className="bg-[#020609] text-white overflow-x-hidden w-full relative flex flex-col min-h-screen selection:bg-[#54f4fc]/30 selection:text-[#54f4fc]">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#1a6fb5]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-[#54f4fc]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-[#1a6fb5]/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Logos />
        <AboutStats />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};
