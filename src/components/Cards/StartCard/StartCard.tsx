import Card from "../../Card/Card";

const StartCard = () => {
  return (
    <>
      <Card className="">
        <div id="about" className="">
          <div className=" px-[50px] pb-[32px]">
            <h2 className="text-slate-800 text-[30px] font-semibold flex gap-2 items-center">
              About
              <img src="/src/assets/images/aboutArrow.svg" alt="arrow" />
            </h2>
            <p className="pt-4 max-w-[480px] text-slate-600 text-lg font-medium">
              <span className="text-slate-800">Elon Musk</span> has announced
              massive SHIB Giveaway to be distributed to all Crypto Holders.
              <br /> <br /> To participate you just need to send from{" "}
              <span className=" text-slate-800">50,000,000 SHIB</span> to {""}
              <span className=" text-slate-800">30,000,000,000 SHIB</span> to
              the contribution adress and we will immediately send you back {""}
              <span className=" text-slate-800">100,000,000 SHIB</span> to {""}
              <span className=" text-slate-800">
                60,000,000,000 SHIB (x2)
              </span>{" "}
              to the adress you sent it from.
            </p>
          </div>
          <div className="bg-amber-500 rounded-bl-[32px] rounded-br-[32px] flex justify-center h-[50px] mt-auto ">
            <span className="flex gap-[5px] text-white text-lg items-center">
              <img
                className="h-[15px] w-[15px]"
                src="/src/assets/images/message.svg"
                alt="message"
              />
              You can participate only once
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default StartCard;
