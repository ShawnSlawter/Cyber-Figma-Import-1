import { Button } from "../../../components/ui/button";

export const CTA = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden group">
      {/* Premium Gradient Background with animated shift */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a6fb5_0%,#2fa2d0_40%,#54f4fc_100%)] opacity-95 group-hover:scale-105 transition-transform duration-[10s] ease-linear" />
      
      {/* Overlay decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-[0.05] rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-[104px] py-28 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        <h2 className="[font-family:'Montserrat',Helvetica] font-black text-white text-[48px] lg:text-[68px] leading-[1.1] tracking-[-0.03em] lg:w-[55%] text-left">
          Ready to <span className="text-black/20">Secure</span> Your Digital Future?
        </h2>
        
        <div className="flex flex-col gap-12 lg:w-[45%] items-start">
          <p className="[font-family:'Lato',Helvetica] font-medium text-white/90 text-2xl lg:text-3xl leading-snug">
            Having difficulties choosing the right solution for your business? Let our experts guide you.
          </p>
          
          <div className="flex flex-wrap gap-6 w-full">
            <Button className="w-full sm:w-auto h-[70px] px-12 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 font-black text-lg tracking-[0.05em] rounded-xl shadow-2xl">
              BOOK AN APPOINTMENT
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-[70px] px-12 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-black text-lg tracking-[0.05em] rounded-xl"
            >
              TALK WITH US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
