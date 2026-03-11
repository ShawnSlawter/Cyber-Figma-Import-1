import { useState } from "react";

// Pagination dot data
const dots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

export const ServicesOfferedSection = (): JSX.Element => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="flex flex-col items-center gap-14 w-full py-4">
      {/* Header and testimonial quote */}
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px] max-w-[756px]">
          Customer Testimonials
        </h2>

        <img
          className="w-full max-w-[1187px] h-auto"
          alt="By working with"
          src="/-by-working-with-ironvelo--we-processed-more-payments--increased.svg"
        />
      </div>

      {/* Avatar */}
      <img
        className="w-40 h-40 rounded-[120px] object-cover"
        alt="Avatar"
        src="/avatar-1.png"
      />

      {/* Name and title */}
      <div className="flex flex-col items-center gap-6">
        <p className="[font-family:'Lato',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[44.8px]">
          Alberto Flores
        </p>

        <p className="[font-family:'Lato',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[33.6px]">
          IT Director
        </p>
      </div>

      {/* Pagination dots */}
      <div className="flex items-start gap-10">
        {dots.map((dot, index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`w-6 h-6 rounded-xl border-0 p-0 cursor-pointer transition-colors ${
              activeDot === index ? "bg-[#54f4fc]" : "bg-[#54f4fc4c]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
