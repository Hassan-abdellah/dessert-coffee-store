import desserts from "@/data.json";
import ProductCard from "./ProductCard";

const DessertsList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  gap-4">
      {desserts.map((dessert) => (
        <ProductCard key={dessert.name} dessert={dessert} />
      ))}
    </div>
  );
};

export default DessertsList;
