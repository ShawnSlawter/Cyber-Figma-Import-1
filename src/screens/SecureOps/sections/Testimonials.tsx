export const Testimonials = (): JSX.Element => {
  return (
    <section className="relative w-full py-40 flex flex-col items-center gap-24 px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#54f4fc]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center max-w-[1200px] w-full gap-20 relative z-10">
        <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#54f4fc]/40 text-[18px] lg:text-[22px] tracking-[0.3em] uppercase">
          CUSTOMER TESTIMONIALS
        </h2>

        <div className="relative">
          <span className="absolute -top-16 -left-12 text-[180px] text-[#54f4fc]/5 font-serif leading-none italic pointer-events-none">“</span>
          <blockquote className="[font-family:'Montserrat',Helvetica] font-medium text-white text-[28px] lg:text-[46px] text-center leading-[1.3] tracking-tight italic">
            By working with <span className="text-[#54f4fc] font-bold drop-shadow-[0_0_10px_#54f4fc44]">SecureOps</span>, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.
          </blockquote>
          <span className="absolute -bottom-24 -right-12 text-[180px] text-[#54f4fc]/5 font-serif leading-none italic rotate-180 pointer-events-none">“</span>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative group">
            {/* Pulsing ring behind portrait */}
            <div className="absolute inset-0 rounded-full bg-[#54f4fc]/20 blur-xl animate-pulse group-hover:bg-[#54f4fc]/40 transition-colors" />
            
            <div className="relative w-[150px] h-[150px] rounded-full p-[3px] bg-gradient-to-tr from-[#54f4fc] to-[#1a6fb5]">
               <div className="w-full h-full rounded-full overflow-hidden bg-black p-1">
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop" 
                   alt="Alberto Flores"
                   className="w-full h-full object-cover rounded-full filter contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
            </div>
          </div>
          
          <div className="text-center">
             <h4 className="[font-family:'Montserrat',Helvetica] font-black text-white text-[32px] lg:text-[38px] tracking-tight">
               Alberto Flores
             </h4>
             <div className="flex items-center justify-center gap-3 mt-1">
                <div className="h-px w-8 bg-[#54f4fc]/40" />
                <p className="[font-family:'Lato',Helvetica] font-bold text-[#54f4fc] text-lg lg:text-xl tracking-[0.15em] uppercase">
                  IT Director
                </p>
                <div className="h-px w-8 bg-[#54f4fc]/40" />
             </div>
          </div>
        </div>

        {/* Carousel indicators with better styling */}
        <div className="flex items-center gap-5 mt-4">
           <div className="w-12 h-1.5 rounded-full bg-[#54f4fc] shadow-[0_0_15px_rgba(84,244,252,0.6)]" />
           {[...Array(4)].map((_, i) => (
             <div key={i} className="w-3 h-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 cursor-pointer transition-all hover:scale-125" />
           ))}
        </div>
      </div>
    </section>
  );
};
