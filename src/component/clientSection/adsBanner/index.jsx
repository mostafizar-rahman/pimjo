import Button from "@/component/ui/button";
import Title from "@/component/ui/title";
import Image from "next/image";

const AdsBanner = () => {
  return (
    <section className="bg-primary ">
      <div className="max-w-[1440px] mx-auto sm:px-11 sm:py-11 px-4 py-16">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl">
            <Image
              width={437}
              height={467}
              sizes="100vw"
              src={"/images/ads/img-1.png"}
              alt="img"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="rounded-2xl lg:p-10 p-5 bg-background flex justify-center items-center">
            <div className="max-w-[357px] py-11">
              <Title asChild size={"36"} className={"text-center"}>
                <h3>
                  Don’t Miss Out <br /> 50% OFF
                </h3>
              </Title>
              <p className="mt-3 text-center text-gray-100 text-sm tracking-[-0.2px] leading-[142.857%]">
                Get 50% Off – Limited Time Only Refresh your wardrobe with
                modern essentials.
              </p>
              <div className="flex justify-center mt-7">
                <Button
                  variant={"secondary"}
                  className={"px-7 py-4 max-h-12 max-w-[121px] w-full"}
                >
                  Shop now
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl">
            <Image
              width={437}
              height={467}
              sizes="100vw"
              src={"/images/ads/img-2.png"}
              alt="img"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsBanner;
