import { PiArrowUp } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const MetricCard = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="bg-primary md:p-6 p-5 rounded-2xl border border-border-dash">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-300-dash rounded-xl">
        {icon && <div className="">{icon}</div>}
      </div>
      <div className="mt-5">
        <p className="text-sm text-gray-100-dash leading-[142.857%]">{title}</p>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-3xl font-bold leading-[126.667%]">{value}</h3>
          <p
            className={cn(
              `text-sm pl-2 pr-2.5 py-0.5 rounded-full font-medium leading-[142.857%] flex items-center gap-1`,
              changeType === "positive"
                ? "text-[#039855] bg-[#ECFDF3]"
                : "text-[#D92D20] bg-[#FEF3F2]"
            )}
          >
            {changeType === "positive" ? (
              <PiArrowUp />
            ) : (
              <PiArrowUp className={"rotate-180"} />
            )}{" "}
            {change}
          </p>
        </div>
      </div>
    </div>
  );
};
