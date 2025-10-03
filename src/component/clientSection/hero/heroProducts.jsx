import Button from "@/component/ui/button";
import Image from "next/image";

const HeroProducts = () => {
  return (
    <div className="flex lg:flex-col md:flex-row flex-col gap-5">
      <div className="rounded-xl lg:p-6 p-5 bg-background">
        <div className="flex justify-between items-center">
          <div className="max-w-[163px]">
            <small className="uppercase font-medium leading-sm text-gray-100">
              xiaomi
            </small>
            <p className="text-xl font-semibold mt-2 text-gray-700 tracking-[-0.2px] leading-xl">
              Smart Security Home Camera
            </p>
            <Button
              variant={"secondary"}
              size={"lg"}
              className={"max-w-[97px] w-full lg:mt-12 mt-[42px]"}
            >
              Shop Now
            </Button>
          </div>
          <div className="max-h-[222px] pt-4 px-[17px] flex justify-end shrink-0">
            <Image
              width={126}
              height={198}
              sizes="100vh"
              src={"/images/hero/product-img-1.png"}
              alt="img"
              className="h-auto aspect-[126/198] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl lg:p-6 p-5 bg-background">
        <div className="flex justify-between">
          <div className="max-w-[163px] flex flex-col justify-between">
            <div>
              <small className="uppercase font-medium leading-sm text-gray-100">
                redmi
              </small>
              <p className="text-xl font-semibold mt-2 text-gray-700 tracking-[-0.2px] leading-xl">
                Smart Watch <span className="lg:block inline-block">5 lite</span>
              </p>
            </div>
            <Button
              variant={"secondary"}
              size={"lg"}
              className={"max-w-[97px] w-full lg:mt-12 mt-[42px]"}
            >
              Shop Now
            </Button>
          </div>
          <div className="max-h-[214px] pt-3.5 pb-1 flex justify-end shrink-0">
            <Image
              width={162}
              height={196}
              sizes="100vh"
              src={"/images/hero/product-img-2.png"}
              alt="img"
              className="h-auto aspect-[162/196] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
