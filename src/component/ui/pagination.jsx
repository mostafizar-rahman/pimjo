import { PiArrowLeft } from "@/lib/icons";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="max-h-9 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg px-[14px] py-2 hover:bg-secondary hover:text-primary transition-all duration-500">
        <PiArrowLeft />
        <span className="text-sm font-medium leading-[142.857%]">Previous</span>
      </button>
      <ul className="flex items-center">
        <li className="cursor-pointer w-12 h-12 bg-secondary rounded-lg flex justify-center items-center text-center text-sm text-primary leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          1
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          2
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          3
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium">
          ...
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          8
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          9
        </li>
        <li className="cursor-pointer w-12 h-12 rounded-lg flex justify-center items-center text-center text-sm text-gray-600-dash leading-[142.857%] font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          10
        </li>
      </ul>
      <button className="max-h-9 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg px-[14px] py-2 hover:bg-secondary hover:text-primary transition-all duration-500">
        <span className="text-sm font-medium leading-[142.857%]">Next</span>
        <PiArrowLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
