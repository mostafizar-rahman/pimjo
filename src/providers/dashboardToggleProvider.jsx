'use client'
import { createContext, useState } from "react";

export const ToggleContext = createContext();
const DashboardToggleProvider = ({ children }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ isSidebarShow, setIsSidebarShow }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default DashboardToggleProvider;
