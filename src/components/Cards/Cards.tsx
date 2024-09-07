import CalcCard from "./CalcCard/CalcCard";
import DonutCard from "./DonutCard/DonutCard";
import PaymentCard from "./PaymentCard/PaymentCard";
import StartCard from "./StartCard/StartCard";

const Cards = () => {
  return (
    <>
      <div className="max-w-[1170px] w-100 m-auto mt-20">
        <div className="grid grid-cols-6 grid-rows-2 gap-x-[30px] gap-y-20 ">
          <div className=" col-span-3">
            <StartCard />
          </div>
          <div className="col-span-3">
            <CalcCard />
          </div>
          <div className="col-span-4">
            <PaymentCard />
          </div>
          <div className="col-span-2">
            <DonutCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
