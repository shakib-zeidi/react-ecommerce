export interface ContainerInterface {
	children: React.ReactNode;
	className?: string;
}

export interface HomeLayoutInterface {
	children: React.ReactNode;
}

export interface ProductsInterface {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: ProductsRatingInterface;
}

export interface ProductsRatingInterface {
	rate: number;
	count: number;
}
