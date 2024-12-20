import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { ProductInterface } from "../../interfaces";
import useShoppingCartContext from "../../hooks/usShoppingCartContext";
import { Link } from "react-router-dom";

interface CartItemInterface {
	id: number;
	qty: number;
}

function CartItem({ id, qty }: CartItemInterface) {
	const [product, setProduct] = useState<ProductInterface>();

	const {
		handleIncreaseProductQty,
		handleDecreaseProductQty,
		handleRemoveProduct,
	} = useShoppingCartContext();

	useEffect(() => {
		getProduct(id).then((data) => {
			setProduct(data);
		});
	}, []);

	return (
		<div className="flex justify-between items-center mt-5 shadow p-4">
			<div>
				<Link to={`/product/${id}`}>
					<img
						className="rounded w-20"
						src={product?.image}
						alt="car-img"
					/>
				</Link>
			</div>
			<div>
				<h2>{product?.title}</h2>
			</div>
			<div className="ml-4">
				<div className="mt-2">
					<Button
						onClick={() => handleIncreaseProductQty(id)}
						className="rounded px-2"
						variant="primary"
					>
						+
					</Button>
					<span className="mx-2">{qty}</span>
					<Button
						onClick={() => handleDecreaseProductQty(id)}
						className="rounded px-2"
						variant="primary"
					>
						-
					</Button>
					<Button
						onClick={() => handleRemoveProduct(id)}
						className="rounded mr-2 px-3 py-1"
						variant="danger"
					>
						حذف محصول
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
