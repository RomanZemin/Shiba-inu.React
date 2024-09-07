const Introduction = () => {
  return (
    <>
      <div className=" mt-[170px]">
        <div className="max-w-[1170px] w-100 m-auto">
          <div className="text-center flex-col flex">
            <h1 className="text-slate-800 text-5xl font-bold text-center max-w-[830px] m-auto leading-[68px]">
              The first big distribution of cryptocurrency from Elon Musk 🎉
            </h1>
            <p className="w-[600px] text-center text-slate-600 text-lg font-medium leading-[27px] m-auto pt-5">
              During this unique event we will give you a chance to win 100 000
              000 000 SHIB, have a look at the rules and don't miss on your
              chance!
            </p>
            <div className="flex gap-[15px] items-center m-auto pt-[30px]">
              <button className="transition duration-200 text-center text-white text-lg font-semibold px-[30px] py-3.5 bg-amber-500 rounded-[98px]">
                Participate the giveaway
              </button>
              <img src="/src/assets/images/introArrow.svg" alt="arrow" />
              <p className=" max-w-[200px]">
                Don't waste your chance, participate right now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
