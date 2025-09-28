"use client";
import { PiClose, PiNotification } from "@/lib/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const notifications = [
  {
    id: 1,
    name: "Terry Franci",
    avatar: "/images/notifications/img-1.jpg",
    action: "requests permission to change",
    project: "Project - Nganter App",
    category: "Project",
    time: "5 min ago",
    status: "online",
  },
  {
    id: 2,
    name: "Alena Franci",
    avatar: "/images/notifications/img-2.jpg",
    action: "requests permission to change",
    project: "Project - Nganter App",
    category: "Project",
    time: "8 min ago",
    status: "online",
  },
  {
    id: 3,
    name: "Jocelyn Kenter",
    avatar: "/images/notifications/img-3.jpg",
    action: "requests permission to change",
    project: "Project - Nganter App",
    category: "Project",
    time: "15 min ago",
    status: "online",
  },
  {
    id: 4,
    name: "Brandon Philips",
    avatar: "/images/notifications/img-4.jpg",
    action: "requests permission to change",
    project: "Project - Nganter App",
    category: "Project",
    time: "1 hr ago",
    status: "offline",
  },
  {
    id: 5,
    name: "Brandon Philips",
    avatar: "/images/notifications/img-4.jpg",
    action: "requests permission to change",
    project: "Project - Nganter App",
    category: "Project",
    time: "1 hr ago",
    status: "offline",
  },
];
const NotificationsDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-100-dash rounded-full border border-border-dash w-11 h-11 flex justify-center items-center relative "
      >
        <PiNotification />
        <span className="block w-2 h-2 bg-[#FD853A] rounded-full absolute right-[3px] top-[3px]"></span>
      </button>
      {showDropdown && (
        <div className="absolute z-30 top-[60px] right-0 w-[361px] bg-primary rounded-2xl p-3 border border-border-dash shadow-[0_12px_16px_-4px_rgba(16,24,40,0.08),_0_4px_6px_-2px_rgba(16,24,40,0.03)]">
          <div className="flex justify-between border-b border-b-border-secondary-dash pb-3">
            <h6 className="font-semibold leading-[155.556%]">Notifications</h6>
            <button
              onClick={toggleDropdown}
              className="w-6 h-6 flex justify-center items-center"
            >
              <PiClose />
            </button>
          </div>
          <div>
            <div className="p-3">
              {/* Notification Items */}
              <div className="max-h-[392px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 border-b border-b-border-secondary-dash last:border-b-0 hover:bg-gray-400-dash transition-all duration-500"
                  >
                    <div className="flex items-start space-x-3">
                      {/* Avatar with status indicator */}
                      <div className="relative w-10 h-10 rounded-full flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={notification.avatar}
                          alt={notification.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div
                          className={`absolute -bottom-0 -right-0 w-2.5 h-2.5 rounded-full border border-white ${
                            notification.status === "online"
                              ? "bg-[#12B76A]"
                              : "bg-red-500"
                          }`}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold leading-[142.857%]">
                            {notification.name}
                          </span>
                          <span className="text-gray-100-dash ml-1">
                            {notification.action}
                          </span>
                          <span className="font-semibold ml-1">
                            {notification.project}
                          </span>
                        </p>

                        <div className="mt-1.5 flex items-center space-x-2 text-xs text-gray-100-dash">
                          <span>{notification.category}</span>
                          <span className="text-sm">•</span>
                          <span>{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <button className="w-full py-3 px-4 text-sm font-medium text-gray-600-dash border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-lg hover:bg-gray-50 transition-all duration-500 ">
                  View All Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
