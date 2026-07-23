import Link from "next/link";
import { ButtonProps } from "./types";
import { variants } from "./constants";

export default function Button({
  children,
  variant = "primary",
  href,
  leftIcon,
  rightIcon,
  target,
  rel,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-xl

    px-6
    py-3

    font-medium

    transition-all
    duration-300

    hover:-translate-y-1

    focus:outline-none
    focus:ring-2
    focus:ring-pink-500

    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link target={target} href={href} className={classes} rel={rel}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
