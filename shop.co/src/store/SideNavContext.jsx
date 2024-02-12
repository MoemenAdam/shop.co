import { createContext } from "react";

export const SideNavContext = createContext(
  {
    sideNavHidden: true,
    setSideNavHidden: ()=>{}
  }
);
