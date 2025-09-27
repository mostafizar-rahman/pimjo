import { PiHeart, PiShoppingCart } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Card = ({ product }) => {
  return (
    <div className="rounded-lg group">
      <div className="relative">
        <Image
          width={283}
          height={326}
          sizes="100vw"
          src={product.image}
          alt="img"
          className="w-full h-auto"
        />
        {product.tag && (
          <div className="absolute left-[18px] top-[18px] px-3 py-1 rounded-2xl text-sm font-medium tracking-[-0.2px] leading-[142.857%] bg-[#FEF2F2] text-[#B91C1C]">
            Hot Item
          </div>
        )}
        <button
          aria-label="heart"
          className="absolute right-4 top-4 w-11 h-11 bg-primary rounded-full flex justify-center items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500"
        >
          <PiHeart className={"size-5"} />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between mb-1">
          <Link
            href={""}
            className="font-semibold tracking-[-0.2px] hover:text-secondary transition-all duration-500"
          >
            {product.title}
          </Link>
          <p className="font-medium tracking-[-0.2px]">${product.price}</p>
        </div>
        <small className="leading-[142.857%] tracking-[-0.2px] text-gray-100">
          {product.description}
        </small>
        <Button variant={"outline"} className={"mt-5 w-full"}>
          <PiShoppingCart className={"w-[18px] h-[15px]"} />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
