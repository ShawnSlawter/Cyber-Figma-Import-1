import { Card, CardContent } from "../../../components/ui/card";
import { ShieldAlert, Network, Lock, FileSearch, UserCheck, CloudIcon } from "lucide-react";

export const Services = (): JSX.Element => {
  const services = [
    {
      icon: ShieldAlert,
      title: "Endpoint Security Solutions",
      description:
        "Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.",
    },
    {
      icon: Network,
      title: "Network Security Solutions",
      description:
        "Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.",
    },
    {
      icon: Lock,
      title: "Data Encryption Services",
      description:
        "Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.",
    },
    {
      icon: FileSearch,
      title: "Incident Response and Forensics",
      description:
        "Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.",
    },
    {
      icon: UserCheck,
      title: "Security Awareness Training",
      description:
        "Empower your employees with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.",
    },
    {
      icon: CloudIcon,
      title: "Cloud Security Solutions",
      description:
        "Secure your cloud-based applications and data storage with our cloud security solutions. Ensure confidentiality, integrity, and availability in the cloud environment with advanced security measures tailored to your specific needs",
    },
  ];

  return (
    <section className="w-full py-32 bg-black/40 flex flex-col items-center gap-20 px-4 lg:px-8">
      <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[44px] lg:text-[54px] text-center tracking-tight leading-none">
        Services <span className="text-[#54f4fc]">we offer</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 w-full max-w-[1300px]">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col items-center p-10 lg:p-14 rounded-[40px] border-none bg-[#050B10]/60 backdrop-blur-xl relative group transition-all duration-500 hover:-translate-y-2
              before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-[40px]
              before:[background:linear-gradient(114deg,rgba(85,244,252,0.3)_0%,rgba(24,110,180,0.1)_100%)]
              before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
              before:z-0
              hover:before:[background:linear-gradient(114deg,rgba(85,244,252,1)_0%,rgba(24,110,180,1)_100%)]
              hover:shadow-[0_0_50px_rgba(84,244,252,0.15)]"
          >
            <CardContent className="flex flex-col items-center gap-10 p-0 w-full relative z-10">
              <div className="w-28 h-28 flex items-center justify-center p-6 bg-[#54f4fc]/5 rounded-[30px] border border-[#54f4fc]/10 group-hover:border-[#54f4fc]/40 transition-all group-hover:scale-110 duration-500">
                <service.icon
                  className="w-full h-full text-[#54f4fc] drop-shadow-[0_0_10px_rgba(84,244,252,0.5)]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col items-center gap-6">
                <h3 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[26px] lg:text-[32px] text-center leading-tight tracking-tight text-white group-hover:text-[#54f4fc] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="[font-family:'Lato',Helvetica] font-normal text-[#B0BCC3] text-lg lg:text-[20px] text-center leading-[1.6] max-w-[500px]">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
