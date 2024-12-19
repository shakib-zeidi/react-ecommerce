import { ProductItemType } from "../../types";

function ProductItem({ title, price, description, image }: ProductItemType) {
	return (
		<div className="shadow border rounded mt-5 h-full flex flex-col">
			<div className="flex flex-col items-center p-4">
				<div className="w-32 h-32 flex items-center justify-center">
					<img
						className="rounded object-contain w-full h-full"
						src={image}
						alt="product-img"
					/>
				</div>
				<h3 className="mt-2 line-clamp-1 font-bold text-center w-full">{title}</h3>
			</div>
			<div className="p-4 flex flex-col justify-between flex-1">
				<span className="font-bold text-green-600 mb-2">{price} $</span>
				<p className="line-clamp-2 text-gray-500">{description}</p>
			</div>
		</div>
	);
}

export default ProductItem;
