import { desserts } from "@/data.json";
import ProductCard from "./ProductCard";

const DessertsList = () => {
  return (
    <div className="grid-list">
      {desserts.map((dessert) => (
        <ProductCard key={dessert.name} item={dessert} />
      ))}
    </div>
  );
};

export default DessertsList;
