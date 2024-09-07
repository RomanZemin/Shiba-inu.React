import Card from "../../Card/Card";
import { MaskedInput, getCurrencyMaskGenerator } from "react-hook-mask";
import { useState } from "react";

const maskGenerator = getCurrencyMaskGenerator({
  thousandSeparator: ",",
});

const CalcCard = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleFirstInputChange = (value: string) => {
    setFirstValue(value);
    setSecondValue(String(Number(value) * 2));
  };

  const handleSecondInputChange = (value: string) => {
    if (Number(value) % 2 != 0) {
      value = String(Number(value) + 1);
      setFirstValue(String(Number(value) / 2));
      setSecondValue(value);
    } else {
      setSecondValue(value);
      setFirstValue(String(Number(value) / 2));
    }
  };
  return (
    <>
      <Card className="">
        <div id="сalculator" className=" px-20">
          <h2 className="text-slate-800 text-2xl font-semibold flex gap-2 items-center justify-center">
            Calculate your prize here
            <img src="/src/assets/images/aboutArrow.svg" alt="arrow" />
          </h2>
          <label
            htmlFor="input1"
            className=" flex gap-2 items-center pb-[10px] border-b-[1px] border-gray-100 text-amber-500 text-lg font-bold mt-[30px]"
          >
            SHIB{" "}
            <MaskedInput
              value={firstValue}
              onChange={handleFirstInputChange}
              placeholder="100,000,000"
              maskGenerator={maskGenerator}
              className=" outline-none w-full text-slate-800 text-lg font-medium"
              id="input1"
              name="input1"
              maxLength={14}
            />
          </label>
          <div className="flex gap-5 items-center pt-2">
            <button
              onClick={() => handleFirstInputChange("100000000")}
              className="transition duration-200 py-[3px] px-[9px] bg-orange-50 rounded-[31px] text-amber-500 text-base font-semibold"
            >
              100 Mil
            </button>
            <button
              onClick={() => handleFirstInputChange("200000000")}
              className="transition duration-200 py-[3px] px-[9px] bg-orange-50 rounded-[31px] text-amber-500 text-base font-semibold"
            >
              200 Mil
            </button>
            <button
              onClick={() => handleFirstInputChange("500000000")}
              className="transition duration-200 py-[3px] px-[9px] bg-orange-50 rounded-[31px] text-amber-500 text-base font-semibold"
            >
              500 Mil
            </button>
            <button
              onClick={() => handleFirstInputChange("1000000000")}
              className="transition duration-200 py-[3px] px-[9px] bg-orange-50 rounded-[31px] text-amber-500 text-base font-semibold"
            >
              1 Bil
            </button>
            <button
              onClick={() => handleFirstInputChange("5000000000")}
              className="transition duration-200 py-[3px] px-[9px] bg-orange-50 rounded-[31px] text-amber-500 text-base font-semibold"
            >
              5 Bil
            </button>
          </div>
        </div>
        <div className="relative border border-gray-100 my-[40px]">
          <img
            className=" absolute top-[-24px] left-[261px]"
            src="/src/assets/images/calc.svg"
            alt="calculator"
          />
        </div>
        <div className="px-20 flex flex-col">
          <label
            htmlFor="input2"
            className=" flex gap-2 items-center pb-[10px] mb-[15px] border-b-[1px] border-gray-100 text-amber-500 text-lg font-bold"
          >
            SHIB{" "}
            <MaskedInput
              value={secondValue}
              onChange={handleSecondInputChange}
              maskGenerator={maskGenerator}
              placeholder="200,000,000"
              id="input2"
              name="input2"
              className=" outline-none w-full text-slate-800 text-lg font-medium "
              maxLength={16}
            />
          </label>
          <button className="transition duration-200 bg-amber-500 rounded-[95px] text-white text-lg font-semibold flex items-center gap-[5px] py-3 px-[100px] justify-center text-nowrap mb-10">
            Get {""}
            {secondValue} SHIB{" "}
            <img src="/src/assets/images/calcArrow.svg" alt="arrow" />
          </button>
        </div>
      </Card>
    </>
  );
};

export default CalcCard;
