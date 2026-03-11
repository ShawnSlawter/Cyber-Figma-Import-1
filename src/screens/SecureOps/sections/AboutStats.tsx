export const AboutStats = (): JSX.Element => {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "900+", label: "Satisfied customers" },
    { value: "99%", label: "Cybersecurity guarantee" },
  ];

  return (
    <section className="relative w-full max-w-[1300px] mx-auto py-32 px-6 lg:px-8">
      <div className="flex flex-col gap-24">
        {/* About Paragraph */}
        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[22px] lg:text-[32px] text-center leading-[1.5] tracking-tight max-w-[1100px] mx-auto">
          <span className="text-white/90">At </span>
          <span className="font-extrabold text-[#54f4fc] drop-shadow-[0_0_10px_rgba(84,244,252,0.2)]">SecureOps</span>
          <span className="text-white/90">
            , we’re dedicated to protecting businesses and individuals
            from the ever-evolving threats in the digital landscape. With years 
            of experience in the cybersecurity industry, we have
            honed our expertise to deliver innovative solutions that safeguard
            your digital assets and maintain your peace of mind.
          </span>
        </p>

        {/* Stats Banner */}
        <div className="relative w-full h-[220px] rounded-[50px] overflow-hidden group shadow-[0_20px_50px_rgba(26,111,181,0.2)] transition-transform hover:scale-[1.01] duration-500">
          {/* Enhanced Gradient Background */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#54f4fc_0%,#c6f0ff_35%,#b4f3ff_70%,#1a6fb5_100%)]" />
          
          {/* Dynamic Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Stats Content */}
          <div className="relative z-10 flex h-full items-center justify-around px-8 lg:px-20">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <span className="[font-family:'Montserrat',Helvetica] font-black text-black text-[56px] lg:text-[84px] leading-none tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="[font-family:'Lato',Helvetica] font-bold text-black/80 text-lg lg:text-[22px] tracking-tight whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
