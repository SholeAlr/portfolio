import { IconType } from "react-icons";

export interface IconButtonProps {
  icon: IconType;
  href: string;
  ariaLabel: string;
  size?: number;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
}
