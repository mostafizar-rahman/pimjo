import { PiArrowLeft } from "@/lib/icons";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="max-h-9 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg sm:px-[14px] px-3 py-2 hover:bg-secondary hover:text-primary transition-all duration-500">
        <PiArrowLeft />
        <span className="text-sm font-medium leading-sm sm:block hidden">
          Previous
        </span>
      </button>
      <small className="font-medium text-text-color-dash leading-[142%] sm:hidden block">
        Page 1 of 10
      </small>
      <ul className="hidden sm:flex items-center">
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 bg-secondary rounded-lg flex justify-center items-center text-center text-sm text-primary leading-sm dark:text-white dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          1
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          2
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          3
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm font-medium">
          ...
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          8
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          9
        </li>
        <li className="cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-lg flex justify-center items-center text-center text-sm text-text-color-dash leading-sm dark:hover:text-white font-medium hover:bg-secondary hover:text-primary transition-all duration-500">
          10
        </li>
      </ul>
      <button className="max-h-9 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg sm:px-[14px] px-3 py-2 hover:bg-secondary hover:text-primary transition-all duration-500">
        <span className="text-sm font-medium leading-sm sm:block hidden">
          Next
        </span>
        <PiArrowLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
