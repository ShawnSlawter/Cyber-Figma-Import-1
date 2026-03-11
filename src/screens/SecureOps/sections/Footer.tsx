import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export const Footer = (): JSX.Element => {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        "Application Services",
        "Security Servers",
        "Security FireWalls",
        "Cloud Services",
        "Integrations",
      ],
    },
    {
      title: "Partners",
      links: ["Amazon", "Figma", "Twitter", "CloudRail-IIOT"],
    },
    {
      title: "Resources",
      links: [
        "Academy",
        "Blog",
        "Themes",
        "Hosting",
        "Developers",
        "Support",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "FAQs", "Teams", "Contact Us"],
    },
  ];

  return (
    <footer className="relative w-full bg-[#020609] pt-32 pb-16 px-6 lg:px-[104px] overflow-hidden">
      {/* Subtle ambient glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#54f4fc]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto flex flex-col gap-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col gap-10">
              <h4 className="[font-family:'Montserrat',Helvetica] font-black text-white text-xl tracking-tight uppercase border-b border-[#54f4fc]/20 pb-4 inline-block">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-6">
                {column.links.map((link) => (
                  <li
                    key={link}
                    className="[font-family:'Lato',Helvetica] font-medium text-[#B0BCC3] text-lg hover:text-[#54f4fc] cursor-pointer transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start">
             <div className="[font-family:'Montserrat',Helvetica] font-black text-[#54f4fc] text-2xl tracking-tighter">
                SecureOps
             </div>
             <p className="[font-family:'Lato',Helvetica] font-medium text-[#B0BCC3]/50 text-sm">
                © 2024 SecureOps. All Rights Reserved. Built for the future of digital defense.
             </p>
          </div>
          
          <div className="flex items-center gap-6">
             {[
               { icon: Facebook, href: "#" },
               { icon: Twitter, href: "#" },
               { icon: Instagram, href: "#" },
               { icon: Linkedin, href: "#" },
             ].map((social, i) => (
               <a
                key={i}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-[#54f4fc] hover:border-[#54f4fc]/40 hover:bg-[#54f4fc]/5 transition-all duration-300"
               >
                  <social.icon className="w-5 h-5" />
               </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
