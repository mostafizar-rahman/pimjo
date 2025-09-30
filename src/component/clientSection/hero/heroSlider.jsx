"use client";
import Button from "@/component/ui/button";
import Title from "@/component/ui/title";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: 1,
    subTItle: "samsung",
    title: "Galaxy S24 Ultra 5G",
    description:
      "Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary AI – Redefine possibilities.",
    image: "/images/hero/slider-img-1.png",
    price: "899",
  },
  {
    id: 2,
    subTItle: "samsung",
    title: "Galaxy S24 Ultra 5G",
    description:
      "Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary AI – Redefine possibilities.",
    image: "/images/hero/slider-img-1.png",
    price: "899",
  },
  {
    id: 3,
    subTItle: "samsung",
    title: "Galaxy S24 Ultra 5G",
    description:
      "Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary AI – Redefine possibilities.",
    image: "/images/hero/slider-img-1.png",
    price: "899",
  },
];
const HeroSlider = () => {
  return (
    <>
      <Swiper
        loop
        spaceBetween={30}
        pagination={{
          el: ".hero-pagination",
          bulletClass: "hero-pagination-btn",
          bulletActiveClass: "hero-pagination-active",
          clickable:true
        }}
        speed={1500}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
      >
        {data.map(({ description, id, image, price, subTItle, title }) => (
          <SwiperSlide key={id}>
            <div className="flex lg:flex-row flex-col justify-between items-center gap-y-11">
              <div className="md:max-w-[398px] text-center lg:text-left">
                <small className="font-medium leading-[142.857%] uppercase text-gray-200">
                  {subTItle}
                </small>
                <Title asChild size={"36"} className={"mt-5 text-primary dark:text-foreground"}>
                  <h1>{title}</h1>
                </Title>
                <p className="mt-3 tracking-[-0.2px] text-gray-200">
                  {description}
                </p>
                <Button asChild className={"lg:mt-12 mt-8 lg:max-w-[147px] w-full"}>
                  <Link href={"#"}>Buy Now ${price}</Link>
                </Button>
              </div>
              <div>
                <Image
                  width={306}
                  height={314}
                  sizes="100vw"
                  src={image}
                  alt="img"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute lg:bottom-12 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-[5px] hero-pagination [&_.hero-pagination-btn]:block [&_.hero-pagination-btn]:w-4 [&_.hero-pagination-btn]:h-1 [&_.hero-pagination-btn]:bg-primary [&_.hero-pagination-btn]:opacity-30 [&_.hero-pagination-btn]:rounded-[11px] [&_.hero-pagination-active]:!opacity-100"></div>
    </>
  );
};

export default HeroSlider;
