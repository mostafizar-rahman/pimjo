import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div className="rounded-2xl p-2 bg-primary">
      <div className="rounded-lg">
        <Image
          width={208}
          height={188}
          sizes="100vw"
          src={category.image}
          alt="img"
          className="w-full h-auto"
        />
      </div>
      <div className="p-3 mt-2 text-center">
        <Link
          href={"#"}
          className="font-semibold tracking-[-0.2px] hover:text-secondary transition-all duration-500 block"
        >
          {category.title}
        </Link>
        <p className="font-medium tracking-[-0.2px] text-gray-100 mt-2">
          {category.totalProducts}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
