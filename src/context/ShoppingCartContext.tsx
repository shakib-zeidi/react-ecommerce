import { createContext, useState } from "react";
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

	const handleIncreaseProductQty = (id: number) => {
		setCartItems((currentProducts) => {
			let selectedProduct = currentProducts.find(
				(product) => product.id == id
			);

			if (selectedProduct == null) {
				return [...currentProducts, { id: id, qty: 1 }];
			} else {
				return currentProducts.map((product) => {
					if (product.id == id) {
						return {
							...product,
							qty: product.qty + 1,
						};
					} else {
						return product;
					}
				});
			}
		});
	};

	const handleDecreaseProductQty = (id :number) => {
		setCartItems(currentProducts => {
			let selectedProduct = currentProducts.find(product => product.id == id);

			if (selectedProduct?.qty === 1) {
				return currentProducts.filter(product => product.id !== id)
			} 
			else {
				return currentProducts.map((product) => {
					if (product.id == id) {
						return {
							...product,
							qty: product.qty - 1,
						};
					} else {
						return product;
					}
				});
			}	
		})
	}

	return (
		<ShoppingCartContext.Provider
			value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
