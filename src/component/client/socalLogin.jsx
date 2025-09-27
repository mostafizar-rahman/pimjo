import { PiFacebookOrginal, PiGoogle } from "@/lib/icons";

const SocalLogin = () => {
  return (
    <div className="space-y-3">
      <button className="border border-border rounded-lg py-3 px-20 flex justify-center items-center gap-3 w-full hover:border-secondary transition-all duration-500">
        <PiGoogle />
        <p className="tracking-[-0.2px] font-medium">Sign in with Google</p>
      </button>
      <button className="border border-border rounded-lg py-3 px-20 flex justify-center items-center gap-3 w-full hover:border-secondary transition-all duration-500">
        <PiFacebookOrginal />
        <p className="tracking-[-0.2px] font-medium">Sign in with Facebook</p>
      </button>
      <div className="flex items-center gap-2 mt-8">
        <span className="w-full h-px bg-[#E5E7EB] block"></span>
        <small className="text-gray-100 leading-[142.857%] font-medium shrink-0">
          Or sign in with email
        </small>
        <span className="w-full h-px bg-[#E5E7EB] block"></span>
      </div>
    </div>
  );
};

export default SocalLogin;
