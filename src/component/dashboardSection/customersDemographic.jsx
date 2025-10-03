import { PiThreeDot } from "@/lib/icons";
import Image from "next/image";
import ProgressBar from "../ui/progressBar";

const CustomersDemographic = () => {
  return (
    <div className="bg-card-background-dash md:px-6 md:py-[30.5px] px-5 py-5 rounded-2xl outline outline-border-dash">
      <div>
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold leading-xl">
            Customers Demographic
          </h5>
          <span className="text-text-secondary-dash cursor-pointer w-6 h-6 flex justify-center items-center">
            <PiThreeDot />
          </span>
        </div>
        <p className="mt-1 text-text-secondary-dash text-sm leading-sm">
          Number of customer based on country
        </p>
      </div>
      <div className="mt-6 outline outline-border-dash bg-body-secondary-dash rounded-2xl px-[23.33px] pt-[25.5px] pb-[11.5px] max-h-[206px]">
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
      <div className="flex items-center gap-3">
        <Image
          width={32}
          height={32}
          src={image}
          alt="flag"
          className="shrink-0 rounded-full w-8 h-8"
        />
        <div>
          <p className="font-semibold text-sm leading-sm">{name}</p>
          <small className="text-xs text-text-secondary-dash leading-[150%] block">
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
