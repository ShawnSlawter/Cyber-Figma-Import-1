const navLinks = [
  { label: "Pricing", hasDropdown: false },
  { label: "Features", hasDropdown: true },
  { label: "Support", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Partners", hasDropdown: false },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between w-full px-10 py-4">
      {/* Brand Logo */}
      <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#54f4fc] text-[32px] tracking-[0] leading-[44.8px] w-[133px]">
        Iron
      </div>

      {/* Navigation Links */}
      <div className="inline-flex items-center gap-12">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.label}
              className="inline-flex items-center justify-center gap-2"
            >
              <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap cursor-pointer">
                {link.label}
              </span>
              <img
                className="w-[18px] h-[18px]"
                alt="Frame"
                src="/frame-5.svg"
              />
            </div>
          ) : (
            <span
              key={link.label}
              className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </span>
          ),
        )}
      </div>

      {/* Sign Up CTA */}
      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[17px]">
        <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-lg tracking-[0.90px] leading-[29.5px] whitespace-nowrap cursor-pointer">
          SIGN UP
        </span>
      </div>
    </nav>
  );
};
