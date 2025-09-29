import { PiArrowUp, PiThreeDot } from "@/lib/icons";
import SemicircleProgress from "../ui/semicircleProgress";

const MonthlyTargetCard = () => {
  return (
    <div className="bg-tab-background-dash outline outline-border-dash rounded-2xl">
      <div className="bg-body-primary-dash md:p-6 p-5 md:pb-8 pb-6 rounded-2xl ">
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold leading-[1.55555555556]">
              Monthly Target
            </h5>
            <span className="text-text-secondary-dash cursor-pointer w-6 h-6 flex justify-center items-center">
              <PiThreeDot />
            </span>
          </div>
          <p className="mt-1 text-text-secondary-dash text-sm leading-[142.857%]">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-11 mt-8">
          <SemicircleProgress
            percentage={75.55}
            size={328}
            height={164}
            strokeWidth={13}
            primaryColor="#3758F9"
            backgroundColor="#E4E7EC"
          />
          <p className="text-text-secondary-dash mt-7 text-center">
            You earn $3287 today, its higher than last month. Keep up your good
            work!
          </p>
        </div>
      </div>
      <div className="py-5 lg:px-[66px] md:px-10 px-6 flex items-center justify-between">
        <div className="text-center">
          <small className="text-text-secondary-dash leading-[142.857%]">
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
          <small className="text-text-secondary-dash leading-[142.857%]">
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
          <small className="text-text-secondary-dash leading-[142.857%]">
            Today
          </small>
          <p className="font-semibold text-lg leading-[155.556%] mt-1 flex items-center gap-1">
            $1.5K{" "}
            <span className="leading-none">
              <PiArrowUp className={"size-4"} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTargetCard;
