import Rating from "@/component/ui/rating";
import Image from "next/image";

const TestimonialCard = ({ testimonials }) => {
  return (
    <div className="rounded-2xl p-6 bg-primary">
      <div className="mb-6">
        <Rating star={testimonials.star} />
      </div>
      <p className="text-gray-100 tracking-[-0.2px]">{testimonials.quote}</p>
      <div className="flex gap-3 items-center mt-8">
        <div>
          <Image
            width={48}
            height={48}
            sizes="100vw"
            src={testimonials.image}
            alt="img"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <p className="font-medium tracking-[-0.2px] text-gray-700">
            {testimonials.author}
          </p>
          <small className="tracking-[-0.2px] leading-[142.857%] text-gray-100">
            {testimonials.posotion}
          </small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
