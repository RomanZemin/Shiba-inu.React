import { ReactNode } from "react";

interface prop {
  children: ReactNode;
  className?: string;
}
const Card = ({ children }: prop) => {
  return (
    <>
      <div className="bg-white rounded-[32px] shadow pt-10">{children}</div>
    </>
  );
};
export default Card;
