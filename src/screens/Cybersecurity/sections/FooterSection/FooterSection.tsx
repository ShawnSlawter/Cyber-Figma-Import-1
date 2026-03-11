import { Separator } from "../../../../components/ui/separator";
import { Link } from "react-router-dom";

// Footer column data
const footerColumns = [
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
    links: ["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "FAQs", "Teams", "Contact Us", "Infrastructure"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full flex flex-col gap-0 pt-2 pb-4">
      {/* Footer columns grid */}
      <div className="grid grid-cols-4 gap-8 pb-10">
        {footerColumns.map((column) => (
          <nav key={column.title} className="flex flex-col gap-4">
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link}>
                  {link === "Infrastructure" ? (
                    <Link
                      to="/infrastructure"
                      className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Divider */}
      <Separator className="bg-[#d9d9d9] h-px w-full" />

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-4">
        <p className="[font-family:'Lato',Helvetica] font-light text-cold-grey30 text-sm tracking-[0] leading-[normal]">
          © 2024 All Rights Reserved
        </p>
        <img className="w-36 h-6" alt="Frame" src="/frame-12.svg" />
      </div>
    </footer>
  );
};
