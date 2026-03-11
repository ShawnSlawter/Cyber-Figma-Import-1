import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection/ServicesOfferedSection";

export const Cybersecurity = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1440px] relative flex flex-col">
      {/* CallToAction at the top */}
      <CallToActionSection />

      {/* Hero area with background images and decorative elements */}
      <div className="relative w-full" style={{ minHeight: "800px" }}>
        {/* Background cyber security image - main large one */}
        <img
          className="absolute top-0 left-[535px] w-[829px] h-[550px] object-cover"
          alt="Cyber security"
          src="/cyber-security-2.png"
        />

        {/* Background cyber security image - small right edge one */}
        <img
          className="absolute top-0 left-[1341px] w-[99px] h-[550px] object-cover"
          alt="Cyber security"
          src="/cyber-security-2.png"
        />

        {/* Horizontal divider line */}
        <div className="absolute top-0 left-10 w-[1360px] h-px bg-neutral-700" />

        {/* Gradient overlay to blend image into black background */}
        <div className="absolute top-[43px] left-[475px] w-[572px] h-[471px] bg-[linear-gradient(91deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.69)_59%,rgba(0,0,0,0.08)_100%)]" />

        {/* Decorative corner brackets - top-left of image area */}
        <div className="absolute top-[0px] left-[840px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc]" />
        <div className="absolute top-[581px] left-[840px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc]" />

        {/* Decorative corner brackets - top-right and bottom-right of image area */}
        <div className="absolute top-[0px] left-[1376px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc] rotate-180" />
        <div className="absolute top-[581px] left-[1376px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc] rotate-180" />

        {/* Vertical decorative line on the left */}
        <div className="absolute top-[119px] left-[53px] w-px h-[335px] bg-[#424242]" />
        {/* Top horizontal tick */}
        <div className="absolute top-[119px] left-[54px] w-10 h-px bg-[#424242]" />
        {/* Bottom horizontal tick */}
        <div className="absolute top-[453px] left-[54px] w-10 h-px bg-[#424242]" />

        {/* HeroSection content */}
        <div className="relative z-10">
          <HeroSection />
        </div>

        {/* Subtitle text */}
        <div className="absolute top-[350px] left-[104px] w-[756px] [font-family:'Lato',Helvetica] font-normal text-[#d7d7d7] text-2xl tracking-[0] leading-[39.4px]">
          Unlock your business&#39;s full potential with our comprehensive
          cybersecurity strategies. Safeguard your growth and resilience in the
          digital age.
        </div>

        {/* CTA Buttons */}
        <div className="inline-flex items-start gap-8 absolute top-[530px] left-[104px]">
          <Button className="inline-flex items-center justify-center gap-2.5 px-[30px] py-[17px] bg-[#54f4fc] rounded-lg hover:bg-[#54f4fc]/90 h-auto">
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-black text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap">
              LEARN MORE
            </span>
          </Button>

          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2.5 px-[30px] py-[17px] rounded-lg border border-solid border-[#54f4fc] bg-transparent hover:bg-transparent h-auto"
          >
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap">
              TALK WITH US
            </span>
          </Button>
        </div>
      </div>

      {/* Main content sections stacked vertically */}
      <MainContentSection />
      <ServicesOfferedSection />
      <CustomerTestimonialsSection />
      <FooterSection />
    </div>
  );
};
