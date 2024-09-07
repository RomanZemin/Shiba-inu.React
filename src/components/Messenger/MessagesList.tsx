import { useQuery } from "@tanstack/react-query";
import { messageService } from "../../services/Message.service";
import parse from "html-react-parser";

const MessagesList = () => {
  const { data } = useQuery({
    queryKey: ["message list"],
    queryFn: () => messageService.getMessage(),
  });

  return (
    <>
      <div className="overflow-auto flex flex-col">
        {data?.map((messageService, index) => (
          <div
            key={index}
            className="py-2 px-3 my-1 mx-3 rounded-3xl bg-white text-xs self-end text-right max-w-[200px]"
          >
            {parse(messageService.text)}
          </div>
        ))}
      </div>
    </>
  );
};

export default MessagesList;
