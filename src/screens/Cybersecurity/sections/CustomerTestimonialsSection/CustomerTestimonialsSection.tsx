import { Button } from "../../../../components/ui/button";

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(136deg,rgba(24,110,180,1)_16%,rgba(47,162,208,1)_57%,rgba(85,244,252,1)_100%)]">
      <div className="w-full py-20 px-8 flex items-center justify-center">
        <div className="flex items-center gap-[104px] max-w-[1034px] w-full">
          {/* Left: Heading */}
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[72px] w-[421px] shrink-0">
            How to choose <br />
            cybersecurity solution
          </h2>

          {/* Right: Description + Buttons */}
          <div className="flex flex-col items-start gap-[38px]">
            <p className="[font-family:'Lato',Helvetica] font-normal text-white text-[29px] tracking-[0] leading-[40.6px] w-[500px]">
              Having difficulties choosing the right solution for your business?
            </p>

            <div className="flex items-start gap-8">
              {/* Book an Appointment button */}
              <Button className="px-[30px] py-[17px] h-auto bg-[#54f4fc] hover:bg-[#3de0e8] rounded-lg [font-family:'Montserrat',Helvetica] font-bold text-black text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap">
                BOOK AN APPOINTMENT
              </Button>

              {/* Talk With Us button */}
              <Button
                variant="outline"
                className="px-[30px] py-[17px] h-auto bg-transparent hover:bg-transparent rounded-lg border border-solid border-[#54f4fc] [font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] hover:text-[#54f4fc] text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap"
              >
                TALK WITH US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
