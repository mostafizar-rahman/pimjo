"use client";

import SocalLogin from "@/component/clientSection/socalLogin";
import Button from "@/component/ui/button";
import Input from "@/component/ui/input";
import Title from "@/component/ui/title";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="lg:py-[112px] py-20 bg-primary">
      <div className="container">
        <div className="xl:px-8">
          <div className="max-w-[400px] mx-auto">
            <div className="text-center">
              <Title size={"48"}>Welcome back</Title>
              <p className="mt-4 tracking-[-0.2px] text-gray-100">
                Login to continue your journey with us.
              </p>
            </div>
            <div className="pt-9">
              <SocalLogin />
              <form onSubmit={handleSubmit} className="mt-8">
                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <p className="mt-6 text-gray-100 tracking-[-0.2px]">
                  Don't Have an account ?{" "}
                  <Link
                    href={"/register"}
                    className="text-gray-700 font-medium hover:text-secondary transition-all duration-500"
                  >
                    Sign Up
                  </Link>
                </p>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>Demo credentials:</strong>
                    <br />
                    Email: admin@example.com
                    <br />
                    Password: admin123
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
