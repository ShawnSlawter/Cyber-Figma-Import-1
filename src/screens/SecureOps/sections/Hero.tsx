import { Button } from "../../../components/ui/button";

export const Hero = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-4 lg:px-[104px] py-20 overflow-hidden">
      {/* Code character background effect (Cyber feel from Figma) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none font-mono text-[10px] leading-tight overflow-hidden break-all px-4 py-4 lg:px-[104px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-2">
            {Math.random().toString(16).repeat(50)}
          </div>
        ))}
      </div>

      {/* Decorative vertical line and ticks on the far left */}
      <div className="absolute left-[53px] top-[24%] hidden lg:flex flex-col items-start h-[335px] opacity-60">
        <div className="w-[41px] h-[3px] bg-[#424242]" />
        <div className="w-[1px] h-full bg-[#424242] ml-[1px]" />
        <div className="w-[41px] h-[3px] bg-[#424242]" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1300px] mx-auto z-10 gap-16">
        {/* Left: Content */}
        <div className="flex flex-col max-w-[800px] text-left">
          <h1 className="[font-family:'Montserrat',Helvetica] font-bold text-[48px] lg:text-[68px] leading-[1.1] tracking-[-0.02em] mb-10">
            <span className="text-white">Comprehensive </span>
            <span className="text-[#54f4fc] drop-shadow-[0_0_15px_rgba(84,244,252,0.3)]">Cybersecurity</span>
            <br className="hidden lg:block" />
            <span className="text-white"> Strategies for Growth and Resilience</span>
          </h1>

          <p className="[font-family:'Lato',Helvetica] font-normal text-[#B0BCC3] text-xl lg:text-[24px] leading-[1.6] mb-14 max-w-[720px]">
            Unlock your business's full potential with our comprehensive
            cybersecurity strategies. Safeguard your growth and resilience in the
            digital age.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            <Button className="w-full sm:w-auto h-[64px] px-12 bg-[#54f4fc] hover:bg-[#3de0e8] text-black font-extrabold text-[17px] tracking-[0.05em] rounded-md shadow-[0_0_30px_rgba(84,244,252,0.2)] transition-all hover:scale-105 active:scale-95">
              LEARN MORE
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-[64px] px-12 bg-transparent border-[2px] border-[#54f4fc] hover:bg-[#54f4fc]/10 text-[#54f4fc] font-extrabold text-[17px] tracking-[0.05em] rounded-md transition-all hover:scale-105 active:scale-95"
            >
              TALK WITH US
            </Button>
          </div>
        </div>

        {/* Right: Graphic (Shield within brackets) */}
        <div className="relative w-[300px] h-[300px] lg:w-[580px] lg:h-[580px] shrink-0">
          {/* Brackets - Corner accents from Figma */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-[4px] border-l-[4px] border-[#54f4fc] rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-[4px] border-r-[4px] border-[#54f4fc] rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[4px] border-l-[4px] border-[#54f4fc] rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[4px] border-r-[4px] border-[#54f4fc] rounded-br-sm" />

          {/* Shield Graphic Container */}
          <div className="absolute inset-8 flex items-center justify-center">
            {/* Background SVG Grid Pattern to replace missing image */}
            <div className="absolute inset-0 opacity-20 overflow-hidden rounded-2xl">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#54f4fc" strokeWidth="1"/>
                   </pattern>
                 </defs>
                 <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            </div>

            {/* Radiant Glow */}
            <div className="absolute w-[80%] h-[80%] bg-[#54f4fc]/20 blur-[100px] rounded-full animate-pulse" />
            
            {/* The Main Shield Icon Overlay */}
            <div className="relative z-20 w-[60%] h-[75%] filter drop-shadow-[0_0_40px_rgba(84,244,252,0.5)] transform-gpu hover:scale-105 transition-transform duration-500">
               {/* Custom Shield Shape with Gradient */}
               <div className="w-full h-full bg-gradient-to-br from-[#54f4fc] via-[#2fa2d0] to-[#1a6fb5] rounded-[15%] clip-path-shield flex flex-col items-center justify-center p-8 border border-white/20">
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Keyhole/Lock icon from Figma */}
                    <div className="w-[45%] h-[45%] bg-black/90 rounded-full flex items-center justify-center shadow-inner">
                       <div className="w-[40%] h-[40%] bg-[#54f4fc] rounded-t-full relative">
                          <div className="absolute top-[100%] left-[10%] right-[10%] h-[120%] bg-[#54f4fc] rounded-b-md" />
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 right-0 h-px bg-[#54f4fc] opacity-50 shadow-[0_0_10px_#54f4fc] animate-scan z-30 pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* CSS for custom shield and scan animation - ideally this would be in a global css but adding here for isolation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-shield {
          clip-path: polygon(0% 15%, 50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%);
        }
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}} />
    </section>
  );
};
