import { useShoppingCart } from "../context/ShoppingCartContext";
import dataBase from "../assets/dataBase.json";
import { CartItemProps } from "../types/CartInterface";
import trash from "../assets/trash.svg";

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();

  const item = dataBase.find((i) => i.id === id);
  if (!item) {
    return <h2 className="text-center text-white">Produto não encontrado</h2>;
  }

  return (
    <div className="flex items-center space-x-2 py-4 mr-2 ">
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full flex-row">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 h-32">
          <img
            src={item.image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 w-full max-h-32">
          <div className="flex flex-row justify-between items-center">
            <div className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {item.name}
            </div>
            <button
              className="text-white rounded-sm px-2 py-1 text-sm bg-transparent"
              onClick={() => removeFromCart(item.id)}
            >
              <img src={trash}></img>
            </button>
          </div>
          <p className="text-gray-700">R$ {item.price}</p>
          <div className="flex flex-row items-center py-1 mt-2">
            <button
              onClick={() => decreaseCartQuantity(item.id)}
              type="button"
              className="text-xs bg-gray-200 hover:bg-gray-300 rounded-full px-2"
            >
              -
            </button>
            <p className="px-2">{quantity}</p>
            <button
              onClick={() => increaseCartQuantity(item.id)}
              type="button"
              className="text-xs bg-gray-200 hover:bg-gray-300 rounded-full px-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
