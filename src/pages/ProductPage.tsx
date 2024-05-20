import { useParams } from "react-router-dom";
import dataBase from "../assets/dataBase.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

function ProductPage() {
  const { id } = useParams();
  const product = dataBase.find((p) => p.id === parseInt(id!));
  const { increaseCartQuantity } = useShoppingCart();
  if (!product) {
    return <h2 className="text-center text-white">Product not found</h2>;
  }

  return (
    <div className="flex static h-full px-24 py-6 flex-row">
      <div className="overflow-hidden rounded-l-lg">
        <img className="object-cover" src={product.image} alt={product.name} />
      </div>

      <div className="flex flex-col py-6 pr-24 pl-10 space-y-4 bg-white rounded-lg justify-between">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-gray-800">
              {product.name}
            </div>
            <div className="text-xl font-medium text-green-500">
              ${product.price}
            </div>
          </div>

          {product.bigDescription && (
            <div className="prose text-gray-600 py-12">
              <div>{product.bigDescription}</div>
            </div>
          )}
        </div>
        <button
          onClick={() => increaseCartQuantity(product.id)}
          className="align-middle text-white select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
