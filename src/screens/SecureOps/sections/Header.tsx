const navLinks = [
  { label: "Pricing", hasDropdown: false },
  { label: "Features", hasDropdown: true },
  { label: "Support", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Partners", hasDropdown: false },
];

export const Header = (): JSX.Element => {
  return (
    <nav className="sticky top-0 w-full px-6 lg:px-[104px] py-6 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#54f4fc] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
             <div className="w-5 h-5 border-2 border-black rounded-sm" />
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-black text-[#54f4fc] text-[28px] tracking-[-0.03em] leading-none">
            SecureOps
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white/70 text-[15px] tracking-[0.05em] leading-none whitespace-nowrap group-hover:text-[#54f4fc] transition-colors">
                {link.label.toUpperCase()}
              </span>
              {link.hasDropdown && (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-white/40 group-hover:stroke-[#54f4fc]"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Sign Up CTA */}
        <div className="flex items-center">
          <button className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#54f4fc] text-base tracking-[0.08em] leading-none whitespace-nowrap cursor-pointer hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-[#54f4fc]">
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};
