import { Product } from "./Product";
import dataBase from "../assets/dataBase.json";

export const ProductList = () => {
  return (
    <div className="px-24">
      <div>
        <div className="flex flex-wrap grid 2xl:grid-cols-4 justify-items-center xl:grid-cols-3">
          {dataBase.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              smallDescription={product.smallDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
