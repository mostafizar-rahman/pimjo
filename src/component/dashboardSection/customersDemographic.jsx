import { PiThreeDot } from "@/lib/icons";
import Image from "next/image";
import ProgressBar from "../ui/progressBar";

const CustomersDemographic = () => {
  return (
    <div className="bg-primary md:p-6 p-5 rounded-2xl border border-border-dash">
      <div>
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold leading-[155.556%]">
            Customers Demographic
          </h5>
          <span className="text-gray-100-dash cursor-pointer w-6 h-6 flex justify-center items-center">
            <PiThreeDot />
          </span>
        </div>
        <p className="mt-1 text-gray-100-dash text-sm leading-[142.857%]">
          Number of customer based on country
        </p>
      </div>
      <div className="mt-6 border border-border-dash bg-gray-400-dash rounded-2xl px-[23.33px] pt-[25.5px] pb-[11.5px]">
        <Image
          width={318}
          height={169}
          sizes="100vw"
          src="/images/map.png"
          alt="map"
          className="mx-auto"
        />
      </div>
      <div className="mt-6 space-y-5">
        <Card
          image={"/images/usa.png"}
          name={"USA"}
          progressValue={79}
          totalCustomers={"2,379"}
        />
        <Card
          image={"/images/france.png"}
          name={"France"}
          progressValue={23}
          totalCustomers={"589"}
        />
      </div>
    </div>
  );
};

export default CustomersDemographic;

function Card({ image, name, totalCustomers, progressValue }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <Image
          width={32}
          height={32}
          src={image}
          alt="flag"
          className="shrink-0 rounded-full w-8 h-8"
        />
        <div>
          <p className="font-semibold text-sm leading-[142.857%]">{name}</p>
          <small className="text-xs text-gray-100-dash">
            {totalCustomers} Customers
          </small>
        </div>
      </div>
      <div>
        <ProgressBar value={progressValue} color="bg-secondary" />
      </div>
    </div>
  );
}
