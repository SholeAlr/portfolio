import Link from "next/link";
import { IconButtonProps } from "./types";

export default function IconButton({
  icon: Icon,
  href,
  ariaLabel,
  size = 22,
  target,
  rel,
  className = "",
}: IconButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`
        group
        inline-flex
        h-12
        w-12
        items-center
        justify-center

        rounded-xl

        border
        border-zinc-800

        bg-zinc-900/40

        text-zinc-400

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-pink-500
        hover:text-pink-400
        hover:shadow-[0_0_20px_rgba(219,39,119,0.25)]

        ${className}
      `}
    >
      <Icon size={size} />
    </Link>
  );
}
