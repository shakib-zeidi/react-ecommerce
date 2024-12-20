import { ReactNode } from "react";

export interface ContainerInterface {
	children: React.ReactNode;
	className?: string;
}

export interface HomeLayoutInterface {
	children: React.ReactNode;
}

export interface ProductInterface {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: ProductRatingInterface;
}

export interface ProductRatingInterface {
	rate: number;
	count: number;
}

export interface ShoppingCartProviderInterface {
	children: ReactNode;
}

export interface CartItemInterface {
	id: number;
	qty: number;
}

export interface ShoppingCartContextInterface {
	cartItems: CartItemInterface[];
	handleIncreaseProductQty: (id: number) => void;
	handleDecreaseProductQty: (id: number) => void;
	getProductQty: (id: number) => number;
	handleRemoveProduct: (id: number) => void;
}
