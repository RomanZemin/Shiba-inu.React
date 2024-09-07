import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-2xl shadow">
      <button
        className="transition duration-200 w-full text-left px-[54px]"
        onClick={toggleAccordion}
      >
        <div
          className={`flex justify-between items-center py-[30px] transition-all ${
            isOpen ? "border-b border-gray-100 pb-[22px]" : ""
          }`}
        >
          <span className="text-slate-800 text-[20px] leading-[20px] font-semibold">
            {title}
          </span>
          <img
            className={`transition duration-200 ease-in-out ${
              isOpen ? "transform rotate-180" : ""
            }`}
            src="/src/assets/images/accordionArrow.svg"
            alt="Arrow"
          />
        </div>
      </button>
      <div
        className={`transition-max-height duration-200 ease-in-out text-left ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-[54px] pb-[30px] pt-[18px] text-slate-600 text-[15px] font-medium leading-snug">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
