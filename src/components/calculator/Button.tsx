import clsx from "clsx";
import { ReactElement } from "react";

const styles = {
  dark: "text-white justify-center bg-[#313131] active:bg-numbers-[#6d6d6d]",
  highlighted: "text-white justify-center font-bold bg-[#f69906] active:bg-[#ffdf4c]",
  light: "bg-[#9f9f9f] active:bg-[#e5e5e5] justify-center",
};

export function Button({
  onClick,
  type,
  children,
  className
}: {
  type: 'dark' | 'highlighted' | 'light',
  children: ReactElement | string | number,
  className?: string
  onClick: () => void
}) {

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center text-3xl rounded-full w-16 h-16 hover:opacity-70 transition-opacity duration-300",
        styles[type],
        className
      )}
    >
      {children}
    </button >
  );
}
