import { TransactionsData } from "../helpers/TansactionsData";

const TransactionsTable = () => {
  return (
    <>
      <div className="">
        {TransactionsData.map((el, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow flex flex-col px-[65px]"
            >
              <div className="grid grid-rows-2">
                <div className="grid grid-cols-8 gap-10 border-b border-gray-100 py-[25px]">
                  <p
                    title={el.TxHashIn}
                    className=" text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[105px] text-ellipsis overflow-hidden"
                  >
                    {el.TxHashIn}
                  </p>
                  <p
                    title={el.BlockIn}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium"
                  >
                    {el.BlockIn}
                  </p>
                  <p
                    title={el.FromIn}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[85px] text-ellipsis overflow-hidden"
                  >
                    {el.FromIn}
                  </p>
                  <p className="text-center text-slate-600 text-[18px] leading-[normal] font-medium relative">
                    IN
                    <img
                      className="w-8 h-8 transform translate-x-[-50%] absolute left-1/2 top-[36px]"
                      src="/src/assets/images/checkTransactionIcon.svg"
                      alt="check"
                    />
                  </p>
                  <p
                    title={el.ToIn}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[90px] text-ellipsis overflow-hidden"
                  >
                    {el.ToIn}
                  </p>
                  <p
                    title={String(el.AgeIn)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium"
                  >
                    {el.AgeIn} min
                  </p>
                  <p
                    title={String(el.ValueIn)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium text-nowrap"
                  >
                    {el.ValueIn} ETH
                  </p>
                  <p
                    title={String(el.TxFreeIn)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[75px]  text-ellipsis overflow-hidden"
                  >
                    {el.TxFreeIn}
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-10 py-[25px]">
                  <p
                    title={el.TxHashOut}
                    className=" text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[105px] text-ellipsis overflow-hidden"
                  >
                    {el.TxHashOut}
                  </p>
                  <p
                    title={el.BlockOut}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium"
                  >
                    {el.BlockOut}
                  </p>
                  <p
                    title={el.FromOut}
                    className="text-center text-slate-600 text-[18px] leading-[normal]font-medium max-w-[85px] text-ellipsis overflow-hidden"
                  >
                    {el.FromOut}
                  </p>
                  <p className="text-center text-slate-600 text-[18px] leading-[normal] font-medium">
                    OUT
                  </p>
                  <p
                    title={el.ToOut}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[90px] text-ellipsis overflow-hidden"
                  >
                    {el.ToOut}
                  </p>
                  <p
                    title={String(el.AgeOut)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium text-nowrap"
                  >
                    {el.AgeOut} min
                  </p>
                  <p
                    title={String(el.ValueOut)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium text-nowrap"
                  >
                    {el.ValueOut} ETH
                  </p>
                  <p
                    title={String(el.TxFreeOut)}
                    className="text-center text-slate-600 text-[18px] leading-[normal] font-medium max-w-[75px] text-ellipsis overflow-hidden"
                  >
                    {el.TxFreeOut}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TransactionsTable;
