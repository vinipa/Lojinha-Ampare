import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import cartIcon from "../assets/cartIcon.svg";

export function Navbar() {
  const { cartQuantity, openCart, isOpen, closeCart } = useShoppingCart();

  return (
    <nav className="w-screen top-0 pl-24 pr-32 py-3 text-white bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to="/" className="">
          <img
            className="object-cover max-w-80"
            src="https://iili.io/JglHRbR.png"
            alt="Ampare"
          />
        </NavLink>
        <button
          onClick={isOpen ? closeCart : openCart}
          className="relative flex items-center justify-center rounded-full"
        >
          <img src={cartIcon}></img>
          <div className="absolute top-0 right-0 -mb-1 -mr-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
            {cartQuantity}
          </div>
        </button>
      </div>
    </nav>
  );
}
