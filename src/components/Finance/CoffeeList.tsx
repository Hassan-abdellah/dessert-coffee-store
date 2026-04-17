import { coffee } from "@/data.json";
import ProductCard from "./ProductCard";

const CoffeeList = () => {
  return (
    <div className="grid-list">
      {coffee.map((coffee) => (
        <ProductCard key={coffee.name} item={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;
