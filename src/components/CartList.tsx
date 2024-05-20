import { useShoppingCart } from "../context/ShoppingCartContext";
import dataBase from "../assets/dataBase.json";
import { CartItem } from "./CartItem";
import { useEffect } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const CartList = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, closeCart, cartQuantity } = useShoppingCart();
  useEffect(() => {
    const button = document.getElementById("finalizar");
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = "/checkout";
      });
    }
  }, []);

  // Apply styles for right-aligned sidebar
  const sidebarStyles = `
    sidebar flex flex-col justify-between fixed right-0 top-0 h-screen bg-[#749dbd] text-white p-4 overflow-auto w-1/4
    ${isOpen ? "" : "hidden"}
  `;

  return (
    <div className={`${sidebarStyles} flex flex-col h-full`}>
      <div className="overflow-y-auto flex-grow">
        <div className="flex flex-row justify-between">
          <div className="text-xl uppercase font-bold self-center">
            Carrinho
          </div>
          <button onClick={closeCart} className="">
            X
          </button>
        </div>
        <ul className="">
          {cartQuantity === 0 ? (
            <div className="uppercase font-bold text-center py-12">
              Seu carrinho está vazio
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          )}
        </ul>
      </div>

      <div className="mt-auto bg-[#749dbd] flex flex-row justify-between py-2">
        <div className="text-xl uppercase font-bold self-center">
          Total R$
          {cartItems.reduce((total, cartItem) => {
            const item = dataBase.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </div>

        <button id="finalizar" className="text-xl uppercase font-bold">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartList;
