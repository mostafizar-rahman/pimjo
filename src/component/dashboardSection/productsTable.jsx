import { StatusBadge } from "./recentOrders";

const ProductsTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[600px]">
        <thead>
          <tr className="text-gray-100-dash leading-[150%] font-medium border-b border-b-border-secondary-dash border-t border-t-border-secondary-dash text-xs">
            <th className="w-[226px] py-3 text-left font-medium">Products</th>
            <th className="lg:w-[55%] w-[35%] py-3 pl-6 text-left font-medium">
              Category
            </th>
            <th className="w-[120px] py-3 pl-6 text-left font-medium">Price</th>
            <th className="w-[117px] py-3 pl-6 text-left font-medium">
              Status
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
              <td className="w-[226px] py-2">
                <div className="flex items-center gap-3">
                  <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-400-dash rounded-md">
                    {/* <Image width={50} height={50} src={""} alt="img" /> */}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm leading-[142.857%] line-clamp-1">
                      {product.name}
                    </div>
                    <div className="text-xs text-gray-100-dash leading-[150%]">
                      {product.variants}
                    </div>
                  </div>
                </div>
              </td>

              {/* Category */}
              <td className="w-[130px] py-2 pl-6 text-sm text-gray-100-dash leading-[142.857%]">
                {product.category}
              </td>

              {/* Price */}
              <td className="w-[120px] py-2 pl-6 text-sm text-gray-100-dash leading-[142.857%]">
                {product.price}
              </td>

              {/* Status Badge */}
              <td className="w-[117px] py-2 pl-6">
                <StatusBadge status={product.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
