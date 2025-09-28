"use client";
import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

export const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`} data-active-tab={activeTab}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg p-0.5 bg-gray-300-dash ${className}`}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className = "" }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2.5 text-sm font-medium text-gray-100-dash transition-all disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? "bg-primary text-gray-900-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          : "hover:bg-primary hover:text-gray-900-dash hover:shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
      } ${className}`}
      onClick={() => setActiveTab(value)}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className = "" }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return (
    <div
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 ${className}`}
      data-state="active"
    >
      {children}
    </div>
  );
};
