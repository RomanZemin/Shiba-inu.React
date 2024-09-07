import Accordion from "../Accordion/Accordion";
import { FaqData } from "../helpers/FaqData";

const Accordions = () => {
  return (
    <>
      <div className="flex flex-col gap-[25px]">
        {FaqData.map((el, index) => {
          return (
            <Accordion key={index} title={el.question} children={el.answer} />
          );
        })}
      </div>
    </>
  );
};

export default Accordions;
