declare module "react-anchor-link-smooth-scroll" {
  import { ComponentType, ReactNode } from "react";

  interface Props {
    href: string;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
  }
  const AnchorLink: ComponentType<Props>;
  export default AnchorLink;
}
