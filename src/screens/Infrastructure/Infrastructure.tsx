import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Standards", href: "#standards" },
  { label: "Process", href: "#process" },
];

const trustedSectors = [
  "Finance",
  "SaaS",
  "Healthcare",
  "E-commerce",
  "Infrastructure",
];

const capabilities = [
  {
    title: "Infrastructure Hardening",
    description: "Reduces lateral movement across cloud and on-premise systems",
  },
  {
    title: "Application Security Reviews",
    description: "Reduces exploitability in APIs, web applications, and internal tools",
  },
  {
    title: "Monitoring & Detection",
    description: "Reduces dwell time through continuous threat detection",
  },
  {
    title: "Access & Identity Controls",
    description: "Reduces credential abuse through zero-trust access policies",
  },
  {
    title: "Data Pipeline Security",
    description: "Reduces exposure risk in data processing and storage systems",
  },
  {
    title: "Incident Response Planning",
    description: "Reduces impact severity through documented response procedures",
  },
];

const certifications = [
  "ISO 27001",
  "SOC 2 Type II",
];

const frameworks = [
  "NIST Cybersecurity Framework",
  "OWASP Top 10",
  "CIS Controls",
];

const processSteps = [
  {
    title: "Architecture Walkthrough",
    description: "Review current infrastructure, access patterns, and data flows",
  },
  {
    title: "Threat Modeling",
    description: "Identify attack vectors specific to your environment",
  },
  {
    title: "Technical Report",
    description: "Documented findings with remediation priorities and timelines",
  },
];

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Infrastructure Security",
      "Application Security",
      "Cloud Security",
      "DevOps Security",
    ],
  },
  {
    title: "Resources",
    links: [
      "Security Documentation",
      "Compliance Guides",
      "Technical Blog",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Contact",
    ],
  },
];

export const Infrastructure = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1440px] relative flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full px-10 py-4 border-b border-neutral-700">
        <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#54f4fc] text-[32px] tracking-[0] leading-[44.8px]">
          SecureOps
        </div>

        <div className="inline-flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap hover:text-[#54f4fc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="[font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-lg tracking-[0.90px] leading-[29.5px] whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          CONTACT
        </a>
      </nav>

      {/* Hero Section - Positioning */}
      <section className="relative w-full px-10 py-32">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col gap-8 max-w-[800px]">
            <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[78.4px]">
              Reducing Attack Surface Across Modern Infrastructure
            </h1>

            <p className="[font-family:'Lato',Helvetica] font-normal text-[#d7d7d7] text-2xl tracking-[0] leading-[39.4px]">
              Protecting cloud environments, APIs, internal tools, and data pipelines from unauthorized access and exploitation.
            </p>

            <p className="[font-family:'Lato',Helvetica] font-light text-white text-lg tracking-[0.36px] leading-[31.7px]">
              Trusted by teams operating in regulated and high-risk environments
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-10 w-px h-64 bg-[#424242]" />
        <div className="absolute top-32 right-11 w-10 h-px bg-[#424242]" />
      </section>

      {/* Trusted Sectors */}
      <section className="w-full px-10 py-20 border-t border-neutral-700">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <p className="[font-family:'Montserrat',Helvetica] font-light text-white text-lg text-center tracking-[0] leading-[25.2px]">
              Serving organizations across critical sectors
            </p>

            <div className="grid grid-cols-5 gap-8 w-full max-w-[900px]">
              {trustedSectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center justify-center px-6 py-8 border border-neutral-700 rounded-lg"
                >
                  <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[26.2px] text-center">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="w-full px-10 py-24">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col gap-16">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[56px]">
              Capabilities
            </h2>

            <div className="grid grid-cols-3 gap-12">
              {capabilities.map((capability) => (
                <Card
                  key={capability.title}
                  className="flex flex-col gap-6 p-8 rounded-2xl border border-neutral-700 bg-transparent hover:border-[#54f4fc]/30 transition-colors"
                >
                  <CardContent className="flex flex-col gap-4 p-0">
                    <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#54f4fc] text-xl tracking-[0] leading-[28px]">
                      {capability.title}
                    </h3>
                    <p className="[font-family:'Lato',Helvetica] font-light text-white text-base tracking-[0.32px] leading-[28.2px]">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section id="standards" className="w-full px-10 py-24 border-t border-neutral-700">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col gap-16">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[56px]">
              Standards & Certifications
            </h2>

            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#54f4fc] text-2xl tracking-[0] leading-[33.6px]">
                  Certifications
                </h3>
                <ul className="flex flex-col gap-4">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="[font-family:'Lato',Helvetica] font-normal text-white text-lg tracking-[0] leading-[31.7px]"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#54f4fc] text-2xl tracking-[0] leading-[33.6px]">
                  Frameworks
                </h3>
                <ul className="flex flex-col gap-4">
                  {frameworks.map((framework) => (
                    <li
                      key={framework}
                      className="[font-family:'Lato',Helvetica] font-normal text-white text-lg tracking-[0] leading-[31.7px]"
                    >
                      {framework}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="[font-family:'Lato',Helvetica] font-light text-[#d7d7d7] text-base tracking-[0.32px] leading-[28.2px]">
              Aligned with industry security frameworks. Auditable processes and documented controls.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full px-10 py-24 border-t border-neutral-700">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col gap-16">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[56px]">
              What Working Together Looks Like
            </h2>

            <div className="flex flex-col gap-12">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border-2 border-[#54f4fc] flex items-center justify-center">
                    <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                      {step.title}
                    </h3>
                    <p className="[font-family:'Lato',Helvetica] font-light text-[#d7d7d7] text-lg tracking-[0.36px] leading-[31.7px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="w-full px-10 py-24 border-t border-neutral-700">
        <div className="max-w-[1232px] mx-auto">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="flex flex-col gap-6 max-w-[700px]">
              <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[56px]">
                Request a Technical Walkthrough
              </h2>

              <p className="[font-family:'Lato',Helvetica] font-light text-[#d7d7d7] text-lg tracking-[0.36px] leading-[31.7px]">
                No sales pitch. No obligation. Review our security approach and assess fit for your environment.
              </p>
            </div>

            <Button className="px-[30px] py-[17px] h-auto bg-transparent hover:bg-transparent rounded-lg border-2 border-[#54f4fc] [font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] hover:text-white hover:border-white text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap transition-colors">
              SCHEDULE REVIEW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col gap-0 pt-16 pb-8 px-10 border-t border-neutral-700">
        <div className="max-w-[1232px] mx-auto w-full">
          <div className="grid grid-cols-3 gap-16 pb-10">
            {footerColumns.map((column) => (
              <nav key={column.title} className="flex flex-col gap-4">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#54f4fc] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <Separator className="bg-[#424242] h-px w-full mb-6" />

          <div className="flex items-center justify-between">
            <p className="[font-family:'Lato',Helvetica] font-light text-cold-grey30 text-sm tracking-[0] leading-[normal]">
              © 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
