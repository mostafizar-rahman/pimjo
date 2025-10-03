"use client";
import { PiArrowDown } from "@/lib/icons";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const SelectContext = React.createContext();

export const Select = ({
  value,
  onValueChange,
  disabled = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [selectedLabel, setSelectedLabel] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val, label) => {
    setSelectedValue(val);
    setSelectedLabel(label);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(val);
    }
  };

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
      // Find the label for the initial value
      let initialLabel = "";
      React.Children.forEach(children, (child) => {
        if (child.type === SelectContent) {
          React.Children.forEach(child.props.children, (item) => {
            if (item.type === SelectItem && item.props.value === value) {
              initialLabel = item.props.children;
            }
          });
        }
      });
      setSelectedLabel(initialLabel || value);
    }
  }, [value, children]);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedValue,
        selectedLabel,
        handleSelect,
        disabled,
      }}
    >
      <div ref={selectRef} className="relative w-full">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children, className }) => {
  const { isOpen, setIsOpen, disabled } = React.useContext(SelectContext);
  return (
    <button
      type="button"
      onClick={() => !disabled && setIsOpen(!isOpen)}
      disabled={disabled}
      className={cn(
        `
        flex w-full items-center justify-between gap-1.5 text-primary dark:text-foreground text-sm tracking-[-0.2px] leading-sm disabled:cursor-not-allowed disabled:opacity-50
        hover:text-gray-200 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-lg
        transition-all
      `,
        isOpen ? "focus:outline-none focus:text-gray-200" : "",
        className
      )}
    >
      {children}
      <PiArrowDown
        className={cn(
          `h-4 w-4 transition-transform duration-500`,
          isOpen ? "rotate-180" : ""
        )}
      />
    </button>
  );
};

export const SelectValue = ({ placeholder = "Select an option..." }) => {
  const { selectedLabel, selectedValue } = React.useContext(SelectContext);
  const displayValue = selectedLabel || selectedValue;

  if (!displayValue) {
    return <span>{placeholder}</span>;
  }

  return <span className="flex gap-2">{displayValue}</span>;
};

export const SelectContent = ({ children }) => {
  const { isOpen } = React.useContext(SelectContext);
  return isOpen ? (
    <div className="absolute top-full left-0 z-50 w-full mt-1 animate-in fade-in-0 zoom-in-95 min-w-[200px]">
      <div className="relative rounded-md border border-border bg-background p-1 shadow-md">
        <div className="max-h-60 overflow-auto">{children}</div>
      </div>
    </div>
  ) : null;
};

export const SelectItem = ({ value, children, disabled = false }) => {
  const { selectedValue, handleSelect } = React.useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <div
      className={`
        relative flex gap-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm 
        outline-none transition-colors
        ${
          disabled
            ? "pointer-events-none opacity-50"
            : "hover:bg-slate-200 dark:hover:bg-slate-800 focus:bg-slate-200 dark:focus:bg-slate-800"
        }
        ${isSelected ? "bg-slate-200 dark:bg-slate-800" : ""}
      `}
      onClick={() => !disabled && handleSelect(value, children)}
    >
      {/* <PiCheck
        className={`mr-2 h-4 w-4 transition-opacity ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      /> */}
      {children}
    </div>
  );
};

export const SelectLabel = ({ children }) => (
  <div className="py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900">
    {children}
  </div>
);
