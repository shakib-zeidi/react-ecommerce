import { createContext } from "react";
import {
	CartItemInterface,
	ShoppingCartContextInterface,
	ShoppingCartProviderInterface,
} from "../interfaces";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext(
	{} as ShoppingCartContextInterface
);

export function ShoppingCartProvider({
	children,
}: ShoppingCartProviderInterface) {
	const [cartItems, setCartItems] = useLocalStorage<CartItemInterface[]>("cartItem", []);

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

	const handleDecreaseProductQty = (id: number) => {
		setCartItems((currentProducts) => {
			let selectedProduct = currentProducts.find(
				(product) => product.id == id
			);

			if (selectedProduct?.qty === 1) {
				return currentProducts.filter((product) => product.id !== id);
			} else {
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
		});
	};

	const getProductQty = (id: number) => {
		return cartItems.find((item) => item.id == id)?.qty || 0;
	};

	const handleRemoveProduct = (id: number) => {
		setCartItems((currentProducts) =>
			currentProducts.filter((product) => product.id != id)
		);
	};

	const cartQty = cartItems.reduce(
		(totalQty, item) => totalQty + item.qty,
		0
	);

	return (
		<ShoppingCartContext.Provider
			value={{
				cartItems,
				handleIncreaseProductQty,
				handleDecreaseProductQty,
				getProductQty,
				handleRemoveProduct,
				cartQty,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
