import React, { ReactElement } from "react";
import Navbar from "../navbar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="bg-black text-white relative space-y-12">
      <Navbar />
      <div className="relative top-0">{children}</div>
    </div>
  );
};

export default Layout;
