import ProductCards from "../components/products/productcard";
import ProductTable from "../components/products/producttable";

export default function Products() {
  return (
    <div className="h-full w-full bg-gray-50">
      <ProductCards />
      <ProductTable />
    </div>
  );
}
