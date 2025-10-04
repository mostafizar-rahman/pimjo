import { PiArrowUp, PiThreeDot } from "@/lib/icons";
import dynamic from "next/dynamic";
import SemicircleProgress from "../ui/semicircleProgress";

// const SemicircleProgress = dynamic(() => import("../ui/semicircleProgress"), {
//   ssr: false,
// });
const MonthlyTargetCard = () => {
  return (
    <div className="bg-tab-background-dash outline outline-border-dash rounded-2xl">
      <div className="bg-body-primary-dash md:p-6 p-5 md:pb-8 pb-6 rounded-2xl ">
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold leading-xl">Monthly Target</h5>
            <span className="text-text-secondary-dash cursor-pointer w-6 h-6 flex justify-center items-center">
              <PiThreeDot />
            </span>
          </div>
          <p className="mt-1 text-text-secondary-dash text-sm leading-sm">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-11 mt-8">
          <SemicircleProgress />
          <p className="text-text-secondary-dash mt-6 text-center max-w-[400px] mx-auto pb-2.5">
            You earn $3287 today, its higher than last month. Keep up your good
            work!
          </p>
        </div>
      </div>
      <div className="py-5 md:px-6 px-5 ">
        <div className="max-w-[322px] mx-auto flex items-center justify-center gap-8">
          <div className="text-center">
            <small className="text-text-secondary-dash leading-sm">
              Target
            </small>
            <p className="font-semibold text-lg leading-[155.556%] mt-1 flex items-center gap-1">
              $20K{" "}
              <span className="leading-none rotate-180">
                <PiArrowUp className={"size-4"} />
              </span>
            </p>
          </div>
          <span className="w-px h-[27px] border-r border-r-border-dash block"></span>
          <div className="text-center">
            <small className="text-text-secondary-dash leading-sm">
              Revenue
            </small>
            <p className="font-semibold text-lg leading-[155.556%] mt-1 flex items-center gap-1">
              $16K{" "}
              <span className="leading-none">
                <PiArrowUp className={"size-4"} />
              </span>
            </p>
          </div>
          <span className="w-px h-[27px] border-r border-r-border-dash block"></span>
          <div className="text-center">
            <small className="text-text-secondary-dash leading-sm">Today</small>
            <p className="font-semibold text-lg leading-[155.556%] mt-1 flex items-center gap-1">
              $1.5K{" "}
              <span className="leading-none">
                <PiArrowUp className={"size-4"} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTargetCard;
