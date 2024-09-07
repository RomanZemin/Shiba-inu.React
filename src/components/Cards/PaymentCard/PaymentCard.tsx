import { useState } from "react";
import Card from "../../Card/Card";

const PaymentCard = () => {
  const [copiedId, setCopiedId] = useState("");

  return (
    <>
      <Card className="col-span-4">
        <div id="instruction" className=" px-[54px]">
          <div className="flex items-center justify-between gap-14 pb-[25px] border-b-[1px] border-gray-100">
            <div className=" w-[400px]">
              <h2 className="text-slate-800 text-[30px] font-semibold flex items-center gap-[5px]">
                Payment Address
                <img src="/src/assets/images/aboutArrow.svg" alt="arrow" />
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-[30px] pt-[5px] pb-[25px]">
                You can send SHIB to the following address:
              </p>
              <label
                htmlFor="address"
                className=" pb-[10px] border-b-[1px] border-gray-100 flex w-full mb-[25px]"
              >
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full text-gray-800 text-sm font-medium outline-none read-only"
                  value={"bc1q3kl8wc4nunp67ayptmu0e5fhw0cg2rcc9m8znr"}
                />
              </label>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    "bc1q3kl8wc4nunp67ayptmu0e5fhw0cg2rcc9m8znr"
                  );
                  setCopiedId("write-text");
                }}
                className="transition duration-200 ease-in-out px-5 py-2.5 bg-amber-500 rounded-[58px] text-white text-base font-bold flex items-center gap-2"
              >
                {copiedId === "write-text"
                  ? "Copied!"
                  : "Copy Address to Clipboard"}

                <img src="/src/assets/images/copy.svg" alt="copy" />
              </button>
            </div>
            <div className="">
              <img
                className="w-[205px] h-[205px]"
                src="/src/assets/images/qr.png"
                alt="qr"
              />
            </div>
          </div>
          <div className=" py-[25px] flex justify-center">
            <p className="text-amber-500 text-base font-bold items-center gap-[6px] flex">
              <img
                className="animate-spin-slow"
                src="/src/assets/images/load.svg"
                alt="load"
              />
              Waiting for payment
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PaymentCard;
