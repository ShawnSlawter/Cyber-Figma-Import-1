import { Card, CardContent } from "../../../../components/ui/card";

// Stats data
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "900+", label: "Satisfied customers" },
  { value: "99%", label: "Cybersecurity guarantee" },
];

// Services data
const services = [
  {
    icon: "/frame.svg",
    title: "Endpoint Security Solutions",
    description:
      "Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.",
  },
  {
    icon: "/frame-2.svg",
    title: "Network Security Solutions",
    description:
      "Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.",
  },
  {
    icon: "/frame-4.svg",
    title: "Data Encryption Services",
    description:
      "Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.",
  },
  {
    icon: "/frame-3.svg",
    title: "Incident Response and Forensics",
    description:
      "Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.",
  },
  {
    icon: "/frame-6.svg",
    title: "Security Awareness Training",
    description:
      "Empower your employees with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.",
  },
  {
    icon: "/frame.svg",
    title: "Cloud Security Solutions",
    description:
      "Secure your cloud-based applications and data storage with our cloud security solutions. Ensure confidentiality, integrity, and availability in the cloud environment with advanced security measures tailored to your specific needs",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[104px] w-full py-8">
      {/* Company logos section */}
      <div className="flex flex-col items-center w-full">
        <p className="w-full max-w-[1185px] [font-family:'Montserrat',Helvetica] font-light text-white text-lg text-center tracking-[0] leading-[25.2px]">
          We are providing cybersecurity services to some of the World&apos;s
          leading companies
        </p>
        <img
          className="flex-shrink-0 mb-[-46px]"
          alt="Frame"
          src="/frame-271.svg"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-start gap-[104px] w-full max-w-[1232px]">
        {/* About + Stats */}
        <div className="flex flex-col items-end gap-12 w-full">
          {/* About paragraph */}
          <p className="w-full [font-family:'Montserrat',Helvetica] font-normal text-transparent text-2xl text-center tracking-[0] leading-[39.4px]">
            <span className="text-white">At </span>
            <span className="font-bold text-[#54f4fc]">Ironvelo</span>
            <span className="text-white">
              , we&#39;re dedicated to protecting businesses and individuals
              from the ever-evolving threats in the digital landscape. With [X
              years/months] of experience in the cybersecurity industry, we have
              honed our expertise to deliver innovative solutions that safeguard
              your digital assets and maintain your peace of mind.
            </span>
          </p>

          {/* Stats banner */}
          <div className="relative w-full h-[200px]">
            {/* Gradient background */}
            <div className="absolute top-0 left-0 w-full h-[201px] rounded-[40px] bg-[linear-gradient(90deg,rgba(84,244,252,1)_0%,rgba(198,240,255,1)_37%,rgba(180,243,255,0.9)_75%,rgba(23,109,180,1)_100%)]" />
            {/* Stats content */}
            <div className="relative z-10 flex items-center justify-center gap-[114px] h-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="[font-family:'Montserrat',Helvetica] font-normal text-black text-7xl text-center tracking-[3.60px] leading-[118.1px]"
                >
                  <span className="font-bold tracking-[2.59px]">
                    {stat.value}
                    <br />
                  </span>
                  <span className="[font-family:'Lato',Helvetica] text-2xl tracking-[0.29px] leading-[39.4px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services section */}
        <div className="flex flex-col items-center gap-12 w-full">
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
            Services we offer
          </h2>

          {/* Services grid */}
          <div className="grid grid-cols-2 gap-[72px] w-full">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col items-center gap-4 px-[72px] py-12 rounded-2xl border-none bg-transparent relative
                  before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl
                  before:[background:linear-gradient(114deg,rgba(85,244,252,1)_0%,rgba(24,110,180,1)_100%)]
                  before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                  before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
                  before:z-[1] before:pointer-events-none"
              >
                <CardContent className="flex flex-col items-center gap-4 p-0 w-full">
                  <img
                    className="w-[94px] h-[94px]"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="bg-[linear-gradient(129deg,rgba(85,244,252,1)_0%,rgba(26,111,181,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-2xl text-center tracking-[0] leading-[33.6px] whitespace-nowrap">
                      {service.title}
                    </h3>
                    <p className="w-[449px] [font-family:'Lato',Helvetica] font-light text-white text-lg text-center tracking-[0.36px] leading-[31.7px]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
