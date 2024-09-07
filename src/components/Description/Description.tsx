const Description = () => {
  return (
    <>
      <div className="bg-amber-500 my-[75px]">
        <div className="max-w-[1170px] w-100 m-auto">
          <div className=" flex gap-[25px] py-[30px]">
            <div className="flex gap-[15px] items-center">
              <img
                className=""
                src="/src/assets/images/qrIcon.svg"
                alt="icon"
              />{" "}
              <p className="text-white text-sm max-w-[180px]">
                To make a transaction, you can use any wallet or exchange to
                participate!
              </p>
            </div>
            <div className="flex gap-[15px] items-center">
              <img
                className=""
                src="/src/assets/images/watchIcon.svg"
                alt="icon"
              />{" "}
              <p className="text-white text-sm max-w-[230px] ">
                Once we receive your transaction, the outgoing transaction is
                processed to your address.
              </p>
            </div>
            <div className="flex gap-[15px] items-center">
              <img
                className=""
                src="/src/assets/images/shibaIcon.svg"
                alt="icon"
              />{" "}
              <p className="text-white text-sm max-w-[230px] ">
                Once we receive your transaction, we will immediately send the
                requested amount back to you.
              </p>
            </div>
            <div className="flex gap-[15px] items-center">
              <img
                className=""
                src="/src/assets/images/shieldIcon.svg"
                alt="icon"
              />{" "}
              <p className="text-white text-sm max-w-[230px]">
                Every address that is sent too late, gets their SHIB immediately
                sent back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
