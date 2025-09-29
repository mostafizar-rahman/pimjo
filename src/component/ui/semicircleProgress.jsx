"use client";
import { useEffect, useState } from "react";

const SemicircleProgress = ({
  percentage = 75.55,
  size = 328,
  height,
  strokeWidth = 12,
  primaryColor = "#4F46E5",
  backgroundColor = "#E5E7EB",
  showAnimation = true,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    const handleResize = () => {
      setCurrentSize(window.innerWidth < 1024 ? 248 : size);
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const radius = (currentSize - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half circle circumference
  const offset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = percentage / 60;
        const animate = () => {
          current += increment;
          if (current < percentage) {
            setAnimatedPercentage(current);
            requestAnimationFrame(animate);
          } else {
            setAnimatedPercentage(percentage);
          }
        };
        animate();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedPercentage(percentage);
    }
  }, [percentage, showAnimation]);

  return (
    <div
      className="relative"
      style={{ width: currentSize, height: height ? height : currentSize / 2 + 40 }}
    >
      <svg width={currentSize} height={currentSize / 2 + 40} className="overflow-visible">
        {/* Background semicircle */}
        <path
          d={`M ${strokeWidth / 2} ${currentSize / 2} A ${radius} ${radius} 0 0 1 ${
            currentSize - strokeWidth / 2
          } ${currentSize / 2}`}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
        />

        {/* Progress semicircle */}
        <path
          d={`M ${strokeWidth / 2} ${currentSize / 2} A ${radius} ${radius} 0 0 1 ${
            currentSize - strokeWidth / 2
          } ${currentSize / 2}`}
          stroke={primaryColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
        <div className="lg:text-4xl text-3xl lg:leading-[122.222%] font-semibold ">
          {animatedPercentage.toFixed(2)}%
        </div>
        <div className="mt-2 px-3 py-1 bg-success-light-background text-[#039855] leading-[142.857%] text-sm font-medium rounded-full">
          +10%
        </div>
      </div>
    </div>
  );
};

export default SemicircleProgress;
