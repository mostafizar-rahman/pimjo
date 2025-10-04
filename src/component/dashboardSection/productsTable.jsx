import { getProducts } from "@/lib/data";
import Image from "next/image";
import ErrorDIsplay from "./errorDIsplay";
import { StatusBadge } from "./recentOrders";

const ProductsTable = async () => {
  const { data: products, error, success } = await getProducts();
  if (!success) return <ErrorDIsplay error={error} />;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[600px] w-full">
        <thead>
          <tr className="border-b border-b-border-secondary-dash border-t border-t-border-secondary-dash ">
            <th className="w-[226px] text-left">
              <div className="py-3 pr-6">
                <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                  Products
                </p>
              </div>
            </th>
            <th className="lg:w-[55%] w-[35%] text-left">
              <div className="py-3 px-6">
                <p className="text-text-secondary-dash leading-[18px] font-medium text-xs">
                  Category
                </p>
              </div>
            </th>
            <th className="w-[120px] text-left">
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
          {products.map((product, index) => (
            <tr
              key={product.id}
              className="border-b border-b-border-secondary-dash last:border-b-0"
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
  );
};

export default ProductsTable;
