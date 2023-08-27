import { useEffect, useRef, useState } from "react";

export function Header({ value }: { value: string }) {
  const [scale, setScale] = useState(1);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parent = spanRef.current?.parentNode as HTMLElement;
    const availableWidth = parent?.offsetWidth;
    const actualWidth = spanRef.current?.offsetWidth;
    const actualScale = availableWidth / (actualWidth || 0);
    if (scale !== actualScale) {
      if (actualScale < 1) {
        setScale(actualScale);
      }
      if (scale < 1) {
        setScale(1);
      }
    }
  }, [value, scale]);

  return (
    <div className="w-72 flex justify-end items-end pb-4 pr-5 relative">
      <strong
        className="text-white text-7xl font-light relative -right-3 origin-right"
        ref={spanRef}
        style={{ transform: `scale(${scale},${scale})` }}
      >
        {value}
      </strong>
    </div>
  );
}

export default Header;
