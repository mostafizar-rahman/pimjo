import Title from "@/component/ui/title";
import TestimonialCard from "./testimonialCard";
import { testimonialsList } from "./testimonialsList";

const Testimonial = () => {
  return (
    <section className="lg:py-[112px] py-16">
      <div className="container">
        <div className="xl:px-8">
          <div>
            <div className="px-[14px] py-1 rounded-lg font-medium tracking-[-0.2px] bg-[#3758f90d] dark:bg-[#12b76a26] text-[#1D4ED8] inline-flex mb-4">
              Testimonial
            </div>
            <Title size={"48"} className={"max-w-[640px]"}>
              Hear from Our Happy Customers
            </Title>
          </div>
          <div className="lg:mt-16 mt-11 grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {testimonialsList.map((testimonials) => (
              <TestimonialCard
                key={testimonials.id}
                testimonials={testimonials}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
