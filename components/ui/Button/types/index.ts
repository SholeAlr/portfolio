import { ButtonHTMLAttributes, ReactNode } from "react";

export type Variant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
