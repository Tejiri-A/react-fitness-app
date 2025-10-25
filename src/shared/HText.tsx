import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-montserrat font-bold text-3xl basis-3/5">{children}</h1>
  );
};

export default HText;
