const ProgressBar = ({ value, color }) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 bg-[#E4E7EC] rounded-full h-2 w-[98px] overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-sm font-medium leading-sm">{value}%</span>
    </div>
  );
};
export default ProgressBar;
