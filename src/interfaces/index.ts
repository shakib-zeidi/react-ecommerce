export interface ContainerInterface {
	children: React.ReactNode;
	className?: string;
}

export interface HomeLayoutInterface {
	children: React.ReactNode;
}

export interface ProductsType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: ProductsRating;
}

export interface ProductsRating {
	rate: number;
	count: number;
}
