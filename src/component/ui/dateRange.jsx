"use client";

import { PiCalender } from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const DateRange = () => {
  const [selected, setSelected] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Format date to "05 Feb - 06 March" format
  const formatDateRange = (range) => {
    if (!range?.from) return "05 Feb - 06 March";

    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = date.toLocaleDateString("en-US", { month: "short" });
      return `${day} ${month}`;
    };

    if (range.to) {
      return `${formatDate(range.from)} - ${formatDate(range.to)}`;
    }
    return formatDate(range.from);
  };

  // Handle click outside to close calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="relative" ref={calendarRef}>
      <button
        onClick={toggleCalendar}
        className="max-h-11 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg px-4 py-3 text-gray-600-dash hover:bg-gray-50 transition-colors"
      >
        <PiCalender className={"shrink-0"} />
        <span className="text-sm md:block hidden">
          {formatDateRange(selected)}
        </span>
      </button>

      {showCalendar && (
        <div className="absolute right-0 top-12 bg-primary p-5 rounded-md shadow-lg border border-border-dash z-50">
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={setSelected}
            classNames={{
              day: `text-sm font-medium text-gray-600-dash hover:bg-secondary hover:text-white rounded-md`,
              selected: `bg-secondary text-white hover:bg-blue-600`,
              range_start: `bg-secondary text-white rounded-tr-none rounded-br-none`,
              range_end: `bg-secondary text-white rounded-tl-none rounded-bl-none`,
              range_middle: `bg-blue-100 text-blue-900 rounded-none bg-secondary/50`,
              today: `font-bold text-blue-600`,
              chevron: "text-gray-600-dash size-5",
              caption: "text-gray-900-dash font-medium",
              head_cell: "text-gray-500 font-medium text-xs",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateRange;
