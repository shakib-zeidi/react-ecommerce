import { createContext, useState } from "react";
import { ShoppingCartContextInterface, ShoppingCartProviderInterface } from "../interfaces";


export const ShoppingCartContext = createContext<ShoppingCartContextInterface>({
    cartItems: []
});

export function ShoppingCartProvider({
	children,
}: ShoppingCartProviderInterface) {
    const [cartItems, setCartItems] = useState<[]>([]);

	return (
		<ShoppingCartContext.Provider value={{ cartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
