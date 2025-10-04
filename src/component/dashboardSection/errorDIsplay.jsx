import { cn } from "@/lib/utils";

const ErrorDIsplay = ({ error, className }) => {
  return (
    <div className={cn("w-full h-full flex justify-center items-center", className)}>
      <p className="text-red-600 font-medium text-lg text-center ">{error}</p>
    </div>
  );
};

export default ErrorDIsplay;
