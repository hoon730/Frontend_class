import React, { ReactNode } from "react";
import Searchbar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>임시서치바</div>
      {children}
    </div>
  );
};

export default Layout;
