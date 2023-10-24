import { TCartItems } from "../../redux/cartSlice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cartItems");
  const items: TCartItems[] = data ? JSON.parse(data) : [];
  const countPizzas = items.reduce((sum, item) => item.count + sum, 0);
  const totalPrice = items.reduce((sum, item) => item.count * item.price + sum, 0);
  return {
    items,
    countPizzas,
    totalPrice,
  };
};
