import { PiArrowUp } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const MetricCard = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="bg-card-background-dash md:p-6 p-5 rounded-2xl outline outline-border-dash">
      <div className="flex items-center justify-center w-12 h-12 bg-tab-background-dash rounded-xl">
        {icon && <div>{icon}</div>}
      </div>
      <div className="mt-5">
        <p className="text-sm text-text-secondary-dash leading-sm">
          {title}
        </p>
        <div className="flex justify-between items-end mt-2">
          <h3 className="text-3xl font-bold leading-[1.26666666667]">
            {value}
          </h3>
          <p
            className={cn(
              `text-sm pl-2 pr-2.5 py-0.5 rounded-full font-medium leading-sm flex items-center gap-1`,
              changeType === "positive"
                ? "text-[#039855] bg-success-light-background"
                : "text-[#D92D20] bg-error-light-background"
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
