import { Shield, Globe, Cpu, Zap, Layers, Server } from "lucide-react";

export const Logos = (): JSX.Element => {
  const partners = [
    { name: "Nvidia", icon: Cpu },
    { name: "Microsoft", icon: Globe },
    { name: "Google Cloud", icon: Layers },
    { name: "IBM Security", icon: Shield },
    { name: "Cisco", icon: Zap },
    { name: "Cloudflare", icon: Server },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 bg-black/20">
      <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#54f4fc]/60 text-sm tracking-[0.3em] uppercase opacity-80">
        Trusted by World-Leading Enterprise Partners
      </p>
      
      <div className="w-full max-w-[1300px] flex flex-wrap items-center justify-around gap-12 px-8">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
            <partner.icon className="w-8 h-8 text-[#54f4fc]" strokeWidth={1.5} />
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-xl tracking-tight">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Decorative separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#54f4fc]/20 to-transparent max-w-[1000px]" />
    </section>
  );
};
