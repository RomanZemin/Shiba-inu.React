import Accordions from "../Accordions/Accordions";

const Faq = () => {
  return (
    <>
      <div className="mb-[75px] relative">
        <img
          className="absolute top-20 left-0 -z-10"
          src="/src/assets/images/faqBd.svg"
          alt="line"
        />
        <div className="max-w-[1170px] w-100 m-auto">
          <div className="flex flex-col gap-[50px]">
            <h1 className="text-gray-800 text-4xl font-semibold flex justify-center">
              FAQ
            </h1>
            <Accordions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
