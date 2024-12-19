import { createContext, useContext, useState } from "react";
import {
	CartItemInterface,
	ShoppingCartContextInterface,
	ShoppingCartProviderInterface,
} from "../interfaces";

export const ShoppingCartContext = createContext(
	{} as ShoppingCartContextInterface
);

export function ShoppingCartProvider({
	children,
}: ShoppingCartProviderInterface) {
	const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);

	return (
		<ShoppingCartContext.Provider value={{ cartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
