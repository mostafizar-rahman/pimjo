import Title from "@/component/ui/title";
import CategoryCard from "./categoryCard";
import { categoryList } from "./categoryList";

const ShopbyCategory = () => {
  return (
    <section className="lg:py-[112px] py-16">
      <div className="container">
        <div className="xl:px-8">
          <div>
            <Title size={"48"}>Shop by Category</Title>
            <p className="mt-4 max-w-[574px] tracking-[-0.2px] text-gray-100">
              Explore our curated selection of products across premium
              categories, from everyday essentials to exclusive limited
              collections.
            </p>
          </div>
          <div className="lg:mt-16 mt-11 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-5">
            {categoryList.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopbyCategory;
