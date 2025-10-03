import SocalLogin from "@/component/clientSection/socalLogin";
import Button from "@/component/ui/button";
import Input from "@/component/ui/input";
import Title from "@/component/ui/title";
import Link from "next/link";

const Register = () => {
  return (
    <section className="lg:py-[112px] py-20 bg-primary">
      <div className="container">
        <div className="xl:px-8">
          <div className="max-w-[400px] mx-auto">
            <div className="text-center">
              <Title size={"48"}>Create account</Title>
              <p className="mt-4 tracking-[-0.2px] text-gray-100">
                Join now to start shopping and enjoy complete access to
                everything we offer.
              </p>
            </div>
            <div className="pt-9">
              <SocalLogin />
              <form action="" className="mt-8">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium tracking-[-0.2px] leading-sm text-gray-700"
                  >
                    Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    placeholder={"Enter your email"}
                    id="email"
                    type={"email"}
                    className={"max-h-12 py-4"}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium tracking-[-0.2px] leading-sm text-gray-700"
                  >
                    Password <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    placeholder={"Enter your password"}
                    id="password"
                    type={"password"}
                    className={"max-h-12 py-4"}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="re-password"
                    className="mb-2 block text-sm font-medium tracking-[-0.2px] leading-sm text-gray-700"
                  >
                    Re-type Password <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    placeholder={"Enter your password"}
                    id="re-password"
                    type={"password"}
                    className={"max-h-12 py-4"}
                  />
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="Remember"
                      className="appearance-none size-5 rounded-md border border-border checked:border-secondary checked:bg-secondary checked:bg-[url('/images/check.png')] checked:bg-no-repeat checked:bg-center cursor-pointer"
                    />
                    <label
                      htmlFor="Remember"
                      className="text-sm tracking-[-0.2px] leading-sm text-gray-700 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href={"#"}
                    className="text-sm font-medium tracking-[-0.2px] leading-sm hover:text-secondary transition-all duration-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  variant={"secondary"}
                  className={"mt-5 w-full max-h-12 py-4"}
                >
                  Create Account
                </Button>
                <p className="mt-6 text-gray-100 tracking-[-0.2px]">
                  Don’t Have an account ?{" "}
                  <Link
                    href={"/register"}
                    className="text-gray-700 font-medium hover:text-secondary transition-all duration-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
