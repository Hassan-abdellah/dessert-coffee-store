import { coffee } from "@/data.json";
import ProductCard from "./ProductCard";

const CoffeeList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  gap-4">
      {coffee.map((coffee) => (
        <ProductCard key={coffee.name} item={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;
