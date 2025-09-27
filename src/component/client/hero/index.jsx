import HeroProducts from "./heroProducts";
import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <section className="lg:py-20 py-4 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-[9.5122fr_4fr] gap-x-5 gap-y-11">
          <div className="lg:px-14 lg:py-[115px] px-5 py-7 rounded-xl bg-gray-900 overflow-hidden relative">
            <HeroSlider />
          </div>
          <div>
            <HeroProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
