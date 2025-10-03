import { PiFilter } from "@/lib/icons";
import Image from "next/image";

export const StatusBadge = ({ status }) => {
  let bgColorClass = "";

  switch (status.toLowerCase()) {
    case "delivered":
      bgColorClass = "bg-success-light-background text-[#039855]";
      break;
    case "pending":
      bgColorClass = "bg-warning-light-background text-[#DC6803]";
      break;
    case "canceled":
      bgColorClass = "bg-error-light-background text-[#D92D20]";
      break;
    default:
      bgColorClass = "bg-gray-100-dash text-gray-700";
  }

  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full leading-[150%] ${bgColorClass}`}
    >
      {status}
    </span>
  );
};

const RecentOrders = ({ orders }) => {
  return (
    <div className="bg-card-background-dash md:px-6 px-5 pb-3 rounded-2xl outline outline-border-dash min-w-0">
      <div className="py-4 flex sm:flex-row flex-col gap-4 sm:items-center justify-between">
        <h5 className="text-lg font-semibold leading-xl">Recent Orders</h5>
        <div className="flex gap-3">
          <button className="max-h-11 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-body-secondary-dash flex items-center gap-2 rounded-lg px-4 py-3">
            <PiFilter />
            <span className="text-sm font-medium leading-sm">Filter</span>
          </button>
          <button className="max-h-11 border border-border-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2 rounded-lg px-4 py-3">
            <span className="text-sm font-medium leading-sm">See all</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full">
          <thead>
            <tr className=" border-b border-b-border-secondary-dash border-t border-t-border-secondary-dash">
              <th className="w-[226px] text-left">
                <div className="py-3 pr-6">
                  <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                    Products
                  </p>
                </div>
              </th>
              <th className="w-[130px] text-left">
                <div className="py-3 px-6">
                  <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                    Category
                  </p>
                </div>
              </th>
              <th className="w-[124px] text-left">
                <div className="py-3 px-6">
                  <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                    Price
                  </p>
                </div>
              </th>
              <th className="w-[117px] text-left">
                <div className="py-3 pl-6">
                  <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                    Status
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((product, index) => (
              <tr
                key={product.id}
                className="border-b border-b-border-dash last:border-b-0"
              >
                {/* Product Info */}
                <td>
                  <div className="flex items-center gap-3 py-2 pr-6 h-[65px]">
                    <div className="w-[50px] h-[50px] flex-shrink-0 bg-body-secondary-dash rounded-md">
                      <Image
                        width={50}
                        height={50}
                        src={product.imageUrl}
                        alt="img"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm leading-sm line-clamp-1">
                        {product.name}
                      </div>
                      <div className="text-xs text-text-secondary-dash leading-[18px]">
                        {product.variants}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td>
                  <div className="py-2 px-6 flex items-center h-[65px]">
                    <p className="text-sm text-text-secondary-dash leading-sm">
                      {product.category}
                    </p>
                  </div>
                </td>

                {/* Price */}
                <td>
                  <div className="py-2 px-6 flex items-center h-[65px]">
                    <p className="text-sm text-text-secondary-dash leading-sm">
                      {product.price}
                    </p>
                  </div>
                </td>

                {/* Status Badge */}
                <td>
                  <div className="py-2 pl-6 flex items-center h-[65px]">
                    <StatusBadge status={product.status} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
