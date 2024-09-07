import { useState } from "react";
import MessagesList from "./MessagesList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { messageService } from "../../services/Message.service";

const Messenger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMessenger = () => {
    setIsOpen(!isOpen);
  };

  const [text, setText] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create message"],
    mutationFn: () => messageService.sendMessage(text),
    onSuccess() {
      setText("");
      queryClient.refetchQueries({ queryKey: ["message list"] });
    },
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      mutate();
    }
  };

  return (
    <>
      <div className="flex flex-col fixed bottom-[30px] right-[30px] z-10">
        <div
          className={`flex flex-col justify-between mb-[15px] w-[378px] h-[527px] bg-gray-100 rounded-lg shadow ${
            isOpen
              ? "max-h-screen max-w-screen"
              : "max-h-0 max-w-0 overflow-hidden"
          }`}
        >
          <div className=" flex justify-between bg-white rounded-tl-lg px-[30px] py-[15px]">
            <div className="flex items-center gap-[15px]">
              <img src="/src/assets/images/avatar.svg" alt="avatar" />
              <div className="flex flex-col">
                <h2 className="text-slate-800 text-base font-semibold leading-normal">
                  Mike Capello
                </h2>
                <p className="text-slate-800 opacity-50 text-[10px] font-medium relative top-[-3px]">
                  Giveaway Support
                </p>
              </div>
            </div>
            <button onClick={toggleMessenger} className="">
              <img src="/src/assets/images/cross.svg" alt="exit" />
            </button>
          </div>
          <MessagesList />
          <div className="flex items-center gap-[6px] bg-white rounded-bl-lg px-[30px] py-[15px]">
            <label htmlFor="" className="w-[270px]">
              <input
                type="text"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                value={text}
                onKeyPress={handleKeyPress}
                className=" outline-none w-full border border-gray-100 rounded-[56px] bg-gray-50 px-[20px] py-[10px] text-slate-800 opacity-50 text-[14px] font-medium leading-[24px]"
                placeholder="Enter your message..."
              />
            </label>
            <button
              disabled={isPending}
              onClick={() => mutate()}
              className="bg-amber-500 rounded-[50px] px-[15px] py-[15px] "
            >
              <img className="" src="/src/assets/images/send.svg" alt="send" />
            </button>
          </div>
        </div>
        <button
          className="transition duration-200 self-end"
          onClick={toggleMessenger}
        >
          <img className="" src="/src/assets/images/chat.svg" alt="chat" />
        </button>
      </div>
    </>
  );
};

export default Messenger;
