import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  return (
    <>
      <div id="transactions" className="relative">
        <img
          className="absolute -z-10 top-[230px] right-0"
          src="/src/assets/images/transactionsBg.svg"
          alt="line"
        />
        <div className="max-w-[1170px] w-100 m-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-800 text-4xl font-semibold flex justify-center">
              Transactions for Address
            </h1>
            <p className="flex gap-[5px] items-center text-amber-500 text-lg font-medium leading-[22px] justify-center pb-[50px]">
              bc1q3kl8wc4nunp67ayptmu0e5fhw0cg2rcc9m8znr{" "}
              <img
                className="w-[18px] h-[18px]"
                src="/src/assets/images/checkIcon.svg"
                alt="check"
              />
            </p>
          </div>
          <div className="">
            <div className="flex flex-col gap-3 mb-20">
              <TransactionsTable />
              <TransactionsTable />
              <TransactionsTable />
              <TransactionsTable />
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
