"use client";
import { useEffect, useRef, useState } from "react";

const SemicircleProgress = ({
  progress = 75.55,
  primaryColor = "#3758F9",
  backgroundColor = "#E4E7EC",
}) => {
  const progressBarContainer = useRef(null);
  const progressBarInstance = useRef(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Dynamically import progressbar.js only on client side
    import("progressbar.js").then(({ SemiCircle }) => {
      if (progressBarContainer.current && !progressBarInstance.current) {
        progressBarInstance.current = new SemiCircle(
          progressBarContainer.current,
          {
            strokeWidth: 4,
            easing: "easeInOut",
            duration: 1400,
            color: primaryColor,
            trailColor: backgroundColor,
            trailWidth: 4,
            svgStyle: null,
            step: (state, bar) => {
              bar.path.setAttribute("stroke-linecap", "round");
              bar.trail.setAttribute("stroke-linecap", "round");
            },
          }
        );
      }

      if (progressBarInstance.current) {
        progressBarInstance.current.animate(progress / 100);
      }

      // Animate number
      const duration = 1400;
      const fps = 60;
      const totalFrames = (duration / 1000) * fps;
      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const progressValue = (frame / totalFrames) * progress;
        if (frame >= totalFrames) {
          setAnimatedProgress(progress);
          clearInterval(interval);
        } else {
          setAnimatedProgress(progressValue);
        }
      }, 1000 / fps);

      return () => {
        clearInterval(interval);
      };
    });

    return () => {
      if (progressBarInstance.current) {
        progressBarInstance.current.destroy();
        progressBarInstance.current = null;
      }
    };
  }, [progress, primaryColor, backgroundColor]);

  return (
    <div className="relative">
      <div
        ref={progressBarContainer}
        className="sm:w-[324px] sm:h-[164px] w-[248px] h-[144px] [&_svg]:overflow-visible"
      />

      {/* Center content */}
      <div className="absolute bottom-[17.18px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center mt-12">
        <div className="lg:text-4xl text-3xl lg:leading-[122.222%] font-semibold">
          {animatedProgress.toFixed(2)}%
        </div>
        <div className="mt-2 px-3 py-1 bg-success-light-background text-green-700 leading-sm text-sm font-medium rounded-full">
          +10%
        </div>
      </div>
    </div>
  );
};

export default SemicircleProgress;
