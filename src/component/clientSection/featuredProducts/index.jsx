import Card from "@/component/ui/card";
import Title from "@/component/ui/title";
import { productsList } from "./productsList";

const FeaturedProducts = () => {
  return (
    <section className="lg:py-[112px] py-16 bg-primary">
      <div className="container">
        <div className="xl:px-8">
          <div className="text-center">
            <Title size={"48"}>Handpicked Highlights</Title>
            <p className="mt-4 max-w-[480px] mx-auto tracking-[-0.2px] text-gray-100">
              There are many variations of available but the majority have
              suffered alteration in some form.
            </p>
          </div>
          <div className="lg:mt-16 mt-11 grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-7 gap-6">
            {productsList.map((product) => (
              <Card key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
