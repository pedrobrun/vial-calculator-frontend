import clsx from "clsx";
import { ReactElement } from "react";

const styles = {
  number: "bg-[#313131] text-white active:bg-numbers-[#6d6d6d] justify-center",
  operator: "bg-[#f69906] text-white font-bold justify-center active:bg-[#ffdf4c]",
  clear: "bg-[#9f9f9f] justify-center active:bg-[#e5e5e5]",
};

export function Button({
  type,
  children,
  className
}: {
  type: 'number' | 'operator' | 'clear',
  children: ReactElement | string | number,
  className?: string
}) {

  return (
    <button
      type="button"
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
