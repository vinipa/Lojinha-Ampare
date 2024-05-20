import { ProductProps } from "../types/ProductInterface";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Product = ({
  id,
  name,
  price,
  image,
  smallDescription,
}: ProductProps) => {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className="mx-5 my-5 bg-white rounded-xl max-w-fit">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <Link to={`/products/${id}`}>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
            <img
              src={image}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                R${price}
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              {smallDescription}
            </p>
          </div>
        </Link>

        <div className="p-6 pt-0">
          <button
            onClick={() => increaseCartQuantity(id)}
            className="align-middle text-white select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};
