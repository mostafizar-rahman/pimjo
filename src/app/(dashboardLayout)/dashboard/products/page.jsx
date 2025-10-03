import ProductsTable from "@/component/dashboardSection/productsTable";
import DateRange from "@/component/ui/dateRange";
import Input from "@/component/ui/input";
import Pagination from "@/component/ui/pagination";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { PiSearch } from "@/lib/icons";

async function getProducts() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

const Products = async () => {
  const products = await getProducts();

  return (
    <section className="rounded-2xl border border-border-dash bg-card-background-dash">
      <div className="md:px-6 px-5 py-4 flex sm:flex-row flex-col sm:items-center justify-between gap-4">
        <h5 className="text-lg font-semibold leading-[155.556%] flex-1">
          All products
        </h5>
        <div className="flex items-center sm:justify-end gap-3 flex-1">
          <div className="relative w-full max-w-[300px] shrink-0">
            <span className="text-text-gray-400-dash absolute left-4 top-1/2 -translate-y-1/2">
              <PiSearch />
            </span>
            <Input
              placeholder={"Search..."}
              className={
                "pl-11 w-full text-text-gray-400-dash placeholder:text-text-gray-400-dash rounded-lg border-border-dash bg-card-background-dash shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              }
            />
          </div>
          <div className="shrink-0">
            <DateRange />
          </div>
        </div>
      </div>
      <div className="md:px-6 px-5">
        <ProductsTable products={products} />
      </div>
      <div className="md:px-6 px-5 py-4 border-t border-t-border-dash">
        <Pagination />
      </div>
    </section>
  );
};

export default Products;
