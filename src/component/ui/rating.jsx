import { PiStarFull, PiStarHalf } from "@/lib/icons";
import { cn } from "@/lib/utils";

const Rating = ({ star, iconSize, className }) => {
  return (
    <ul className={cn("flex items-center", className)}>
      {Array.from({ length: 5 }).map((elem, index) => {
        let number = index + 0.5;
        return (
          <li key={index} className="text-[#FACC15] h-4">
            {star >= index + 1 ? (
              <PiStarFull className={cn("", iconSize)} />
            ) : star >= number ? (
              <PiStarHalf className={cn("", iconSize)} />
            ) : (
              <PiStarFull className={cn("", iconSize)} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
